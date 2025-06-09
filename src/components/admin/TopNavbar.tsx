
import React from 'react';
import { Bell, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useEnquiryNotifications } from '@/hooks/useEnquiryNotifications';
import { useNavigate, useLocation } from 'react-router-dom';

export const TopNavbar = () => {
  const { logout } = useAdminAuth();
  const { data: notifications } = useEnquiryNotifications();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNotificationClick = () => {
    navigate('/admin/enquiries');
  };

  const handleLogout = async () => {
    await logout();
    navigate('/admin');
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/admin':
        return 'Dashboard';
      case '/admin/projects':
        return 'Projects';
      case '/admin/enquiries':
        return 'Enquiries';
      default:
        return 'Admin Panel';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{getPageTitle()}</h1>
          <p className="text-gray-600">Welcome to the admin panel</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNotificationClick}
            className="relative"
          >
            <Bell className="w-5 h-5" />
            {notifications && notifications.totalUnread > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {notifications.totalUnread}
              </Badge>
            )}
          </Button>
          
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-700">Admin</span>
          </div>
          
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
