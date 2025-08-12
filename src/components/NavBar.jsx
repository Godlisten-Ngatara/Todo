import React from "react";
import { Home, Package } from "lucide-react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="bg-white shadow-sm mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h2 className="text-xl font-bold text-gray-900">TodoApp</h2>
            </div>
            <div className="flex space-x-4">
              <Link
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                to="/"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                to="/components"
              >
                <Package className="w-4 h-4" />
                Components
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
