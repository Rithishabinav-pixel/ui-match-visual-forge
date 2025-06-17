
import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, Filter, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/seo/SEOHead';
import { useProjects } from '@/hooks/useProjects';
import { Project } from '@/types/project';
import { seoPages, organizationSchema, webPageSchema, breadcrumbSchema } from '@/utils/seoData';

const ProjectListing = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { data: projects = [], isLoading, error } = useProjects();

  const breadcrumbs = [
    { name: "Home", url: "https://jkbhousing.com/" },
    { name: "Projects", url: "https://jkbhousing.com/projects" }
  ];

  const structuredData = [
    organizationSchema,
    webPageSchema(
      "Projects - JKB Housing Portfolio",
      "Explore JKB Housing's diverse portfolio of 160+ completed projects including residential, commercial, and mixed-use developments.",
      "https://jkbhousing.com/projects"
    ),
    breadcrumbSchema(breadcrumbs)
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'mixed use', label: 'Mixed Use' },
    { id: 'industrial', label: 'Industrial' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type.toLowerCase() === activeFilter);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Ongoing': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Upcoming': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatProjectData = (project: Project) => {
    const primaryStatus = project.status[0] || 'Upcoming';
    const completionYear = new Date(project.completion_date).getFullYear();
    
    return {
      id: project.id,
      title: project.title,
      category: project.type.toLowerCase(),
      description: project.overview.substring(0, 150) + '...',
      image: project.gallery_images[0] || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      location: project.location.split(',')[0] || project.location,
      date: completionYear.toString(),
      status: primaryStatus,
      type: project.unit_types
    };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead
          title={seoPages.projects.title}
          description={seoPages.projects.description}
          keywords={seoPages.projects.keywords}
          canonical="https://jkbhousing.com/projects"
          structuredData={structuredData}
        />
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-[rgba(217,37,70,1)]" />
            <p className="text-gray-600">Loading projects...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <SEOHead
          title={seoPages.projects.title}
          description={seoPages.projects.description}
          keywords={seoPages.projects.keywords}
          canonical="https://jkbhousing.com/projects"
          structuredData={structuredData}
        />
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error loading projects</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seoPages.projects.title}
        description={seoPages.projects.description}
        keywords={seoPages.projects.keywords}
        canonical="https://jkbhousing.com/projects"
        structuredData={structuredData}
        author="JKB Housing"
      />
      <Header />
      
      {/* Page Header */}
      <section className="bg-[rgba(40,45,64,1)] py-20 pt-32 max-md:py-12 max-md:pt-24">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 max-md:text-4xl">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto max-md:text-lg">
            Explore our diverse portfolio of construction projects spanning residential, commercial, and infrastructure developments across Chennai and beyond.
          </p>
        </div>
      </section>

      {/* Filter/Category Bar */}
      <section className="py-8 bg-gray-50 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center justify-between max-md:flex-col max-md:gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-lg font-medium text-gray-700">Filter by Category:</span>
            </div>
            <div className="flex gap-2 flex-wrap max-md:justify-center">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setCurrentPage(1);
                  }}
                  className={`px-6 py-2 ${
                    activeFilter === filter.id 
                      ? 'bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)]' 
                      : 'border-[rgba(217,37,70,1)] text-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,1)] hover:text-white'
                  }`}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Showing {currentProjects.length} of {filteredProjects.length} projects
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 max-md:py-8">
        <div className="max-w-6xl mx-auto px-5">
          {currentProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found for the selected category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProjects.map((project) => {
                const formattedProject = formatProjectData(project);
                return (
                  <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={formattedProject.image} 
                        alt={formattedProject.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={`${getStatusColor(formattedProject.status)} border-0`}>
                          {formattedProject.status}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2 group-hover:text-[rgba(217,37,70,1)] transition-colors">
                          {formattedProject.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {formattedProject.description}
                        </p>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-[rgba(217,37,70,1)]" />
                          <span>{formattedProject.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-[rgba(217,37,70,1)]" />
                          <span>{formattedProject.date} • {formattedProject.type}</span>
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] text-white"
                        onClick={() => window.location.href = `/project/${project.id}`}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        onClick={() => setCurrentPage(index + 1)}
                        isActive={currentPage === index + 1}
                        className="cursor-pointer"
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[rgba(40,45,64,1)] max-md:py-12">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 max-md:text-3xl">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-md:text-lg">
            Let's discuss how we can bring your vision to life with our expertise and proven track record.
          </p>
          <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
            <Button className="bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)] px-8 py-3 text-lg">
              Get In Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[rgba(40,45,64,1)] px-8 py-3 text-lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectListing;
