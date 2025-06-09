
import React from 'react';
import { Home, Plus, FolderOpen, MessageSquare, LogOut, Building2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { name: 'Dashboard', icon: Home, href: '/admin' },
  { name: 'Add Project', icon: Plus, href: '/admin/add-project' },
  { name: 'Projects', icon: FolderOpen, href: '/admin/projects' },
  { name: 'Feedback', icon: MessageSquare, href: '/admin/feedback' },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-[rgba(40,45,64,1)] text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <Building2 className="w-8 h-8 text-[rgba(217,37,70,1)]" />
          <div>
            <h2 className="text-lg font-bold">JKB Admin</h2>
            <p className="text-sm text-gray-400">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive 
                      ? "bg-[rgba(217,37,70,1)] text-white" 
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors w-full">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
