
import React from 'react';
import { Sidebar } from '@/components/admin/Sidebar';
import { TopNavbar } from '@/components/admin/TopNavbar';
import { ProjectsList } from '@/components/admin/ProjectsList';

const AdminProjects = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNavbar />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="border-b px-6 py-4">
                <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
                <p className="text-gray-600 mt-1">Manage all your real estate projects</p>
              </div>
              <ProjectsList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminProjects;
