
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
import { CalendarIcon, Plus, Trash2, Upload, Star, Loader2, FileText, MapPin, Video, HelpCircle, Image } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useCreateProject } from '@/hooks/useProjects';
import { useImageUpload } from '@/hooks/useImageUpload';
import { 
  CreateProjectRequest, 
  TimelineStep, 
  ClientFeedback,
  ProjectDetails,
  VideoSection,
  Amenity,
  FAQ,
  FloorPlan,
  BrochureSection,
  ProgressImage,
  ProjectSpecifications,
  LocationDetails
} from '@/types/project';

const projectSchema = z.object({
  title: z.string().min(1, 'Project title is required'),
  subtitle: z.string().min(1, 'Project subtitle is required'),
  client_name: z.string().min(1, 'Client name is required'),
  status: z.array(z.string()).min(1, 'At least one status is required'),
  type: z.string().min(1, 'Project type is required'),
  overview: z.string().min(1, 'Project overview is required'),
  objectives: z.string().min(1, 'Project objectives are required'),
  highlights: z.array(z.string()),
  location: z.string().min(1, 'Location is required'),
  completion_date: z.date(),
  unit_types: z.string().min(1, 'Unit types are required'),
  unit_sizes: z.string().min(1, 'Unit sizes are required'),
  cta_title: z.string().min(1, 'CTA title is required'),
  cta_subtitle: z.string().min(1, 'CTA subtitle is required'),
  button_text: z.string().min(1, 'Button text is required'),
  button_link: z.string().min(1, 'Button link is required'),
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface LocationCategory {
  title: string;
  icon: string;
  items: Array<{
    name: string;
    distance: string;
  }>;
}

export const AddProjectForm = () => {
  const [timelineSteps, setTimelineSteps] = useState<TimelineStep[]>([
    { title: '', status: 'upcoming', description: '', duration: '', unit: 'months' }
  ]);
  const [clientFeedback, setClientFeedback] = useState<ClientFeedback>({
    name: '', designation: '', company: '', testimonial: '', rating: 5
  });
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  // New state for dynamic sections
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({});
  const [videoSection, setVideoSection] = useState<VideoSection>({});
  const [amenities, setAmenities] = useState<Amenity[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [floorPlans, setFloorPlans] = useState<FloorPlan[]>([]);
  const [brochureSection, setBrochureSection] = useState<BrochureSection>({});
  const [progressGallery, setProgressGallery] = useState<ProgressImage[]>([]);
  const [specifications, setSpecifications] = useState<ProjectSpecifications>({});
  const [locationDetails, setLocationDetails] = useState<LocationDetails>({});
  const [nearbyLocations, setNearbyLocations] = useState<LocationCategory[]>([]);

  const createProject = useCreateProject();
  const { isUploading } = useImageUpload();

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: '',
      subtitle: '',
      client_name: '',
      status: [],
      type: '',
      overview: '',
      objectives: '',
      highlights: [],
      location: '',
      unit_types: '',
      unit_sizes: '',
      cta_title: '',
      cta_subtitle: '',
      button_text: '',
      button_link: '',
    },
  });

  const statusOptions = ['Ongoing', 'Completed', 'Upcoming'];
  const typeOptions = ['Residential', 'Commercial', 'Mixed Use', 'Industrial'];
  const highlightOptions = [
    'Modern Design', 'Prime Location', 'Energy Efficient', 'Smart Home Ready',
    'Gated Community', 'Swimming Pool', 'Gym & Fitness', 'Parking Space',
    'Garden & Landscaping', 'Security Systems'
  ];

  // Helper functions for dynamic sections
  const addTimelineStep = () => {
    setTimelineSteps([...timelineSteps, { 
      title: '', status: 'upcoming', description: '', duration: '', unit: 'months' 
    }]);
  };

  const removeTimelineStep = (index: number) => {
    setTimelineSteps(timelineSteps.filter((_, i) => i !== index));
  };

  const addAmenity = () => {
    setAmenities([...amenities, { name: '', icon: '', description: '' }]);
  };

  const removeAmenity = (index: number) => {
    setAmenities(amenities.filter((_, i) => i !== index));
  };

  const addFAQ = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const removeFAQ = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const addFloorPlan = () => {
    setFloorPlans([...floorPlans, { title: '', image: '', description: '', area: '', bedrooms: '' }]);
  };

  const removeFloorPlan = (index: number) => {
    setFloorPlans(floorPlans.filter((_, i) => i !== index));
  };

  const addProgressImage = () => {
    setProgressGallery([...progressGallery, { title: '', image: '', date: '', description: '' }]);
  };

  const removeProgressImage = (index: number) => {
    setProgressGallery(progressGallery.filter((_, i) => i !== index));
  };

  const addLocationCategory = () => {
    setNearbyLocations([...nearbyLocations, { 
      title: '', 
      icon: '', 
      items: [{ name: '', distance: '' }] 
    }]);
  };

  const removeLocationCategory = (index: number) => {
    setNearbyLocations(nearbyLocations.filter((_, i) => i !== index));
  };

  const addLocationItem = (categoryIndex: number) => {
    const updated = [...nearbyLocations];
    updated[categoryIndex].items.push({ name: '', distance: '' });
    setNearbyLocations(updated);
  };

  const removeLocationItem = (categoryIndex: number, itemIndex: number) => {
    const updated = [...nearbyLocations];
    updated[categoryIndex].items = updated[categoryIndex].items.filter((_, i) => i !== itemIndex);
    setNearbyLocations(updated);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedImages([...selectedImages, ...Array.from(files)]);
    }
  };

  const onSubmit = async (data: ProjectFormData) => {
    const projectData: CreateProjectRequest = {
      title: data.title,
      subtitle: data.subtitle,
      client_name: data.client_name,
      status: data.status,
      type: data.type,
      overview: data.overview,
      objectives: data.objectives,
      highlights: data.highlights,
      location: data.location,
      completion_date: data.completion_date,
      unit_types: data.unit_types,
      unit_sizes: data.unit_sizes,
      cta_title: data.cta_title,
      cta_subtitle: data.cta_subtitle,
      button_text: data.button_text,
      button_link: data.button_link,
      gallery_images: selectedImages,
      timeline_steps: timelineSteps,
      client_feedback: clientFeedback,
      // New dynamic sections
      project_details: projectDetails,
      video_section: videoSection,
      amenities: amenities,
      faq_section: faqs,
      floor_plans: floorPlans,
      brochure_section: brochureSection,
      progress_gallery: progressGallery,
      specifications: specifications,
      location_details: {
        ...locationDetails,
        nearby_categories: nearbyLocations
      },
    };

    await createProject.mutateAsync(projectData);

    // Reset form after successful submission
    form.reset();
    setTimelineSteps([{ title: '', status: 'upcoming', description: '', duration: '', unit: 'months' }]);
    setClientFeedback({ name: '', designation: '', company: '', testimonial: '', rating: 5 });
    setSelectedImages([]);
    setProjectDetails({});
    setVideoSection({});
    setAmenities([]);
    setFaqs([]);
    setFloorPlans([]);
    setBrochureSection({});
    setProgressGallery([]);
    setSpecifications({});
    setLocationDetails({});
    setNearbyLocations([]);
  };

  const isSubmitting = createProject.isPending || isUploading;

  return (
    <div className="p-6 max-w-7xl mx-auto">
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
                name="client_name"
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
                name="completion_date"
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
                name="unit_types"
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
                name="unit_sizes"
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

              {/* Additional Project Details */}
              <Input
                placeholder="RERA Number"
                value={projectDetails.rera_number || ''}
                onChange={(e) => setProjectDetails({...projectDetails, rera_number: e.target.value})}
              />
              <Input
                placeholder="Total Area"
                value={projectDetails.total_area || ''}
                onChange={(e) => setProjectDetails({...projectDetails, total_area: e.target.value})}
              />
              <Input
                placeholder="Total Towers"
                value={projectDetails.total_towers || ''}
                onChange={(e) => setProjectDetails({...projectDetails, total_towers: e.target.value})}
              />
              <Input
                placeholder="Total Units"
                value={projectDetails.total_units || ''}
                onChange={(e) => setProjectDetails({...projectDetails, total_units: e.target.value})}
              />
              <Input
                placeholder="Builder"
                value={projectDetails.builder || ''}
                onChange={(e) => setProjectDetails({...projectDetails, builder: e.target.value})}
              />
              <Input
                placeholder="Floors (e.g., Stilt +3)"
                value={projectDetails.floors || ''}
                onChange={(e) => setProjectDetails({...projectDetails, floors: e.target.value})}
              />
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-5 h-5" />
              <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Video Section</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Video Title"
                value={videoSection.title || ''}
                onChange={(e) => setVideoSection({...videoSection, title: e.target.value})}
              />
              <Input
                placeholder="Video URL"
                value={videoSection.video_url || ''}
                onChange={(e) => setVideoSection({...videoSection, video_url: e.target.value})}
              />
              <Input
                placeholder="Thumbnail URL"
                value={videoSection.thumbnail || ''}
                onChange={(e) => setVideoSection({...videoSection, thumbnail: e.target.value})}
              />
            </div>
            <Textarea
              placeholder="Video Description"
              className="mt-4"
              value={videoSection.description || ''}
              onChange={(e) => setVideoSection({...videoSection, description: e.target.value})}
            />
          </div>

          {/* Amenities Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Amenities</h2>
              <Button type="button" onClick={addAmenity} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Amenity
              </Button>
            </div>
            
            <div className="space-y-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">Amenity {index + 1}</h3>
                    <Button
                      type="button"
                      onClick={() => removeAmenity(index)}
                      variant="ghost"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Amenity Name"
                      value={amenity.name}
                      onChange={(e) => {
                        const newAmenities = [...amenities];
                        newAmenities[index].name = e.target.value;
                        setAmenities(newAmenities);
                      }}
                    />
                    <Input
                      placeholder="Icon URL"
                      value={amenity.icon || ''}
                      onChange={(e) => {
                        const newAmenities = [...amenities];
                        newAmenities[index].icon = e.target.value;
                        setAmenities(newAmenities);
                      }}
                    />
                  </div>
                  
                  <Textarea
                    placeholder="Amenity Description"
                    className="mt-3"
                    value={amenity.description || ''}
                    onChange={(e) => {
                      const newAmenities = [...amenities];
                      newAmenities[index].description = e.target.value;
                      setAmenities(newAmenities);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Locations */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Nearby Locations</h2>
              </div>
              <Button type="button" onClick={addLocationCategory} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Category
              </Button>
            </div>
            
            <div className="space-y-6">
              {nearbyLocations.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium">Category {categoryIndex + 1}</h3>
                    <Button
                      type="button"
                      onClick={() => removeLocationCategory(categoryIndex)}
                      variant="ghost"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Input
                      placeholder="Category Title (e.g., Hospitals)"
                      value={category.title}
                      onChange={(e) => {
                        const updated = [...nearbyLocations];
                        updated[categoryIndex].title = e.target.value;
                        setNearbyLocations(updated);
                      }}
                    />
                    <Input
                      placeholder="Icon URL"
                      value={category.icon}
                      onChange={(e) => {
                        const updated = [...nearbyLocations];
                        updated[categoryIndex].icon = e.target.value;
                        setNearbyLocations(updated);
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-sm">Locations</h4>
                      <Button
                        type="button"
                        onClick={() => addLocationItem(categoryIndex)}
                        variant="outline"
                        size="sm"
                      >
                        <Plus className="w-3 h-3 mr-1" />
                        Add Location
                      </Button>
                    </div>
                    
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex gap-2 items-center">
                        <Input
                          placeholder="Location Name"
                          value={item.name}
                          onChange={(e) => {
                            const updated = [...nearbyLocations];
                            updated[categoryIndex].items[itemIndex].name = e.target.value;
                            setNearbyLocations(updated);
                          }}
                        />
                        <Input
                          placeholder="Distance"
                          value={item.distance}
                          onChange={(e) => {
                            const updated = [...nearbyLocations];
                            updated[categoryIndex].items[itemIndex].distance = e.target.value;
                            setNearbyLocations(updated);
                          }}
                        />
                        <Button
                          type="button"
                          onClick={() => removeLocationItem(categoryIndex, itemIndex)}
                          variant="ghost"
                          size="sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5" />
              <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Specifications</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Textarea
                placeholder="Structure specifications"
                value={specifications.structure || ''}
                onChange={(e) => setSpecifications({...specifications, structure: e.target.value})}
              />
              <Textarea
                placeholder="Flooring specifications"
                value={specifications.flooring || ''}
                onChange={(e) => setSpecifications({...specifications, flooring: e.target.value})}
              />
              <Textarea
                placeholder="Doors & Windows specifications"
                value={specifications.doors_windows || ''}
                onChange={(e) => setSpecifications({...specifications, doors_windows: e.target.value})}
              />
              <Textarea
                placeholder="Kitchen specifications"
                value={specifications.kitchen || ''}
                onChange={(e) => setSpecifications({...specifications, kitchen: e.target.value})}
              />
              <Textarea
                placeholder="Bathroom specifications"
                value={specifications.bathroom || ''}
                onChange={(e) => setSpecifications({...specifications, bathroom: e.target.value})}
              />
              <Textarea
                placeholder="Electrical specifications"
                value={specifications.electrical || ''}
                onChange={(e) => setSpecifications({...specifications, electrical: e.target.value})}
              />
              <Textarea
                placeholder="Safety specifications"
                value={specifications.safety || ''}
                onChange={(e) => setSpecifications({...specifications, safety: e.target.value})}
              />
            </div>
          </div>

          {/* Floor Plans */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Floor Plans</h2>
              <Button type="button" onClick={addFloorPlan} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Floor Plan
              </Button>
            </div>
            
            <div className="space-y-4">
              {floorPlans.map((plan, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">Floor Plan {index + 1}</h3>
                    <Button
                      type="button"
                      onClick={() => removeFloorPlan(index)}
                      variant="ghost"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Plan Title"
                      value={plan.title}
                      onChange={(e) => {
                        const newPlans = [...floorPlans];
                        newPlans[index].title = e.target.value;
                        setFloorPlans(newPlans);
                      }}
                    />
                    <Input
                      placeholder="Image URL"
                      value={plan.image}
                      onChange={(e) => {
                        const newPlans = [...floorPlans];
                        newPlans[index].image = e.target.value;
                        setFloorPlans(newPlans);
                      }}
                    />
                    <Input
                      placeholder="Area (e.g., 1200 sq.ft)"
                      value={plan.area || ''}
                      onChange={(e) => {
                        const newPlans = [...floorPlans];
                        newPlans[index].area = e.target.value;
                        setFloorPlans(newPlans);
                      }}
                    />
                    <Input
                      placeholder="Bedrooms (e.g., 2 BHK)"
                      value={plan.bedrooms || ''}
                      onChange={(e) => {
                        const newPlans = [...floorPlans];
                        newPlans[index].bedrooms = e.target.value;
                        setFloorPlans(newPlans);
                      }}
                    />
                  </div>
                  
                  <Textarea
                    placeholder="Plan Description"
                    className="mt-3"
                    value={plan.description || ''}
                    onChange={(e) => {
                      const newPlans = [...floorPlans];
                      newPlans[index].description = e.target.value;
                      setFloorPlans(newPlans);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Brochure Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5" />
              <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Brochure Section</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Brochure Title"
                value={brochureSection.title || ''}
                onChange={(e) => setBrochureSection({...brochureSection, title: e.target.value})}
              />
              <Input
                placeholder="Brochure URL"
                value={brochureSection.brochure_url || ''}
                onChange={(e) => setBrochureSection({...brochureSection, brochure_url: e.target.value})}
              />
            </div>
            <Textarea
              placeholder="Brochure Description"
              className="mt-4"
              value={brochureSection.description || ''}
              onChange={(e) => setBrochureSection({...brochureSection, description: e.target.value})}
            />
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">FAQ Section</h2>
              </div>
              <Button type="button" onClick={addFAQ} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add FAQ
              </Button>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">FAQ {index + 1}</h3>
                    <Button
                      type="button"
                      onClick={() => removeFAQ(index)}
                      variant="ghost"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <Input
                      placeholder="Question"
                      value={faq.question}
                      onChange={(e) => {
                        const newFaqs = [...faqs];
                        newFaqs[index].question = e.target.value;
                        setFaqs(newFaqs);
                      }}
                    />
                    <Textarea
                      placeholder="Answer"
                      value={faq.answer}
                      onChange={(e) => {
                        const newFaqs = [...faqs];
                        newFaqs[index].answer = e.target.value;
                        setFaqs(newFaqs);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Gallery */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Image className="w-5 h-5" />
                <h2 className="text-xl font-semibold text-[rgba(40,45,64,1)]">Progress Gallery</h2>
              </div>
              <Button type="button" onClick={addProgressImage} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Progress Image
              </Button>
            </div>
            
            <div className="space-y-4">
              {progressGallery.map((progress, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">Progress Image {index + 1}</h3>
                    <Button
                      type="button"
                      onClick={() => removeProgressImage(index)}
                      variant="ghost"
                      size="sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Image Title"
                      value={progress.title}
                      onChange={(e) => {
                        const newProgress = [...progressGallery];
                        newProgress[index].title = e.target.value;
                        setProgressGallery(newProgress);
                      }}
                    />
                    <Input
                      placeholder="Image URL"
                      value={progress.image}
                      onChange={(e) => {
                        const newProgress = [...progressGallery];
                        newProgress[index].image = e.target.value;
                        setProgressGallery(newProgress);
                      }}
                    />
                    <Input
                      placeholder="Date"
                      value={progress.date || ''}
                      onChange={(e) => {
                        const newProgress = [...progressGallery];
                        newProgress[index].date = e.target.value;
                        setProgressGallery(newProgress);
                      }}
                    />
                  </div>
                  
                  <Textarea
                    placeholder="Image Description"
                    className="mt-3"
                    value={progress.description || ''}
                    onChange={(e) => {
                      const newProgress = [...progressGallery];
                      newProgress[index].description = e.target.value;
                      setProgressGallery(newProgress);
                    }}
                  />
                </div>
              ))}
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
                      {isUploading ? 'Uploading images...' : 'Upload images'}
                    </span>
                    <span className="mt-1 block text-sm text-gray-600">
                      PNG, JPG, GIF up to 10MB each
                    </span>
                  </label>
                  <input
                    id="images"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                    disabled={isUploading}
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
                        onLoad={() => URL.revokeObjectURL(URL.createObjectURL(image))}
                      />
                      <button
                        type="button"
                        onClick={() => setSelectedImages(selectedImages.filter((_, i) => i !== index))}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        disabled={isUploading}
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
                      onValueChange={(value: 'completed' | 'current' | 'upcoming') => {
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
                      onValueChange={(value: 'days' | 'weeks' | 'months') => {
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
                name="cta_title"
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
                name="cta_subtitle"
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
                name="button_text"
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
                name="button_link"
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
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {isUploading ? 'Uploading Images...' : 'Creating Project...'}
                </>
              ) : (
                'Submit Project'
              )}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => {
                form.reset();
                setTimelineSteps([{ title: '', status: 'upcoming', description: '', duration: '', unit: 'months' }]);
                setClientFeedback({ name: '', designation: '', company: '', testimonial: '', rating: 5 });
                setSelectedImages([]);
                setProjectDetails({});
                setVideoSection({});
                setAmenities([]);
                setFaqs([]);
                setFloorPlans([]);
                setBrochureSection({});
                setProgressGallery([]);
                setSpecifications({});
                setLocationDetails({});
                setNearbyLocations([]);
              }}
              className="px-8"
              disabled={isSubmitting}
            >
              Reset Form
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
