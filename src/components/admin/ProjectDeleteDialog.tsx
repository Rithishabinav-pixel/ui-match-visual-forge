
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useDeleteProject } from '@/hooks/useProjectMutations';
import { Project } from '@/types/project';

interface ProjectDeleteDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDeleteDialog = ({ project, isOpen, onClose }: ProjectDeleteDialogProps) => {
  const deleteProject = useDeleteProject();

  const handleDelete = async () => {
    if (!project) return;
    
    try {
      await deleteProject.mutateAsync(project.id);
      onClose();
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Project</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete "{project?.title}"? This action cannot be undone.
            All project data and associated images will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={deleteProject.isPending}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleDelete}
            disabled={deleteProject.isPending}
            className="bg-red-600 hover:bg-red-700"
          >
            {deleteProject.isPending ? 'Deleting...' : 'Delete Project'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
