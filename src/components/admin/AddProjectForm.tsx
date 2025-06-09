
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Plus, Trash2, Upload, Star } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const projectSchema = z.object({
  title: z.string().min(1, 'Project title is required'),
  subtitle: z.string().min(1, 'Project subtitle is required'),
  clientName: z.string().min(1, 'Client name is required'),
  status: z.array(z.string()).min(1, 'At least one status is required'),
  type: z.string().min(1, 'Project type is required'),
  overview: z.string().min(1, 'Project overview is required'),
  objectives: z.string().min(1, 'Project objectives are required'),
  highlights: z.array(z.string()),
  location: z.string().min(1, 'Location is required'),
  completionDate: z.date(),
  unitTypes: z.string().min(1, 'Unit types are required'),
  unitSizes: z.string().min(1, 'Unit sizes are required'),
  ctaTitle: z.string().min(1, 'CTA title is required'),
  ctaSubtitle: z.string().min(1, 'CTA subtitle is required'),
  buttonText: z.string().min(1, 'Button text is required'),
  buttonLink: z.string().min(1, 'Button link is required'),
});

type ProjectFormData = z.infer<typeof projectSchema>;

export const AddProjectForm = () => {
  const [timelineSteps, setTimelineSteps] = useState([
    { title: '', status: 'upcoming', description: '', duration: '', unit: 'months' }
  ]);
  const [clientFeedback, setClientFeedback] = useState({
    name: '', designation: '', company: '', testimonial: '', rating: 5
  });
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: '',
      subtitle: '',
      clientName: '',
      status: [],
      type: '',
      overview: '',
      objectives: '',
      highlights: [],
      location: '',
      unitTypes: '',
      unitSizes: '',
      ctaTitle: '',
      ctaSubtitle: '',
      buttonText: '',
      buttonLink: '',
    },
  });

  const statusOptions = ['Ongoing', 'Completed', 'Upcoming'];
  const typeOptions = ['Residential', 'Commercial', 'Mixed Use', 'Industrial'];
  const highlightOptions = [
    'Modern Design', 'Prime Location', 'Energy Efficient', 'Smart Home Ready',
    'Gated Community', 'Swimming Pool', 'Gym & Fitness', 'Parking Space',
    'Garden & Landscaping', 'Security Systems'
  ];

  const addTimelineStep = () => {
    setTimelineSteps([...timelineSteps, { 
      title: '', status: 'upcoming', description: '', duration: '', unit: 'months' 
    }]);
  };

  const removeTimelineStep = (index: number) => {
    setTimelineSteps(timelineSteps.filter((_, i) => i !== index));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedImages([...selectedImages, ...Array.from(files)]);
    }
  };

  const onSubmit = (data: ProjectFormData) => {
    console.log('Form Data:', data);
    console.log('Timeline Steps:', timelineSteps);
    console.log('Client Feedback:', clientFeedback);
    console.log('Images:', selectedImages);
    // Handle form submission here
  };

  return (
    <div className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[rgba(40,45,64,1)]">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., JKB Sathya Residences" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="subtitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Subtitle</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Luxury Living Redefined" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="clientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Client name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {typeOptions.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Project Status */}
            <div className="mt-4">
              <FormField
                control={form.control}
                name="status"
                render={() => (
                  <FormItem>
                    <FormLabel>Project Status</FormLabel>
                    <div className="flex gap-4">
                      {statusOptions.map((status) => (
                        <FormField
                          key={status}
                          control={form.control}
                          name="status"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={status}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(status)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, status])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== status
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {status}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Project Overview */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[rgba(40,45,64,1)]">Project Overview</h2>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="overview"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Overview</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe the project overview..."
                        className="min-h-24"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="objectives"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Objectives</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="• Objective 1&#10;• Objective 2&#10;• Objective 3"
                        className="min-h-24"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[rgba(40,45,64,1)]">Key Highlights</h2>
            <FormField
              control={form.control}
              name="highlights"
              render={() => (
                <FormItem>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {highlightOptions.map((highlight) => (
                      <FormField
                        key={highlight}
                        control={form.control}
                        name="highlights"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={highlight}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(highlight)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, highlight])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== highlight
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-sm">
                                {highlight}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Project Details */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[rgba(40,45,64,1)]">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Banashankari, Bangalore" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="completionDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Completion Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date()
                          }
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="unitTypes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit Types</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 2 & 3 BHK" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="unitSizes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit Sizes</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 1268 - 1257 - 977 Sq.ft" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Project Gallery */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[rgba(40,45,64,1)]">Project Gallery</h2>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <label htmlFor="images" className="cursor-pointer">
                    <span className="mt-2 block text-sm font-medium text-gray-900">
                      Upload images
                    </span>
                    <span className="mt-1 block text-sm text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </span>
                  </label>
                  <input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              
              {selectedImages.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {selectedImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Preview ${index}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => setSelectedImages(selectedImages.filter((_, i) => i !== index))}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Project Timeline */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Project Timeline</h2>
              <Button type="button" onClick={addTimelineStep} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Step
              </Button>
            </div>
            
            <div className="space-y-4">
              {timelineSteps.map((step, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">Step {index + 1}</h3>
                    {timelineSteps.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removeTimelineStep(index)}
                        variant="ghost"
                        size="sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Step title"
                      value={step.title}
                      onChange={(e) => {
                        const newSteps = [...timelineSteps];
                        newSteps[index].title = e.target.value;
                        setTimelineSteps(newSteps);
                      }}
                    />
                    
                    <Select
                      value={step.status}
                      onValueChange={(value) => {
                        const newSteps = [...timelineSteps];
                        newSteps[index].status = value;
                        setTimelineSteps(newSteps);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="current">Current</SelectItem>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Textarea
                    placeholder="Step description"
                    className="mt-3"
                    value={step.description}
                    onChange={(e) => {
                      const newSteps = [...timelineSteps];
                      newSteps[index].description = e.target.value;
                      setTimelineSteps(newSteps);
                    }}
                  />
                  
                  <div className="flex gap-2 mt-3">
                    <Input
                      placeholder="Duration"
                      type="number"
                      className="flex-1"
                      value={step.duration}
                      onChange={(e) => {
                        const newSteps = [...timelineSteps];
                        newSteps[index].duration = e.target.value;
                        setTimelineSteps(newSteps);
                      }}
                    />
                    <Select
                      value={step.unit}
                      onValueChange={(value) => {
                        const newSteps = [...timelineSteps];
                        newSteps[index].unit = value;
                        setTimelineSteps(newSteps);
                      }}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="days">Days</SelectItem>
                        <SelectItem value="weeks">Weeks</SelectItem>
                        <SelectItem value="months">Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Feedback */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[rgba(40,45,64,1)]">Client Feedback</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Client Name"
                value={clientFeedback.name}
                onChange={(e) => setClientFeedback({...clientFeedback, name: e.target.value})}
              />
              <Input
                placeholder="Designation"
                value={clientFeedback.designation}
                onChange={(e) => setClientFeedback({...clientFeedback, designation: e.target.value})}
              />
              <Input
                placeholder="Company"
                value={clientFeedback.company}
                onChange={(e) => setClientFeedback({...clientFeedback, company: e.target.value})}
              />
              <div className="flex items-center gap-2">
                <span className="text-sm">Rating:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setClientFeedback({...clientFeedback, rating: star})}
                    className={cn(
                      "w-6 h-6",
                      star <= clientFeedback.rating ? "text-yellow-400" : "text-gray-300"
                    )}
                  >
                    <Star className="w-full h-full fill-current" />
                  </button>
                ))}
              </div>
            </div>
            <Textarea
              placeholder="Client testimonial..."
              className="mt-4"
              value={clientFeedback.testimonial}
              onChange={(e) => setClientFeedback({...clientFeedback, testimonial: e.target.value})}
            />
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[rgba(40,45,64,1)]">CTA Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="ctaTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CTA Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Interested in This Project?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ctaSubtitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CTA Subtitle</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Contact us for more details" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="buttonText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Button Text</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Contact Now" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="buttonLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Button Link</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., /contact" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-4 pt-6">
            <Button 
              type="submit" 
              className="bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] px-8"
            >
              Submit Project
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => form.reset()}
              className="px-8"
            >
              Reset Form
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
