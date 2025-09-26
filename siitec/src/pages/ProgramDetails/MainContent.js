import React from 'react';
import Line from '../../components/ui/Line';

const MainContent = () => {
  return (
    <section className="w-full bg-secondary-background py-4 sm:py-6 md:py-8 lg:py-[20px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[20px] justify-center items-start w-full">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[32%] order-2 lg:order-1">
            <div className="bg-secondary-background border border-secondary-muted shadow-[0px_4px_6px_#10182807] rounded-lg overflow-hidden">
              {/* Academics Header */}
              <div className="px-4 py-3 md:px-[16px] md:py-[10px]">
                <h3 className="text-sm md:text-[14px] font-[Inter] font-normal leading-tight md:leading-[17px] text-left text-[#344053]">
                  Academics
                </h3>
              </div>
              
              <Line width="100%" height="1px" backgroundColor="#f2f3f6" />
              
              {/* College Info */}
              <div className="px-4 py-3 md:px-[16px] md:py-[10px]">
                <p className="text-sm md:text-[14px] font-[Inter] font-normal leading-2 md:leading-[8px] text-left text-[#344053]">
                  College of Advanced Manufacturing Innovation
                </p>
              </div>
              
              <Line width="100%" height="1px" backgroundColor="#f2f3f6" />
              
              {/* Program List */}
              <div className="flex flex-col">
                <div className="px-4 py-3 md:px-[16px] md:py-[10px] flex items-start gap-2">
                  <img 
                    src="/images/img_play_sm.svg" 
                    alt="Program" 
                    className="w-2 h-2.5 md:w-[8px] md:h-[10px] mt-1"
                  />
                  <span className="text-sm md:text-[14px] font-[Inter] font-normal leading-tight md:leading-[17px] text-left text-[#344053] flex-1">
                    B.Eng. (Manufacturing System Engineering)
                  </span>
                </div>
                
                <Line width="100%" height="1px" backgroundColor="#f2f3f6" />
                
                <div className="px-4 py-3 md:px-[16px] md:py-[10px]">
                  <span className="text-sm md:text-[14px] font-[Inter] font-normal leading-normal md:leading-[20px] text-left text-[#344053]">
                    B.Eng. (Manufacturing System Engineering) (Continuing Program)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:flex-1 order-1 lg:order-2">
            <div className="flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-10 lg:gap-[28px]">
              
              {/* Page Title */}
              <div className="ml-0 sm:ml-2 md:ml-[6px]">
                <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[Canela Trial] font-bold leading-[32px] sm:leading-[48px] md:leading-[56px] lg:leading-[64px] text-left text-primary-dark w-full">
                  Bachelor of Engineering Program in Manufacturing System Engineering
                </h1>
              </div>
              
              {/* Subtitle */}
              <div className="ml-0 sm:ml-2 md:ml-[6px]">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-[Roboto] font-light leading-relaxed md:leading-[29px] text-left text-[#23457ee5]">
                  B.Eng. (Manufacturing System Engineering)
                </p>
              </div>
              
              {/* Divider */}
              <div className="mt-4 sm:mt-5 md:mt-[20px] mr-1 md:mr-[4px]">
                <Line width="100%" height="1px" backgroundColor="#444444" />
              </div>
              
              {/* Program Description */}
              <div className="mt-6 sm:mt-7 md:mt-[28px]">
                <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[Canela Trial] font-bold leading-[32px] sm:leading-[40px] md:leading-[44px] text-left text-primary-dark mb-4">
                  <span className="text-primary-dark">Program </span>
                  <span className="text-[#007aff]">Description</span>
                </h2>
                
                <div className="mt-3 sm:mt-4 md:mt-[14px]">
                  <p className="text-sm sm:text-base md:text-[16px] font-[Poppins] font-light leading-6 sm:leading-7 md:leading-[28px] text-left text-[#6e7c86e5] w-full">
                    At AMI, We focus on the integration of many programs including Electrical engineering, Industry engineering, Mechanical engineering, Electronics engineering, Control engineering, and Management industry.<br/><br/>
                    The program integrates various disciplinaries including Electrical engineering, Industry engineering, Mechanical engineering, Electronics engineering, Control engineering, and Management industry. The course consists of four following groups of subjects, each focusing throughout on different crucial aspects of practical manufacturing technologies:<br/><br/>
                    • Manufacturing Process Technology<br/>
                    • Manufacturing Process Automation<br/>
                    • Manufacturing Quality Control and Management<br/>
                    • Artificial intelligence and internet of things
                  </p>
                </div>
              </div>
              
              {/* Program Learning Outcomes */}
              <div className="mt-6 sm:mt-7 md:mt-[28px]">
                <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[Canela Trial] font-bold leading-[32px] sm:leading-[40px] md:leading-[44px] text-left mb-4">
                  <span className="text-primary-dark">Program </span>
                  <span className="text-primary-dark">learning</span>
                  <span className="text-[#007aff]"> outcomes</span>
                </h2>
                
                <div className="mt-3 sm:mt-4 md:mt-[14px]">
                  <p className="text-sm sm:text-base md:text-[16px] font-[Poppins] font-light leading-6 sm:leading-7 md:leading-[28px] text-left text-[#6e7c86e5]">
                    • Explain and solve engineering and manufacturing knowledges<br/>
                    • Solve manufacturing problems by using information technology<br/>
                    • Apply knowledge to solve manufacturing problems<br/>
                    • Create new skills in manufacturing by applying multidiscipline<br/>
                    • Discipline, on-time, responsible to tasks and groups
                  </p>
                </div>
              </div>
              
              {/* Program Structure */}
              <div className="mt-6 sm:mt-7 md:mt-[28px] mr-0 sm:mr-2 md:mr-[6px]">
                <div className="flex flex-col justify-start items-start gap-4 sm:gap-5 md:gap-6 w-full">
                  <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[Canela Trial] font-bold leading-[32px] sm:leading-[40px] md:leading-[44px] text-left">
                    <span className="text-primary-dark">Program </span>
                    <span className="text-[#007aff]">structure</span>
                  </h2>
                  
                  <div className="mt-3 sm:mt-4 md:mt-[14px]">
                    <p className="text-sm sm:text-base md:text-[16px] font-[Poppins] font-light leading-6 sm:leading-7 md:leading-[28px] text-left text-[#6e7c86e5] w-full">
                      • General education courses 30 credit hours<br/>
                      • Technical courses 109 credit hours (pre-core module 24 credit hours, core module 79 credit hours, senior project/oversea training/co-operative education 6 credit hours)<br/>
                      • Elective course 6 credit hours
                    </p>
                  </div>
                  
                  {/* Download Link */}
                  <div className="flex items-start gap-1 sm:gap-2 md:gap-4 mt-8 sm:mt-9 md:mt-[40px] w-full">
                    <img 
                      src="/images/img_play_sm.svg" 
                      alt="Download" 
                      className="w-2 h-2.5 md:w-[8px] md:h-[10px] mt-1"
                    />
                    <a 
                      href="#" 
                      className="text-sm sm:text-base md:text-[16px] font-[Canela Trial] font-normal leading-normal md:leading-[20px] text-left underline text-primary-accent hover:opacity-80 transition-opacity duration-200 ml-1 md:ml-[4px]"
                    >
                      Download The course prospectus and syllabus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;