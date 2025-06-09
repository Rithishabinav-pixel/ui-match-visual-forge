
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactCTA = () => {
  return (
    <section className="py-16 bg-[rgba(217,37,70,1)] max-md:py-12">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 max-md:text-3xl">Ready to Start Your Project?</h2>
        <p className="text-xl text-white mb-8 max-md:text-lg">
          Don't wait any longer. Contact our expert team today and let's discuss how we can bring your construction vision to life.
        </p>
        <div className="flex gap-4 justify-center max-md:flex-col max-md:items-center">
          <Button className="bg-white text-[rgba(217,37,70,1)] hover:bg-gray-100 px-8 py-3 text-lg">
            Schedule a Consultation
            <Phone className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[rgba(217,37,70,1)] px-8 py-3 text-lg">
            View Our Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};
