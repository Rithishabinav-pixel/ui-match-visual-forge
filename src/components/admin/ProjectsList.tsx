
import React, { useState } from 'react';
import { useProjects } from '@/hooks/useProjects';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Edit, Eye, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { ProjectViewDialog } from './ProjectViewDialog';
import { ProjectDeleteDialog } from './ProjectDeleteDialog';
import { ProjectEditDialog } from './ProjectEditDialog';
import { Project } from '@/types/project';

export const ProjectsList = () => {
  const { data: projects, isLoading, error } = useProjects();
  const [viewProject, setViewProject] = useState<Project | null>(null);
  const [editProject, setEditProject] = useState<Project | null>(null);
  const [deleteProject, setDeleteProject] = useState<Project | null>(null);

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex justify-center items-center py-8">
          <div className="text-gray-500">Loading projects...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-red-500 text-center py-8">
          Error loading projects: {error.message}
        </div>
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="p-6">
        <div className="text-center py-8">
          <div className="text-gray-500 mb-4">No projects found</div>
          <Button>Add First Project</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{project.title}</div>
                    {project.subtitle && (
                      <div className="text-sm text-gray-500">{project.subtitle}</div>
                    )}
                  </div>
                </TableCell>
                <TableCell>{project.client_name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{project.type}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {project.status.map((status, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {status}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{project.location || 'N/A'}</TableCell>
                <TableCell>
                  {format(new Date(project.created_at), 'MMM dd, yyyy')}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setViewProject(project)}
                      title="View project details"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setEditProject(project)}
                      title="Edit project"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-red-600 hover:text-red-700"
                      onClick={() => setDeleteProject(project)}
                      title="Delete project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ProjectViewDialog
        project={viewProject}
        isOpen={!!viewProject}
        onClose={() => setViewProject(null)}
      />

      <ProjectEditDialog
        project={editProject}
        isOpen={!!editProject}
        onClose={() => setEditProject(null)}
      />

      <ProjectDeleteDialog
        project={deleteProject}
        isOpen={!!deleteProject}
        onClose={() => setDeleteProject(null)}
      />
    </>
  );
};
