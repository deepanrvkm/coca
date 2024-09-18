import { FaArrowRight } from 'react-icons/fa';
import Button from '../common/Button';

const SolutionsSection = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8">
      <div className="relative bg-[url('/images/bg2.png')] bg-[length:100%] bg-no-repeat bg-bottom py-16 md:py-24 bg-[#1a1a1d] rounded-tl-3xl rounded-tr-3xl min-h-[700px] md:min-h-[800px] lg:min-h-[1100px] 2xl:min-h-[1300px]">
        <div className="container mx-auto px-6 text-center flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl lg:text-6xl font-medium mb-4 w-full lg:w-[80%] leading-[2]">
            Gain Excellence with the Best POS Solutions
          </h1>
          <p className="text-white text-lg mb-8 leading-[2] w-full lg:w-[55%]">
            Provide an unforgettable customer experience with fast ordering, convenient payments, and better service.
          </p>
          <Button label="Get Started for Free" href="#" icon={<FaArrowRight />} />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
