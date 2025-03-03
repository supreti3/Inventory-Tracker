import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CategoryData } from '../types';

interface CategoryDistributionProps {
  data: CategoryData[];
}

const CategoryDistribution: React.FC<CategoryDistributionProps> = ({ data }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white text-lg font-semibold">Category Distribution</h2>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => [`${value} units`, 'Quantity']}
                contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', borderRadius: '0.5rem' }}
                itemStyle={{ color: '#F9FAFB' }}
                labelStyle={{ color: '#F9FAFB', fontWeight: 'bold' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4 w-full">
          {data.map((category) => (
            <div key={category.name} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: category.color }}
              ></div>
              <span className="text-xs text-gray-300">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDistribution;