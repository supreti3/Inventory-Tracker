import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import InventoryTable from './components/InventoryTable';
import StockAlerts from './components/StockAlerts';
import InventoryMovements from './components/InventoryMovements';
import CategoryDistribution from './components/CategoryDistribution';
import StockTrendChart from './components/StockTrendChart';
import { 
  Package, 
  AlertTriangle, 
  DollarSign, 
  BarChart3 
} from 'lucide-react';
import { 
  products, 
  stockAlerts, 
  inventoryMovements, 
  categoryData, 
  generateStockTrends,
  calculateTotalInventoryValue,
  getProductsBelowReorderPoint,
  getTotalProductCount,
  getTotalStockQuantity
} from './data';

function App() {
  const [selectedProduct] = useState(products[0]);
  const stockTrends = generateStockTrends(selectedProduct.id);
  
  const totalInventoryValue = calculateTotalInventoryValue();
  const productsBelowReorderPoint = getProductsBelowReorderPoint();
  const totalProducts = getTotalProductCount();
  const totalStock = getTotalStockQuantity();

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-4 gap-6 mb-6">
            <StatsCard 
              title="Total Products" 
              value={totalProducts} 
              icon={Package} 
              trend={{ value: 12, isPositive: true }}
              color="bg-blue-600"
            />
            <StatsCard 
              title="Total Stock" 
              value={totalStock} 
              icon={BarChart3} 
              trend={{ value: 8, isPositive: true }}
              color="bg-green-600"
            />
            <StatsCard 
              title="Low Stock Items" 
              value={productsBelowReorderPoint} 
              icon={AlertTriangle} 
              trend={{ value: 5, isPositive: false }}
              color="bg-red-600"
            />
            <StatsCard 
              title="Inventory Value" 
              value={`$${totalInventoryValue.toLocaleString()}`} 
              icon={DollarSign} 
              trend={{ value: 3, isPositive: true }}
              color="bg-purple-600"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="col-span-2">
              <StockTrendChart 
                data={stockTrends} 
                reorderPoint={selectedProduct.reorderPoint}
                productName={selectedProduct.name}
              />
            </div>
            <div>
              <CategoryDistribution data={categoryData} />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="col-span-2">
              <InventoryTable products={products} />
            </div>
            <div className="space-y-6">
              <StockAlerts alerts={stockAlerts} />
              <InventoryMovements movements={inventoryMovements} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;