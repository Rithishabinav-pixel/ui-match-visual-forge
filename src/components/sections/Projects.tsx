
import React, { useState } from 'react';
import { MapPin, Ruler, Building2, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projectsData = {
  ongoing: [
    {
      id: 1,
      title: "JKB Sathya",
      location: "No: 4/5, 2nd Main road, SVS Nagar,\nValasaravakkam, Chennai – 600 087.",
      sizes: "1298 -1257 -977 Sq.ft Unit Sizes",
      type: "2 & 3 BHK",
      handover: "Dec 2025",
      image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/97e1d43cebcb1c33bcda4ba4ff04fb11f718784a?placeholderIfAbsent=true"
    },
    {
      id: 2,
      title: "JKB Paradise",
      location: "No: 8/12, 1st Cross Street, Anna Nagar,\nChennai – 600 040.",
      sizes: "1100 -1350 -1500 Sq.ft Unit Sizes",
      type: "2 & 3 BHK",
      handover: "Mar 2026",
      image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/97e1d43cebcb1c33bcda4ba4ff04fb11f718784a?placeholderIfAbsent=true"
    },
    {
      id: 3,
      title: "JKB Elite",
      location: "No: 15/20, Velachery Main Road,\nVelachery, Chennai – 600 042.",
      sizes: "980 -1200 -1450 Sq.ft Unit Sizes",
      type: "1, 2 & 3 BHK",
      handover: "Jun 2026",
      image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/97e1d43cebcb1c33bcda4ba4ff04fb11f718784a?placeholderIfAbsent=true"
    }
  ],
  completed: [
    {
      id: 4,
      title: "JKB Heritage",
      location: "No: 25/30, T Nagar Main Road,\nT Nagar, Chennai – 600 017.",
      sizes: "1150 -1400 -1650 Sq.ft Unit Sizes",
      type: "2 & 3 BHK",
      handover: "Completed 2024",
      image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/97e1d43cebcb1c33bcda4ba4ff04fb11f718784a?placeholderIfAbsent=true"
    },
    {
      id: 5,
      title: "JKB Grand",
      location: "No: 42/50, Adyar Main Road,\nAdyar, Chennai – 600 020.",
      sizes: "1300 -1550 -1800 Sq.ft Unit Sizes",
      type: "2, 3 & 4 BHK",
      handover: "Completed 2023",
      image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/97e1d43cebcb1c33bcda4ba4ff04fb11f718784a?placeholderIfAbsent=true"
    },
    {
      id: 6,
      title: "JKB Classic",
      location: "No: 18/25, Mylapore Tank Road,\nMylapore, Chennai – 600 004.",
      sizes: "900 -1100 -1300 Sq.ft Unit Sizes",
      type: "1, 2 & 3 BHK",
      handover: "Completed 2023",
      image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/97e1d43cebcb1c33bcda4ba4ff04fb11f718784a?placeholderIfAbsent=true"
    }
  ],
  future: [
    {
      id: 7,
      title: "JKB Skyline",
      location: "No: 100/120, OMR Main Road,\nSholinganallur, Chennai – 600 119.",
      sizes: "1500 -1800 -2200 Sq.ft Unit Sizes",
      type: "3 & 4 BHK",
      handover: "Launch 2025",
      image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/97e1d43cebcb1c33bcda4ba4ff04fb11f718784a?placeholderIfAbsent=true"
    },
    {
      id: 8,
      title: "JKB Pinnacle",
      location: "No: 75/80, ECR Main Road,\nMahabalipuram, Chennai – 603 104.",
      sizes: "1600 -2000 -2500 Sq.ft Unit Sizes",
      type: "3, 4 & 5 BHK",
      handover: "Launch 2026",
      image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/97e1d43cebcb1c33bcda4ba4ff04fb11f718784a?placeholderIfAbsent=true"
    },
    {
      id: 9,
      title: "JKB Luxury",
      location: "No: 200/250, GST Road,\nTambaram, Chennai – 600 045.",
      sizes: "1400 -1700 -2000 Sq.ft Unit Sizes",
      type: "2, 3 & 4 BHK",
      handover: "Launch 2027",
      image: "https://cdn.builder.io/api/v1/image/assets/6d5e86a0b8e84edc8bb078b115d662fd/97e1d43cebcb1c33bcda4ba4ff04fb11f718784a?placeholderIfAbsent=true"
    }
  ]
};

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  const renderProjectCard = (project: any) => (
    <div key={project.id} className="bg-white flex min-w-60 min-h-[616px] gap-2.5 grow shrink w-[300px] rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative flex min-w-60 w-[375px] flex-col items-stretch">
        <img
          src={project.image}
          alt={`${project.title} Image`}
          className="aspect-[1.04] object-contain w-full z-0 min-h-[360px] rounded-[24px_24px_0px_0px]"
        />
        <div className="self-center z-0 flex min-h-56 w-[328px] max-w-full flex-col items-stretch text-base mt-4 px-5 pb-6 max-md:px-4 max-md:pb-5">
          <div className="w-full text-[rgba(40,45,64,1)]">
            <h3 className="text-2xl font-bold leading-none max-md:text-[30px] max-md:leading-[38px]">{project.title}</h3>
            <div className="flex w-full gap-4 leading-6 mt-4">
              <MapPin className="w-6 h-6" />
              <p style={{ whiteSpace: 'pre-line' }}>{project.location}</p>
            </div>
            <div className="flex w-full gap-4 mt-4">
              <Ruler className="w-6 h-6" />
              <span>{project.sizes}</span>
            </div>
            <div className="flex w-full gap-4 mt-4">
              <Building2 className="w-6 h-6" />
              <span>{project.type}</span>
            </div>
          </div>
          <button className="flex items-center gap-2.5 text-[rgba(185,3,0,1)] mt-6 btn-hover-link hover:text-[rgba(217,37,70,1)]">
            <span>View More Details</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
        <div className="bg-white absolute z-0 gap-2.5 text-xs text-[rgba(217,37,70,1)] leading-6 px-4 py-1 rounded-[150px] right-[31px] top-4">
          {project.handover}
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[rgba(40,45,64,1)] w-full overflow-hidden mt-[120px] py-20 max-md:mt-10">
      <div className="max-w-[1530px] mx-auto px-5">
        <div className="flex w-full flex-col items-center">
          <div className="w-[620px] max-w-full text-white text-center">
            <div className="flex w-full flex-col max-md:max-w-full">
              <h2 className="text-[40px] leading-[48px] max-md:max-w-full max-md:text-[30px] max-md:leading-[38px]">
                <span className="font-bold">Lorem ipsum dolor sit amet,</span>
                <br />
                <span className="italic">consectetur adipiscing elit</span>
              </h2>
              <p className="text-base leading-6 mt-6 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
              </p>
            </div>
          </div>

          <div className="flex w-[1185px] max-w-full flex-col items-center mt-[60px] max-md:mt-10">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col items-center">
              <TabsList className="bg-transparent flex items-center gap-6 text-base text-[rgba(217,37,70,1)] justify-center h-auto p-0 max-md:gap-2 max-md:w-full max-md:justify-start">
                <TabsTrigger 
                  value="ongoing" 
                  className="bg-[rgba(217,37,70,1)] text-white data-[state=active]:bg-[rgba(217,37,70,1)] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:border data-[state=inactive]:border-[rgba(217,37,70,1)] data-[state=inactive]:text-[rgba(217,37,70,1)] min-h-12 gap-2.5 whitespace-nowrap w-[174px] px-4 py-3 rounded-lg btn-hover-tab max-md:w-auto max-md:px-3 max-md:text-sm"
                >
                  Ongoing
                </TabsTrigger>
                <TabsTrigger 
                  value="completed" 
                  className="bg-white data-[state=active]:bg-[rgba(217,37,70,1)] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:border data-[state=inactive]:border-[rgba(217,37,70,1)] data-[state=inactive]:text-[rgba(217,37,70,1)] border gap-2.5 whitespace-nowrap w-[174px] px-6 py-3 rounded-lg border-[rgba(217,37,70,1)] border-solid max-md:px-5 btn-hover-tab max-md:w-auto max-md:px-3 max-md:text-sm"
                >
                  Completed
                </TabsTrigger>
                <TabsTrigger 
                  value="future" 
                  className="bg-white data-[state=active]:bg-[rgba(217,37,70,1)] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:border data-[state=inactive]:border-[rgba(217,37,70,1)] data-[state=inactive]:text-[rgba(217,37,70,1)] border gap-2.5 px-6 py-3 rounded-lg border-[rgba(217,37,70,1)] border-solid max-md:px-5 btn-hover-tab max-md:w-auto max-md:px-3 max-md:text-sm"
                >
                  Future Landmark
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ongoing" className="w-full mt-[30px]">
                <div className="flex w-full max-w-[1185px] gap-[30px] justify-center flex-wrap animate-fade-in">
                  {projectsData.ongoing.map(renderProjectCard)}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="w-full mt-[30px]">
                <div className="flex w-full max-w-[1185px] gap-[30px] justify-center flex-wrap animate-fade-in">
                  {projectsData.completed.map(renderProjectCard)}
                </div>
              </TabsContent>

              <TabsContent value="future" className="w-full mt-[30px]">
                <div className="flex w-full max-w-[1185px] gap-[30px] justify-center flex-wrap animate-fade-in">
                  {projectsData.future.map(renderProjectCard)}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
