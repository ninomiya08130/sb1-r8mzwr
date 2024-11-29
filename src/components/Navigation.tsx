import React from 'react';
import { Home, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>ホーム</span>
            </Link>
            <Link
              to="/schedule"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                isActive('/schedule') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>スケジュール</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}