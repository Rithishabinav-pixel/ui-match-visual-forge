
import React from 'react';
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

export const ProjectsList = () => {
  const { data: projects, isLoading, error } = useProjects();

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
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
