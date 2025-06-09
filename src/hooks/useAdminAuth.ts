
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface AdminSession {
  id: string;
  session_token: string;
  expires_at: string;
  created_at: string;
}

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Check if admin is authenticated on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('admin_session_token');
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('admin_sessions')
        .select('*')
        .eq('session_token', token)
        .gt('expires_at', new Date().toISOString())
        .single();

      if (error || !data) {
        localStorage.removeItem('admin_session_token');
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth check error:', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (username: string, password: string) => {
    try {
      // Simple hardcoded admin credentials for demo
      if (username === 'admin' && password === 'admin123') {
        // Generate session token
        const sessionToken = crypto.randomUUID();
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 24); // 24 hours

        const { error } = await supabase
          .from('admin_sessions')
          .insert({
            session_token: sessionToken,
            expires_at: expiresAt.toISOString(),
          });

        if (error) {
          throw new Error(error.message);
        }

        localStorage.setItem('admin_session_token', sessionToken);
        setIsAuthenticated(true);
        
        toast({
          title: "Success",
          description: "Logged in successfully!",
        });
        
        return { success: true };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Login failed",
        variant: "destructive",
      });
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem('admin_session_token');
      if (token) {
        // Delete session from database
        await supabase
          .from('admin_sessions')
          .delete()
          .eq('session_token', token);
      }
      
      localStorage.removeItem('admin_session_token');
      setIsAuthenticated(false);
      
      toast({
        title: "Success",
        description: "Logged out successfully!",
      });
    } catch (error) {
      console.error('Logout error:', error);
      // Still remove local session even if DB operation fails
      localStorage.removeItem('admin_session_token');
      setIsAuthenticated(false);
    }
  };

  return {
    isAuthenticated,
    isLoading,
    login,
    logout,
  };
};
