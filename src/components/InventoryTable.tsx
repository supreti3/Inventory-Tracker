import React from 'react';
import { Product } from '../types';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

interface InventoryTableProps {
  products: Product[];
}

const InventoryTable: React.FC<InventoryTableProps> = ({ products }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white text-lg font-semibold">Inventory Status</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-900 text-gray-400 text-xs uppercase">
              <th className="px-6 py-3 text-left">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>Product</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>Category</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>Stock Level</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>Reorder Point</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>Unit Price</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span>Last Updated</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {products.map((product) => (
              <tr key={product.id} className="text-white hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium">{product.name}</div>
                  <div className="text-gray-400 text-xs">ID: {product.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-700">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div 
                      className={`h-2 w-16 rounded-full mr-2 ${
                        product.stockLevel < product.reorderPoint 
                          ? 'bg-red-500' 
                          : product.stockLevel < product.reorderPoint * 1.5 
                            ? 'bg-yellow-500' 
                            : 'bg-green-500'
                      }`}
                    >
                      <div 
                        className="h-full bg-opacity-50 rounded-full" 
                        style={{ 
                          width: `${Math.min(100, (product.stockLevel / (product.reorderPoint * 2)) * 100)}%`,
                          backgroundColor: 'rgba(255, 255, 255, 0.3)'
                        }}
                      ></div>
                    </div>
                    <span>{product.stockLevel}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.reorderPoint}</td>
                <td className="px-6 py-4 whitespace-nowrap">${product.unitPrice.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.lastUpdated}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-gray-400 hover:text-white">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-gray-700 flex justify-between items-center">
        <div className="text-sm text-gray-400">
          Showing <span className="font-medium text-white">{products.length}</span> products
        </div>
        <div className="flex space-x-1">
          <button className="px-3 py-1 rounded bg-gray-700 text-white text-sm">Previous</button>
          <button className="px-3 py-1 rounded bg-blue-600 text-white text-sm">Next</button>
        </div>
      </div>
    </div>
  );
};

export default InventoryTable;