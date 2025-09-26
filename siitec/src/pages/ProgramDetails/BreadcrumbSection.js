import React from 'react';
import SearchView from '../../components/ui/SearchView';

const BreadcrumbSection = () => {
  return (
    <section className="w-full bg-secondary-background py-3 sm:py-4 md:py-[12px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-4 lg:gap-0 w-full">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 w-full lg:flex-1 mb-1 sm:mb-0 md:mb-[4px]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6 w-full lg:flex-1">
              {/* Home */}
              <div className="flex items-center">
                <div className="px-0 sm:px-1 md:px-[2px] py-1 sm:py-2 md:py-[2px]">
                  <span className="text-sm md:text-[14px] font-[Inter] font-normal leading-tight md:leading-[17px] text-center text-text-dark">
                    Home
                  </span>
                </div>
              </div>

              {/* Academics with Dropdown */}
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-sm md:text-[14px] font-[Inter] font-normal leading-tight md:leading-[17px] text-left text-text-dark">
                  Academics
                </span>
                <img 
                  src="/images/img_arrow_down.svg" 
                  alt="Dropdown" 
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]"
                />
              </div>

              {/* Current Page */}
              <div className="flex-1 px-2 sm:px-3 md:px-[16px] py-1 sm:py-2 md:py-[4px]">
                <span className="text-sm md:text-[14px] font-[Inter] font-normal leading-tight md:leading-[17px] text-left text-text-dark">
                  B.Eng. (Manufacturing System Engineering)
                </span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="w-full sm:w-auto lg:w-[20%] self-end">
            <SearchView
              placeholder="Search"
              className="gap-[6px] border border-border-primary rounded-md px-3 py-1 md:px-[12px] md:py-[4px] bg-secondary-background"
              layout_gap=""
              layout_width=""
              padding=""
              position=""
              variant=""
              size=""
              value=""
              onChange={() => {}}
              onSubmit={() => {}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSection;