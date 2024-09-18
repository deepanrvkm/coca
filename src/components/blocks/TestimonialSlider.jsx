'use client';

import LoadingPage from '@/app/loading';
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TestimonialSlider = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/testimonials');
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  if (loading) return <LoadingPage/>;

  if (slides.length === 0) return <div>No testimonials available</div>;

  return (
    <div className="relative w-full mx-auto">
      <div className="relative bg-[#fff5ee] p-6 rounded-3xl flex-1 min-h-[220px]">
        <p className="text-[#DC8558] text-[24px] leading-8 font-medium mb-4">
          &quot;{slides[currentSlide].text}&quot;
        </p>
        <div className="flex items-center space-x-4 bg-white rounded-full px-6 pl-2 py-2 w-fit">
          <div className="w-14 h-14 bg-[#c8a898] rounded-full"></div>
          <div>
            <p className="text-[18px] font-medium text-black">
              {slides[currentSlide].name}
            </p>
            <p className="text-[16px] text-black">{slides[currentSlide].position}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 flex space-x-4">
        <button onClick={prevSlide} className="text-[#333333] hover:text-[#FF5C00]">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="text-[#FF5C00] hover:text-[#FF5C00]">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;