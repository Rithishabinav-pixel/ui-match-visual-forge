
import React from 'react';
import { Sidebar } from '@/components/admin/Sidebar';
import { TopNavbar } from '@/components/admin/TopNavbar';
import { AddProjectForm } from '@/components/admin/AddProjectForm';
import { AdminRoute } from '@/components/admin/AdminRoute';

const AdminDashboard = () => {
  return (
    <AdminRoute>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopNavbar />
          <main className="flex-1 p-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="border-b px-6 py-4">
                  <h1 className="text-2xl font-bold text-gray-900">Add New Project</h1>
                  <p className="text-gray-600 mt-1">Create a new real estate project with detailed information</p>
                </div>
                <AddProjectForm />
              </div>
            </div>
          </main>
        </div>
      </div>
    </AdminRoute>
  );
};

export default AdminDashboard;
