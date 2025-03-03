import React from 'react';
import { InventoryMovement } from '../types';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

interface InventoryMovementsProps {
  movements: InventoryMovement[];
}

const InventoryMovements: React.FC<InventoryMovementsProps> = ({ movements }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white text-lg font-semibold">Recent Movements</h2>
      </div>
      <div className="p-4">
        <ul className="space-y-3">
          {movements.map((movement) => (
            <li key={movement.id} className="flex items-center p-3 bg-gray-700 bg-opacity-50 rounded-lg">
              <div className={`p-2 rounded-full mr-3 ${movement.type === 'inbound' ? 'bg-green-500 bg-opacity-20' : 'bg-red-500 bg-opacity-20'}`}>
                {movement.type === 'inbound' ? (
                  <ArrowDownCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <ArrowUpCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium text-white">{movement.productName}</h3>
                  <span className="text-xs text-gray-400">{movement.date}</span>
                </div>
                <p className="text-sm text-gray-300 mt-1">
                  {movement.type === 'inbound' ? 'Received' : 'Shipped'}{' '}
                  <span className="font-medium">{movement.quantity}</span> units
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-t border-gray-700">
        <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors">
          View All Movements
        </button>
      </div>
    </div>
  );
};

export default InventoryMovements;