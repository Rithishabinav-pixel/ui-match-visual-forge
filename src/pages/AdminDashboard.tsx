
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProjectsList } from '@/components/admin/ProjectsList';
import { AddProjectForm } from '@/components/admin/AddProjectForm';
import { AddJKBGraceProject } from '@/components/admin/AddJKBGraceProject';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-sm border-b">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your projects and content</p>
          </div>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white border-b">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="add-project">Add Project</TabsTrigger>
            <TabsTrigger value="jkb-grace">Create JKB Grace</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects" className="mt-0">
            <ProjectsList />
          </TabsContent>
          
          <TabsContent value="add-project" className="mt-0">
            <AddProjectForm />
          </TabsContent>

          <TabsContent value="jkb-grace" className="mt-0">
            <AddJKBGraceProject />
          </TabsContent>
          
          <TabsContent value="settings" className="mt-0">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Settings</h2>
              <p className="text-gray-600">Settings panel coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
