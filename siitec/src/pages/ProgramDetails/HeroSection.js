import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-primary-dark overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/img_untitled_design_1.png')" }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-primary-dark opacity-80 z-10" />
      
      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-end min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[688px]">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-[12px] justify-start items-end w-full sm:w-[95%] md:w-[92%] mt-[200px] sm:mt-[250px] md:mt-[318px] pb-8 sm:pb-12 md:pb-16 lg:pb-20">
            {/* Main Heading */}
            <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-[Canela Trial] font-bold leading-[32px] sm:leading-[48px] md:leading-[64px] lg:leading-[80px] text-right text-primary-foreground w-full sm:w-[90%] md:w-[86%]">
              Bachelor of Engineering Program in Manufacturing System Engineering
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-[Roboto] font-light leading-relaxed md:leading-[29px] text-right text-[#ffffffe5] w-auto">
              B.Eng. (Manufacturing System Engineering)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;