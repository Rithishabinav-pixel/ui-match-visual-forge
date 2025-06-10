
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { VideoSection as VideoSectionType } from '@/types/project';

interface VideoSectionProps {
  videoSection: VideoSectionType;
}

export const VideoSection = ({ videoSection }: VideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-gray-50 max-md:py-8">
      <div className="max-w-6xl mx-auto px-5">
        {videoSection.title && (
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-[rgba(40,45,64,1)] mb-4 max-md:text-3xl">
              {videoSection.title}
            </h2>
            {videoSection.description && (
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {videoSection.description}
              </p>
            )}
          </div>
        )}
        
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          {!isPlaying ? (
            <div className="relative">
              <img 
                src={videoSection.thumbnail || "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all"
                >
                  <Play className="w-12 h-12 text-[rgba(217,37,70,1)] ml-1" />
                </button>
              </div>
            </div>
          ) : (
            <iframe
              src={videoSection.video_url}
              className="w-full h-full"
              allowFullScreen
              title="Project Video"
            />
          )}
        </div>
      </div>
    </section>
  );
};
