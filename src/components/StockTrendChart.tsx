import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { StockTrend } from '../types';

interface StockTrendChartProps {
  data: StockTrend[];
  reorderPoint: number;
  productName: string;
}

const StockTrendChart: React.FC<StockTrendChartProps> = ({ data, reorderPoint, productName }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white text-lg font-semibold">Stock Trend: {productName}</h2>
      </div>
      <div className="p-4">
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="date" 
                tick={{ fill: '#9CA3AF' }} 
                tickLine={{ stroke: '#4B5563' }}
                axisLine={{ stroke: '#4B5563' }}
              />
              <YAxis 
                tick={{ fill: '#9CA3AF' }} 
                tickLine={{ stroke: '#4B5563' }}
                axisLine={{ stroke: '#4B5563' }}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', borderRadius: '0.5rem' }}
                itemStyle={{ color: '#F9FAFB' }}
                labelStyle={{ color: '#F9FAFB', fontWeight: 'bold' }}
              />
              <ReferenceLine 
                y={reorderPoint} 
                label={{ 
                  value: "Reorder Point", 
                  position: "insideBottomRight",
                  fill: '#EF4444',
                  fontSize: 12
                }} 
                stroke="#EF4444" 
                strokeDasharray="3 3" 
              />
              <Line 
                type="monotone" 
                dataKey="stockLevel" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={{ fill: '#3B82F6', r: 4 }}
                activeDot={{ r: 6, fill: '#60A5FA' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex justify-between text-sm">
          <div className="text-gray-400">
            <span className="block">Current: </span>
            <span className="text-white font-medium">{data[data.length - 1]?.stockLevel || 0} units</span>
          </div>
          <div className="text-gray-400">
            <span className="block">Reorder Point: </span>
            <span className="text-white font-medium">{reorderPoint} units</span>
          </div>
          <div className="text-gray-400">
            <span className="block">30-Day Avg: </span>
            <span className="text-white font-medium">
              {Math.round(data.reduce((sum, item) => sum + item.stockLevel, 0) / data.length)} units
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockTrendChart;