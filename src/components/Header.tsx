import React from 'react';
import { Bell, Search, Moon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">Inventory Dashboard</h1>
        <p className="text-gray-400 text-sm">Real-time stock monitoring and analysis</p>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search inventory..." 
            className="bg-gray-700 text-white rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
        
        <button className="p-2 rounded-full hover:bg-gray-700 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button className="p-2 rounded-full hover:bg-gray-700">
          <Moon className="h-5 w-5" />
        </button>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm">Today: {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;