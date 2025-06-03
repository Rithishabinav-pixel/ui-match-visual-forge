
import React from 'react';
import { ArrowRight, Target, Users, Award, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Visionary leader with 15+ years in construction"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=300&h=300&fit=crop&crop=face",
      description: "Award-winning architect and design strategist"
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in project delivery and client relations"
    },
    {
      name: "Emily Davis",
      role: "Engineering Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Structural engineering specialist with innovative solutions"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every project we undertake"
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Building lasting relationships through transparent communication"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Embracing cutting-edge technology and sustainable practices"
    }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded", description: "Started with a vision to transform construction" },
    { year: "2015", event: "100th Project", description: "Reached major milestone in project delivery" },
    { year: "2018", event: "Award Recognition", description: "Received Industry Excellence Award" },
    { year: "2020", event: "Sustainable Focus", description: "Launched green building initiative" },
    { year: "2023", event: "Digital Innovation", description: "Introduced AI-powered project management" }
  ];

  const testimonials = [
    {
      quote: "JKB delivered beyond our expectations. Their attention to detail and commitment to quality is outstanding.",
      author: "David Wilson",
      company: "Wilson Enterprises"
    },
    {
      quote: "Professional, reliable, and innovative. JKB transformed our vision into reality seamlessly.",
      author: "Lisa Martinez",
      company: "Martinez Holdings"
    },
    {
      quote: "The team's expertise and dedication made our complex project a complete success.",
      author: "Robert Taylor",
      company: "Taylor Industries"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[70vh] bg-gradient-to-r from-[rgba(40,45,64,1)] to-[rgba(217,37,70,1)] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-5">
          <h1 className="text-5xl font-bold mb-6 max-md:text-4xl">About JKB Construction</h1>
          <p className="text-xl mb-8 max-md:text-lg">Building dreams, creating landmarks, and shaping the future of construction with innovation and excellence</p>
          <Button className="bg-white text-[rgba(217,37,70,1)] hover:bg-gray-100 px-8 py-3 text-lg">
            Discover Our Story
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 max-md:py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-6 max-md:text-3xl">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded with a passion for excellence, JKB Construction has been at the forefront of innovative building solutions for over a decade. We believe in creating spaces that not only meet today's needs but anticipate tomorrow's possibilities.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our mission is to deliver exceptional construction services while maintaining the highest standards of quality, safety, and sustainability. We envision a future where every structure we build contributes to stronger, more vibrant communities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-[rgba(217,37,70,1)] mb-2">500+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[rgba(217,37,70,1)] mb-2">50+</h3>
                  <p className="text-gray-600">Expert Team Members</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop" 
                alt="Modern Architecture" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50 max-md:py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-4 max-md:text-3xl">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The passionate professionals behind our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-2">{member.name}</h3>
                  <p className="text-[rgba(217,37,70,1)] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 max-md:py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-4 max-md:text-3xl">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[rgba(217,37,70,1)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[rgba(40,45,64,1)] mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones/History */}
      <section className="py-20 bg-[rgba(40,45,64,1)] max-md:py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 max-md:text-3xl">Our Journey</h2>
            <p className="text-lg text-gray-300">Key milestones in our growth story</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[rgba(217,37,70,1)] max-md:left-8"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} max-md:flex-row`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'} max-md:w-full max-md:pl-16 max-md:text-left`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold text-[rgba(217,37,70,1)] mb-2">{milestone.year}</h3>
                      <h4 className="text-lg font-semibold text-[rgba(40,45,64,1)] mb-2">{milestone.event}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[rgba(217,37,70,1)] rounded-full border-4 border-white max-md:left-8"></div>
                  <div className="w-1/2 max-md:hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 max-md:py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-4 max-md:text-3xl">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Testimonials from satisfied clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-[rgba(40,45,64,1)]">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[rgba(217,37,70,1)] max-md:py-12">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 max-md:text-3xl">Ready to Build Your Dream?</h2>
          <p className="text-xl text-white mb-8 max-md:text-lg">
            Let's discuss your project and bring your vision to life with our expertise and dedication.
          </p>
          <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
            <Button className="bg-white text-[rgba(217,37,70,1)] hover:bg-gray-100 px-8 py-3 text-lg">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[rgba(217,37,70,1)] px-8 py-3 text-lg">
              View Our Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
