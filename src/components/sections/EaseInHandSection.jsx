import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from '@/assets/images';
import FeatureItem from '../blocks/FeatureItem';
import Testimonial from '../blocks/Testimonial';

const EaseInHandSection = () => {
    const features = [
      { icon: Icon1, title: "Operational efficiency", description: "Automate ordering, payment and stock management." },
      { icon: Icon2, title: "Security data", description: "Strong security to protect your customer and business data." },
      { icon: Icon3, title: "Stock management", description: "Track stock in real-time and avoid stock outs or wastage." },
      { icon: Icon4, title: "Easy to integrate", description: "The integration process with third-party services runs easily." },
      { icon: Icon5, title: "Manage financial", description: "Better record all purchase transactions automatically." },
      { icon: Icon6, title: "Business Scalability", description: "Easily add & upgrade according to your business growth." }
    ];
  
    const testimonials = [
      {
        bgColor: "bg-[#f1faeb]",
        textColor: "text-[#38715B]",
        iconBgColor: "bg-[#a8ba9b]",
        quote: "We are very impressed with the use of this POS application. Management of orders and payments becomes faster and more accurate so as to increase our operational efficiency.",
        name: "Stevano William",
        position: "CEO at Pizza Hut"
      },
      {
        bgColor: "bg-[#ecf6ff]",
        textColor: "text-[#3871A5]",
        iconBgColor: "bg-[#9eb2c3]",
        quote: "The use of this application has given our company efficiency and accuracy in managing orders and payments.",
        name: "Jennifer Lopes",
        position: "Business Owner at KFC Indonesia"
      },
      {
        bgColor: "bg-[#fff5ee]",
        textColor: "text-[#DC8558]",
        iconBgColor: "bg-[#c8a898]",
        quote: "We are pleased with the flexibility of this company's POS application. We can easily adapt our menu, prices, and promotions according to market needs.",
        name: "Emanuel Rodrigo",
        position: "Product Owner McDonald's"
      }
    ];
  
    return (
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between h-full">
            <div className="mb-10">
              <h2 className="text-4xl md:text-6xl xl:w-[60%] font-medium text-[#19191C] mb-8">Ease in the Hand</h2>
              <p className="text-lg text-[#4D4E57]">Using our app in business, especially in the restaurant industry, has many advantages. Here are some of them:</p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>
  
          <div className="flex flex-col justify-between space-y-6 h-full">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default EaseInHandSection;