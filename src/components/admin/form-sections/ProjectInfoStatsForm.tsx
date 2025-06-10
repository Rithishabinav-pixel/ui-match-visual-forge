
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { ProjectInfoStat } from '@/types/project';

interface ProjectInfoStatsFormProps {
  stats: ProjectInfoStat[];
  setStats: (stats: ProjectInfoStat[]) => void;
}

export const ProjectInfoStatsForm: React.FC<ProjectInfoStatsFormProps> = ({
  stats,
  setStats
}) => {
  const addStat = () => {
    setStats([...stats, { label: '', value: '' }]);
  };

  const removeStat = (index: number) => {
    setStats(stats.filter((_, i) => i !== index));
  };

  const updateStat = (index: number, field: keyof ProjectInfoStat, value: string) => {
    const newStats = [...stats];
    newStats[index][field] = value;
    setStats(newStats);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Project Info Stats</h2>
        <Button type="button" onClick={addStat} variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Stat
        </Button>
      </div>
      
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">Stat {index + 1}</h3>
              <Button
                type="button"
                onClick={() => removeStat(index)}
                variant="ghost"
                size="sm"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Label (e.g., CMDA Approved)"
                value={stat.label}
                onChange={(e) => updateStat(index, 'label', e.target.value)}
              />
              <Input
                placeholder="Value (e.g., 1100–2000 sqft)"
                value={stat.value}
                onChange={(e) => updateStat(index, 'value', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
