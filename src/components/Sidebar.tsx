import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  Settings, 
  LogOut,
  Database,
  Users,
  FileText,
  BarChart3
} from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-5 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <Database className="h-8 w-8 text-blue-400" />
          <h1 className="text-xl font-bold">QuantumStock</h1>
        </div>
        <p className="text-xs text-gray-400 mt-1">Inventory Management System</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 text-white">
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
              <Package className="h-5 w-5" />
              <span>Inventory</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
              <AlertTriangle className="h-5 w-5" />
              <span>Alerts</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
              <TrendingUp className="h-5 w-5" />
              <span>Analytics</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
              <Users className="h-5 w-5" />
              <span>Suppliers</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
              <FileText className="h-5 w-5" />
              <span>Reports</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
              <BarChart3 className="h-5 w-5" />
              <span>Forecasting</span>
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
      
      <div className="p-4 bg-gray-800 flex items-center space-x-3">
        <img 
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
          alt="User" 
          className="h-8 w-8 rounded-full"
        />
        <div>
          <p className="text-sm font-medium">Alex Morgan</p>
          <p className="text-xs text-gray-400">Inventory Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;