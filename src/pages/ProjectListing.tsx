import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const ProjectListing = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'infrastructure', label: 'Infrastructure' }
  ];

  const projects = [
    {
      id: 1,
      title: "JKB Sathya Residences",
      category: "residential",
      description: "Premium residential complex with modern amenities and sustainable design features.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      location: "Valasaravakkam, Chennai",
      date: "2025",
      status: "Ongoing",
      type: "2 & 3 BHK"
    },
    {
      id: 2,
      title: "Paradise Commercial Hub",
      category: "commercial",
      description: "State-of-the-art commercial complex with cutting-edge facilities for businesses.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=300&fit=crop",
      location: "Anna Nagar, Chennai",
      date: "2024",
      status: "Completed",
      type: "Office Spaces"
    },
    {
      id: 3,
      title: "Elite Infrastructure Project",
      category: "infrastructure",
      description: "Major infrastructure development enhancing connectivity and urban planning.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
      location: "Velachery, Chennai",
      date: "2026",
      status: "Planning",
      type: "Transportation"
    },
    {
      id: 4,
      title: "Heritage Luxury Homes",
      category: "residential",
      description: "Luxury residential project combining traditional architecture with modern comfort.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      location: "T Nagar, Chennai",
      date: "2023",
      status: "Completed",
      type: "3 & 4 BHK"
    },
    {
      id: 5,
      title: "Grand Business Tower",
      category: "commercial",
      description: "Iconic business tower redefining the commercial landscape of the city.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop",
      location: "Adyar, Chennai",
      date: "2023",
      status: "Completed",
      type: "High-rise"
    },
    {
      id: 6,
      title: "Classic Apartments",
      category: "residential",
      description: "Contemporary apartment complex designed for modern urban living.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop",
      location: "Mylapore, Chennai",
      date: "2022",
      status: "Completed",
      type: "1, 2 & 3 BHK"
    },
    {
      id: 7,
      title: "Skyline Towers",
      category: "residential",
      description: "Luxury high-rise residential towers with panoramic city views.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
      location: "OMR, Chennai",
      date: "2025",
      status: "Upcoming",
      type: "3 & 4 BHK"
    },
    {
      id: 8,
      title: "Metro Station Complex",
      category: "infrastructure",
      description: "Modern metro station complex improving public transportation infrastructure.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      location: "Central Chennai",
      date: "2024",
      status: "Ongoing",
      type: "Public Transport"
    },
    {
      id: 9,
      title: "Pinnacle Corporate Center",
      category: "commercial",
      description: "Premium corporate center offering world-class business facilities.",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop",
      location: "ECR, Chennai",
      date: "2026",
      status: "Planning",
      type: "Corporate"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="bg-[rgba(40,45,64,1)] py-20 max-md:py-12">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} border-0`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2 group-hover:text-[rgba(217,37,70,1)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-[rgba(217,37,70,1)]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-[rgba(217,37,70,1)]" />
                      <span>{project.date} • {project.type}</span>
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
            ))}
          </div>

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
