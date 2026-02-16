// lib/api-client.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Frontend types - lib/api-client.ts yoki types.ts

export enum Quality {
  K14 = '14K',
  K18 = '18K',
  K22 = '22K',
}

export interface Category {
  id: number;
  name_uz: string;
  name_ru: string;
  name_en: string;
  name_tr: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  name: string;
  weight: number; // float (gramm)
  comment?: string; // Izoh
  size?: string; // O'lcham
  quality?: Quality; // 14K, 18K, 22K
  images: string[]; // Full URLs
  category_id: number;
  category?: Category;
  createdAt: string;
  updatedAt: string;
}

// Store slice interface
export interface ProductFormData {
  name: string;
  weight: number | string; // Input'da string bo'lishi mumkin
  comment?: string;
  size?: string;
  quality?: Quality;
  category_id: number;
  images?: File[];
  removeImages?: string[];
}
// Categories API
export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_BASE_URL}categories`, {
      cache: 'no-store', // Always get fresh data
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function fetchCategoryById(id: number): Promise<Category | null> {
  try {
    const response = await fetch(`${API_BASE_URL}categories/${id}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
}

// Products API
export async function fetchProducts(categoryId?: number): Promise<Product[]> {
  try {
    const url = categoryId 
      ? `${API_BASE_URL}products?category_id=${categoryId}`
      : `${API_BASE_URL}products`;
      
    const response = await fetch(url, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProductById(id: number): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE_URL}products/${id}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}