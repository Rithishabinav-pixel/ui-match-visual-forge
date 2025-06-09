
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useImageUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const uploadImages = async (files: File[]): Promise<string[]> => {
    if (!files.length) return [];

    setIsUploading(true);
    try {
      const uploadPromises = files.map(async (file, index) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${index}.${fileExt}`;
        
        console.log('Uploading file:', fileName);
        
        const { data, error } = await supabase.storage
          .from('project-images')
          .upload(fileName, file, {
            cacheControl: '3600',
            upsert: false
          });

        if (error) {
          console.error('Storage upload error:', error);
          throw new Error(`Image upload failed: ${error.message}`);
        }

        console.log('Upload successful:', data);

        const { data: urlData } = supabase.storage
          .from('project-images')
          .getPublicUrl(data.path);

        console.log('Public URL generated:', urlData.publicUrl);
        return urlData.publicUrl;
      });

      const imageUrls = await Promise.all(uploadPromises);
      console.log('All images uploaded successfully:', imageUrls);
      
      return imageUrls;
    } catch (error) {
      console.error('Image upload failed:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Image upload failed",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    uploadImages,
    isUploading
  };
};
