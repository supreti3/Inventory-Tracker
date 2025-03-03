import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, trend, color }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-gray-400 text-sm font-medium">{title}</h3>
          <p className="text-white text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      
      {trend && (
        <div className="flex items-center mt-2">
          <span className={`text-sm ${trend.isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {trend.isPositive ? '+' : ''}{trend.value}%
          </span>
          <span className="text-gray-400 text-xs ml-2">vs last month</span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;