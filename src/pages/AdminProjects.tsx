
import React, { useState } from 'react';
import { TopNavbar } from '@/components/admin/TopNavbar';
import { Sidebar } from '@/components/admin/Sidebar';
import { ProjectsList } from '@/components/admin/ProjectsList';
import { AddProjectForm } from '@/components/admin/AddProjectForm';
import { SampleDataInserter } from '@/components/admin/SampleDataInserter';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const AdminProjects = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Projects Management</h1>
              <Button onClick={() => setShowAddForm(!showAddForm)}>
                <Plus className="w-4 h-4 mr-2" />
                {showAddForm ? 'View Projects' : 'Add New Project'}
              </Button>
            </div>

            {showAddForm ? (
              <div className="space-y-6">
                <SampleDataInserter />
                <AddProjectForm />
              </div>
            ) : (
              <div className="space-y-6">
                <SampleDataInserter />
                <ProjectsList />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjects;
