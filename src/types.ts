export interface Product {
  id: string;
  name: string;
  category: string;
  stockLevel: number;
  reorderPoint: number;
  unitPrice: number;
  supplier: string;
  lastUpdated: string;
}

export interface StockAlert {
  id: string;
  productId: string;
  productName: string;
  alertType: 'low' | 'critical' | 'excess';
  currentLevel: number;
  threshold: number;
  createdAt: string;
}

export interface InventoryMovement {
  id: string;
  productId: string;
  productName: string;
  type: 'inbound' | 'outbound';
  quantity: number;
  date: string;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface StockTrend {
  date: string;
  stockLevel: number;
}