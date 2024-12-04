import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  const slides = [
    {
      id: 1,
      img: require('../Images/Slide1.jpg'),
      alt: "The Last Hurrah",
    },
    {
      id: 2,
      img: require('../Images/Slide2.jpg'),
      alt: "The Last Hurrah",
    },
    {
      id: 3,
      img: require('../Images/Slide3.jpg'),
      alt: "The Last Hurrah",
    },
    {
      id: 4,
      img: require('../Images/Slide4.jpg'),
      alt: "The Last Hurrah",
    },
    {
      id: 5,
      img: require('../Images/Slide5.jpg'),
      alt: "The Last Hurrah",
    },
    {
      id: 6,
      img: require('../Images/Slide6.jpg'),
      alt: "The Last Hurrah",
    },
    {
      id: 7,
      img: require('../Images/Slide7.jpg'),
      alt: "The Last Hurrah",
    },
    {
      id: 8,
      img: require('../Images/Slide8.png'),
      alt: "The Last Hurrah",
    },
    {
      id: 10,
      img: require('../Images/Slide10.jpg'),
      alt: "The Last Hurrah",
    },
    {
      id: 11,
      img: require('../Images/Slide11.jpg'),
      alt: "The Last Hurrah",
    },
    {
      id: 12,
      img: require('../Images/Slide12.jpg'),
      alt: "The Last Hurrah",
    },
    {
      id: 13,
      img: require('../Images/Slide13.jpg'),
      alt: "The Last Hurrah",
    },
    {
      id: 14,
      img: require('../Images/Slide14.jpg'),
      alt: "The Last Hurrah",
    },
    {
      id: 15,
      img: require('../Images/Slide15.jpg'),
      alt: "The Last Hurrah",
    },
    
  ];
  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20} // Space between slides
        slidesPerView={3} // Display 3 slides at a time
        navigation
        autoplay={{ delay: 3000 }} // Slides change every 3 seconds
        loop={true} // Enables infinite looping behavior
        className="h-[400px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full">
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
