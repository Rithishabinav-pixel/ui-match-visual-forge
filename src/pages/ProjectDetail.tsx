
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Users, Award, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock project data (in real app, fetch based on id)
  const project = {
    id: 1,
    title: "JKB Sathya Residences",
    client: "Residential Development Group",
    category: "Residential",
    status: "Ongoing",
    location: "No: 4/5, 2nd Main road, SVS Nagar, Valasaravakkam, Chennai – 600 087",
    completionDate: "December 2025",
    unitTypes: "2 & 3 BHK",
    unitSizes: "1298 - 1257 - 977 Sq.ft",
    description: "JKB Sathya Residences represents the pinnacle of modern residential design, seamlessly blending contemporary architecture with sustainable living principles. This premium residential complex offers spacious 2 & 3 BHK apartments designed to meet the evolving needs of modern families.",
    objectives: [
      "Create premium residential spaces with modern amenities",
      "Implement sustainable and eco-friendly construction practices",
      "Provide world-class facilities for residents",
      "Ensure optimal space utilization and natural lighting"
    ],
    highlights: [
      "Premium location in Valasaravakkam",
      "Modern architectural design",
      "Sustainable construction materials",
      "Smart home integration ready",
      "Landscaped gardens and open spaces",
      "24/7 security and concierge services"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
    ],
    technologies: [
      { name: "BIM Modeling", icon: "🏗️" },
      { name: "Smart Building Systems", icon: "🏠" },
      { name: "Green Construction", icon: "🌱" },
      { name: "Advanced Security", icon: "🔒" },
      { name: "Energy Efficiency", icon: "⚡" },
      { name: "Quality Materials", icon: "🔧" }
    ],
    timeline: [
      { phase: "Project Planning", duration: "3 months", status: "completed", description: "Initial planning and design phase" },
      { phase: "Foundation Work", duration: "4 months", status: "completed", description: "Ground preparation and foundation laying" },
      { phase: "Structure Construction", duration: "12 months", status: "current", description: "Main structure and framework development" },
      { phase: "Interior Finishing", duration: "6 months", status: "upcoming", description: "Interior work and finishing touches" },
      { phase: "Final Inspection", duration: "2 months", status: "upcoming", description: "Quality checks and final approvals" }
    ],
    testimonial: {
      quote: "JKB has exceeded our expectations in every aspect of this project. Their attention to detail, commitment to quality, and innovative approach to sustainable construction makes them our preferred development partner.",
      author: "Rajesh Kumar",
      position: "Project Director",
      company: "Residential Development Group"
    }
  };

  const relatedProjects = [
    {
      id: 2,
      title: "JKB Paradise",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop",
      category: "Residential"
    },
    {
      id: 3,
      title: "JKB Elite",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=200&fit=crop",
      category: "Residential"
    },
    {
      id: 4,
      title: "JKB Heritage",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300&h=200&fit=crop",
      category: "Residential"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'current': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Project Hero */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          <img 
            src={project.gallery[currentImageIndex]} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {project.gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project title overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-[rgba(217,37,70,1)] text-white border-0">
                {project.status}
              </Badge>
              <Badge variant="outline" className="border-white text-white">
                {project.category}
              </Badge>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 max-md:text-4xl">{project.title}</h1>
            <p className="text-xl text-gray-300 max-md:text-lg">Client: {project.client}</p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 max-md:py-8">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-6 max-md:text-3xl">Project Overview</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{project.description}</p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[rgba(40,45,64,1)] mb-4">Project Objectives</h3>
                <ul className="space-y-3">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[rgba(217,37,70,1)] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[rgba(40,45,64,1)] mb-4">Key Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Award className="w-5 h-5 text-[rgba(217,37,70,1)] flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card className="p-6 sticky top-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Location</p>
                      <p className="text-gray-800 font-medium">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Completion Date</p>
                      <p className="text-gray-800 font-medium">{project.completionDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Unit Types</p>
                      <p className="text-gray-800 font-medium">{project.unitTypes}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Unit Sizes</p>
                      <p className="text-gray-800 font-medium">{project.unitSizes}</p>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,0.9)]">
                    Contact for Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50 max-md:py-8">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-3xl">Project Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.gallery.map((image, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setCurrentImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 max-md:py-8">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-3xl">Technologies & Methods</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {project.technologies.map((tech, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <p className="font-medium text-gray-800">{tech.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-16 bg-[rgba(40,45,64,1)] max-md:py-8">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-white mb-8 text-center max-md:text-3xl">Project Timeline</h2>
          <div className="space-y-8">
            {project.timeline.map((phase, index) => (
              <div key={index} className="flex items-center gap-6 max-md:flex-col max-md:text-center">
                <div className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(phase.status)} min-w-24`}>
                  {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg">
                  <div className="flex justify-between items-start max-md:flex-col max-md:gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2">{phase.phase}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      Duration: {phase.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50 max-md:py-8">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 max-md:text-3xl">Client Feedback</h2>
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-[rgba(40,45,64,1)] text-lg">{project.testimonial.author}</p>
                <p className="text-[rgba(217,37,70,1)] font-medium">{project.testimonial.position}</p>
                <p className="text-gray-600">{project.testimonial.company}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 max-md:py-8">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-8 text-center max-md:text-3xl">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <Card key={relatedProject.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={relatedProject.image} 
                    alt={relatedProject.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[rgba(40,45,64,1)] mb-2 group-hover:text-[rgba(217,37,70,1)] transition-colors">
                    {relatedProject.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{relatedProject.category}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[rgba(217,37,70,1)] text-[rgba(217,37,70,1)] hover:bg-[rgba(217,37,70,1)] hover:text-white"
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[rgba(217,37,70,1)] max-md:py-12">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 max-md:text-3xl">Interested in This Project?</h2>
          <p className="text-xl text-white mb-8 max-md:text-lg">
            Get in touch with our team to learn more about this project or discuss your own construction needs.
          </p>
          <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
            <Button className="bg-white text-[rgba(217,37,70,1)] hover:bg-gray-100 px-8 py-3 text-lg">
              Contact Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[rgba(217,37,70,1)] px-8 py-3 text-lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
