
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { insertSampleProjects } from '@/utils/sampleProjectData';

export const SampleDataInserter = () => {
  const [isInserting, setIsInserting] = useState(false);
  const { toast } = useToast();

  const handleInsertSampleData = async () => {
    setIsInserting(true);
    try {
      await insertSampleProjects();
      toast({
        title: "Success",
        description: "Sample project data inserted successfully!",
      });
    } catch (error) {
      console.error('Error inserting sample data:', error);
      toast({
        title: "Error",
        description: "Failed to insert sample data. Please check the console for details.",
        variant: "destructive",
      });
    } finally {
      setIsInserting(false);
    }
  };

  return (
    <div className="p-6 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-4">Sample Data Management</h3>
      <p className="text-gray-600 mb-4">
        Insert sample project data with specifications sections for testing and demonstration.
      </p>
      <Button 
        onClick={handleInsertSampleData}
        disabled={isInserting}
        className="w-full"
      >
        {isInserting ? 'Inserting Sample Data...' : 'Insert Sample Project Data'}
      </Button>
    </div>
  );
};
