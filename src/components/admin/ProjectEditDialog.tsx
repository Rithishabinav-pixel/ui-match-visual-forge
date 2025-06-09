
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { Project } from '@/types/project';
import { useUpdateProject } from '@/hooks/useProjectMutations';

interface ProjectEditDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectEditDialog = ({ project, isOpen, onClose }: ProjectEditDialogProps) => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    client_name: '',
    type: '',
    location: '',
    overview: '',
    objectives: '',
    status: [] as string[],
    highlights: [] as string[],
  });
  const [newStatus, setNewStatus] = useState('');
  const [newHighlight, setNewHighlight] = useState('');
  
  const updateProject = useUpdateProject();

  useEffect(() => {
    if (project && isOpen) {
      setFormData({
        title: project.title,
        subtitle: project.subtitle || '',
        client_name: project.client_name,
        type: project.type,
        location: project.location || '',
        overview: project.overview || '',
        objectives: project.objectives || '',
        status: [...project.status],
        highlights: [...project.highlights],
      });
    }
  }, [project, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project) return;

    try {
      await updateProject.mutateAsync({
        projectId: project.id,
        updateData: formData,
      });
      onClose();
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const addStatus = () => {
    if (newStatus.trim() && !formData.status.includes(newStatus.trim())) {
      setFormData(prev => ({
        ...prev,
        status: [...prev.status, newStatus.trim()]
      }));
      setNewStatus('');
    }
  };

  const removeStatus = (statusToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      status: prev.status.filter(s => s !== statusToRemove)
    }));
  };

  const addHighlight = () => {
    if (newHighlight.trim() && !formData.highlights.includes(newHighlight.trim())) {
      setFormData(prev => ({
        ...prev,
        highlights: [...prev.highlights, newHighlight.trim()]
      }));
      setNewHighlight('');
    }
  };

  const removeHighlight = (highlightToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      highlights: prev.highlights.filter(h => h !== highlightToRemove)
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
                disabled={updateProject.isPending}
              />
            </div>
            
            <div>
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input
                id="subtitle"
                value={formData.subtitle}
                onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                disabled={updateProject.isPending}
              />
            </div>
            
            <div>
              <Label htmlFor="client_name">Client Name *</Label>
              <Input
                id="client_name"
                value={formData.client_name}
                onChange={(e) => setFormData(prev => ({ ...prev, client_name: e.target.value }))}
                required
                disabled={updateProject.isPending}
              />
            </div>
            
            <div>
              <Label htmlFor="type">Project Type *</Label>
              <Input
                id="type"
                value={formData.type}
                onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                required
                disabled={updateProject.isPending}
              />
            </div>
            
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                disabled={updateProject.isPending}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="overview">Overview</Label>
            <Textarea
              id="overview"
              value={formData.overview}
              onChange={(e) => setFormData(prev => ({ ...prev, overview: e.target.value }))}
              rows={3}
              disabled={updateProject.isPending}
            />
          </div>

          <div>
            <Label htmlFor="objectives">Objectives</Label>
            <Textarea
              id="objectives"
              value={formData.objectives}
              onChange={(e) => setFormData(prev => ({ ...prev, objectives: e.target.value }))}
              rows={3}
              disabled={updateProject.isPending}
            />
          </div>

          <div>
            <Label>Status Tags</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                placeholder="Add status..."
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addStatus())}
                disabled={updateProject.isPending}
              />
              <Button type="button" onClick={addStatus} disabled={updateProject.isPending}>
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-1">
              {formData.status.map((status, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {status}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => removeStatus(status)}
                  />
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <Label>Highlights</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={newHighlight}
                onChange={(e) => setNewHighlight(e.target.value)}
                placeholder="Add highlight..."
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addHighlight())}
                disabled={updateProject.isPending}
              />
              <Button type="button" onClick={addHighlight} disabled={updateProject.isPending}>
                Add
              </Button>
            </div>
            <div className="space-y-1">
              {formData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <span>• {highlight}</span>
                  <X 
                    className="w-3 h-3 cursor-pointer text-red-500" 
                    onClick={() => removeHighlight(highlight)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose} disabled={updateProject.isPending}>
              Cancel
            </Button>
            <Button type="submit" disabled={updateProject.isPending}>
              {updateProject.isPending ? 'Updating...' : 'Update Project'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
