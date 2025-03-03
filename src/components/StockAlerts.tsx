import React from 'react';
import { StockAlert } from '../types';
import { AlertTriangle, AlertCircle, TrendingUp } from 'lucide-react';

interface StockAlertsProps {
  alerts: StockAlert[];
}

const StockAlerts: React.FC<StockAlertsProps> = ({ alerts }) => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'low':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'excess':
        return <TrendingUp className="h-5 w-5 text-blue-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getAlertClass = (type: string) => {
    switch (type) {
      case 'critical':
        return 'border-l-4 border-red-500 bg-red-500 bg-opacity-10';
      case 'low':
        return 'border-l-4 border-yellow-500 bg-yellow-500 bg-opacity-10';
      case 'excess':
        return 'border-l-4 border-blue-500 bg-blue-500 bg-opacity-10';
      default:
        return 'border-l-4 border-yellow-500 bg-yellow-500 bg-opacity-10';
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-white text-lg font-semibold">Stock Alerts</h2>
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {alerts.length} Active
        </span>
      </div>
      <div className="p-4">
        {alerts.length === 0 ? (
          <p className="text-gray-400 text-center py-4">No alerts at this time</p>
        ) : (
          <ul className="space-y-3">
            {alerts.map((alert) => (
              <li 
                key={alert.id} 
                className={`p-3 rounded-lg ${getAlertClass(alert.alertType)}`}
              >
                <div className="flex items-start">
                  <div className="mr-3 mt-0.5">
                    {getAlertIcon(alert.alertType)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-white">{alert.productName}</h3>
                      <span className="text-xs text-gray-400">{alert.createdAt}</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">
                      {alert.alertType === 'critical' && 'Critical stock level! '}
                      {alert.alertType === 'low' && 'Stock level below reorder point. '}
                      {alert.alertType === 'excess' && 'Excess inventory detected. '}
                      Current: <span className="font-medium">{alert.currentLevel}</span>, 
                      Threshold: <span className="font-medium">{alert.threshold}</span>
                    </p>
                    <div className="mt-2 flex space-x-2">
                      <button className="text-xs px-2 py-1 bg-blue-600 text-white rounded">
                        Order More
                      </button>
                      <button className="text-xs px-2 py-1 bg-gray-700 text-white rounded">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="p-4 border-t border-gray-700">
        <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors">
          View All Alerts
        </button>
      </div>
    </div>
  );
};

export default StockAlerts;