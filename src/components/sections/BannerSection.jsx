import Image from 'next/image';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Icon7, Icon8, Icon9, Icon10, Chart } from '@/assets/images';
import Button from '../common/Button';
import InfoBadge from '../common/InfoBadge';
import { BarChartComponent, TestimonialSlider } from '../blocks';

const BannerSection = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 mb-16">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-[55%] xl:w-[65%] bg-[url('/images/bg1.png')] bg-cover bg-center p-8 lg:p-14 flex flex-col rounded-3xl">
          <p className="mb-6 text-sm text-white max-w-[370px]">
            All the features you need in one App for any kind of your business 🚀
          </p>
          <h1 className="text-4xl lg:text-6xl font-medium mb-8 text-white">
            Manage your restaurant business so advanced
          </h1>
          <div>
            <Button label="Try for free" href="#" icon={<FaArrowRight />} />
          </div>
        </div>

        <div className="w-full lg:w-[45%] xl:w-[35%] flex flex-col justify-between lg:pl-6">
          <div className="bg-[#f8f9fd] p-6 rounded-3xl mb-[20px] flex flex-col min-h-[375px]">
            <InfoBadge iconSrc={Icon7} altText="Sales Statistics" text="Sales Statistics" />
            <BarChartComponent />
          </div>

          <div className="flex mb-[20px] md:space-x-[20px] flex-col md:flex-row">
            <div className="bg-[#f2ecff] p-6 rounded-3xl flex-1 flex flex-col justify-between min-h-[265px] w-full md:w-full mb-4 md:mb-0">
              <div>
                <InfoBadge iconSrc={Icon8} altText="Rating Review" text="Rating Review" />
                <p className="text-sm">Reviews of some of our app restaurant industry companies.</p>
              </div>
              <div className="flex items-center justify-start mt-auto">
                <Image src={Icon9} alt="Star Rating" width={32} height={32} className="mr-2" />
                <p className="text-4xl font-bold">4.9</p>
              </div>
            </div>

            <div className="bg-[#333333] p-6 rounded-3xl text-white flex-1 flex flex-col justify-between min-h-[265px] w-full md:w-full md:ml-0">
              <InfoBadge
                iconSrc={Icon10}
                altText="Total Partner"
                text="Total Partner"
                bgColor="bg-[#222222]"
                textColor="text-white"
              />
              <p className="text-3xl mt-auto">
                <span className="text-5xl font-semibold">50</span> thousands
              </p>
            </div>
          </div>


          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;