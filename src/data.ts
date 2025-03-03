import { Product, StockAlert, InventoryMovement, CategoryData, StockTrend } from './types';
import { format, subDays } from 'date-fns';

// Generate mock products
export const products: Product[] = [
  {
    id: '1',
    name: 'Quantum Processor X1',
    category: 'Electronics',
    stockLevel: 42,
    reorderPoint: 20,
    unitPrice: 299.99,
    supplier: 'TechCore Industries',
    lastUpdated: format(subDays(new Date(), 2), 'yyyy-MM-dd')
  },
  {
    id: '2',
    name: 'NanoFiber Cooling System',
    category: 'Hardware',
    stockLevel: 15,
    reorderPoint: 25,
    unitPrice: 189.50,
    supplier: 'CryoTech Solutions',
    lastUpdated: format(subDays(new Date(), 1), 'yyyy-MM-dd')
  },
  {
    id: '3',
    name: 'HoloDisplay Module',
    category: 'Display',
    stockLevel: 8,
    reorderPoint: 10,
    unitPrice: 499.99,
    supplier: 'OptiVision Corp',
    lastUpdated: format(new Date(), 'yyyy-MM-dd')
  },
  {
    id: '4',
    name: 'BioMetric Scanner Pro',
    category: 'Security',
    stockLevel: 31,
    reorderPoint: 15,
    unitPrice: 249.99,
    supplier: 'SecureTech Systems',
    lastUpdated: format(subDays(new Date(), 3), 'yyyy-MM-dd')
  },
  {
    id: '5',
    name: 'Fusion Battery Pack',
    category: 'Power',
    stockLevel: 5,
    reorderPoint: 12,
    unitPrice: 159.99,
    supplier: 'EnergyX Labs',
    lastUpdated: format(subDays(new Date(), 1), 'yyyy-MM-dd')
  },
  {
    id: '6',
    name: 'Neural Interface Adapter',
    category: 'Electronics',
    stockLevel: 22,
    reorderPoint: 10,
    unitPrice: 349.99,
    supplier: 'NeuraTech',
    lastUpdated: format(subDays(new Date(), 4), 'yyyy-MM-dd')
  },
  {
    id: '7',
    name: 'Quantum Storage Drive',
    category: 'Storage',
    stockLevel: 18,
    reorderPoint: 15,
    unitPrice: 279.99,
    supplier: 'DataQuant Systems',
    lastUpdated: format(subDays(new Date(), 2), 'yyyy-MM-dd')
  },
  {
    id: '8',
    name: 'Photonic Router',
    category: 'Networking',
    stockLevel: 12,
    reorderPoint: 8,
    unitPrice: 199.99,
    supplier: 'LightSpeed Networks',
    lastUpdated: format(subDays(new Date(), 1), 'yyyy-MM-dd')
  }
];

// Generate stock alerts based on product stock levels
export const stockAlerts: StockAlert[] = [
  {
    id: 'a1',
    productId: '3',
    productName: 'HoloDisplay Module',
    alertType: 'low',
    currentLevel: 8,
    threshold: 10,
    createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
  },
  {
    id: 'a2',
    productId: '5',
    productName: 'Fusion Battery Pack',
    alertType: 'critical',
    currentLevel: 5,
    threshold: 12,
    createdAt: format(subDays(new Date(), 1), 'yyyy-MM-dd HH:mm:ss')
  },
  {
    id: 'a3',
    productId: '2',
    productName: 'NanoFiber Cooling System',
    alertType: 'low',
    currentLevel: 15,
    threshold: 25,
    createdAt: format(subDays(new Date(), 2), 'yyyy-MM-dd HH:mm:ss')
  }
];

// Generate inventory movements
export const inventoryMovements: InventoryMovement[] = [
  {
    id: 'm1',
    productId: '1',
    productName: 'Quantum Processor X1',
    type: 'inbound',
    quantity: 15,
    date: format(subDays(new Date(), 5), 'yyyy-MM-dd')
  },
  {
    id: 'm2',
    productId: '3',
    productName: 'HoloDisplay Module',
    type: 'outbound',
    quantity: 3,
    date: format(subDays(new Date(), 3), 'yyyy-MM-dd')
  },
  {
    id: 'm3',
    productId: '5',
    productName: 'Fusion Battery Pack',
    type: 'outbound',
    quantity: 7,
    date: format(subDays(new Date(), 2), 'yyyy-MM-dd')
  },
  {
    id: 'm4',
    productId: '2',
    productName: 'NanoFiber Cooling System',
    type: 'inbound',
    quantity: 10,
    date: format(subDays(new Date(), 1), 'yyyy-MM-dd')
  },
  {
    id: 'm5',
    productId: '4',
    productName: 'BioMetric Scanner Pro',
    type: 'inbound',
    quantity: 8,
    date: format(new Date(), 'yyyy-MM-dd')
  }
];

// Category distribution data
export const categoryData: CategoryData[] = [
  { name: 'Electronics', value: 64, color: '#3B82F6' },
  { name: 'Hardware', value: 15, color: '#10B981' },
  { name: 'Display', value: 8, color: '#F59E0B' },
  { name: 'Security', value: 31, color: '#6366F1' },
  { name: 'Power', value: 5, color: '#EC4899' },
  { name: 'Storage', value: 18, color: '#8B5CF6' },
  { name: 'Networking', value: 12, color: '#14B8A6' }
];

// Generate stock trend data for the past 30 days
export const generateStockTrends = (productId: string): StockTrend[] => {
  const product = products.find(p => p.id === productId);
  if (!product) return [];
  
  const trends: StockTrend[] = [];
  let currentStock = product.stockLevel;
  
  // Generate data for the last 30 days
  for (let i = 30; i >= 0; i--) {
    // Random fluctuation between -3 and +5
    const fluctuation = Math.floor(Math.random() * 9) - 3;
    
    // Ensure stock doesn't go negative
    currentStock = Math.max(0, currentStock - fluctuation);
    
    trends.unshift({
      date: format(subDays(new Date(), i), 'MMM dd'),
      stockLevel: currentStock
    });
    
    // Add the fluctuation back for the next iteration
    currentStock = Math.max(0, currentStock + fluctuation);
  }
  
  return trends;
};

// Overall inventory value
export const calculateTotalInventoryValue = (): number => {
  return products.reduce((total, product) => {
    return total + (product.stockLevel * product.unitPrice);
  }, 0);
};

// Count of products below reorder point
export const getProductsBelowReorderPoint = (): number => {
  return products.filter(product => product.stockLevel < product.reorderPoint).length;
};

// Total number of products
export const getTotalProductCount = (): number => {
  return products.length;
};

// Total stock quantity
export const getTotalStockQuantity = (): number => {
  return products.reduce((total, product) => total + product.stockLevel, 0);
};