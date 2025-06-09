
import React from 'react';
import { Bell, User, Search, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const TopNavbar = () => {
  const { logout } = useAdminAuth();

  // Get unread enquiry count
  const { data: unreadCount = 0 } = useQuery({
    queryKey: ['unread-count'],
    queryFn: async () => {
      const [projectResult, contactResult] = await Promise.all([
        supabase
          .from('project_enquiries')
          .select('id', { count: 'exact' })
          .eq('is_read', false),
        supabase
          .from('contact_enquiries')
          .select('id', { count: 'exact' })
          .eq('is_read', false)
      ]);

      if (projectResult.error) throw new Error(projectResult.error.message);
      if (contactResult.error) throw new Error(contactResult.error.message);

      return (projectResult.count || 0) + (contactResult.count || 0);
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search projects..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[rgba(217,37,70,1)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount > 99 ? '99+' : unreadCount}
              </span>
            )}
          </Button>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">admin@jkb.com</p>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-5 h-5" />
            </Button>
          </div>

          {/* Logout */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleLogout}
            title="Logout"
            className="text-gray-600 hover:text-gray-900"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
