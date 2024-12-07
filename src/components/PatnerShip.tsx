"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface Testimonial {
  text: string;
  author: string;
  designation: string;
  companyLogo: string;
  profileImage: string;
}

const testimonials: Testimonial[] = [
  {
    text: "We approached Appinventiv with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge. The Appinventiv team not only understood our vision but also enhanced the overall solution with their expertise. The end results exceeded our expectations with massive improvements in the user base and digital revenue for different brands.",
    author: "Neeraj Tiwari",
    designation: "Director – Digital Engineering  Americana Group (Kuwait Food Co.)",
    companyLogo: "/Asset/company logo.svg",
    profileImage: "https://s3-alpha-sig.figma.com/img/a476/3e57/659240565def57d3b05a0716eb7588df?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iWqbSf4J6XKZT0B42ksWFN3vVAyqNwL5EqLJDAM6y5PHu790yPPCzWkhUIXaa-LbHrfhNHgPhW0CHpmndiFo6RCxsEVkEvZFu6ZrD1x4ItXBdUlfTlYLCQsTbdUW2n3m-g8NIQnj-8gWemlZV5vaxi2MnxXFr-em0VkD995qkfxXp9eI0HPq2e0hvCTRO6P1ATxyPv7Kc-~nEW6QWvWAlOYe~qFkuhWI9YTMo~eDl3HxvhKFeMWqJKZ7yW5k7uoU7sz3XRKg1JfY2HOmKjGcoZFEK9d~Ek-sgih4~cQ-qO67p1tg9q37rt8ffSq6sAMxR3TsjeTkPYVJA1ySB5I04g__",
  },
  {
    text: "We approached Appinventiv with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge. The Appinventiv team not only understood our vision but also enhanced the overall solution with their expertise. The end results exceeded our expectations with massive improvements in the user base and digital revenue for different brands.",
    author: "Neeraj Tiwari",
    designation: "Director – Digital Engineering",
    companyLogo: "/Asset/company logo.svg",
    profileImage: "https://s3-alpha-sig.figma.com/img/a476/3e57/659240565def57d3b05a0716eb7588df?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iWqbSf4J6XKZT0B42ksWFN3vVAyqNwL5EqLJDAM6y5PHu790yPPCzWkhUIXaa-LbHrfhNHgPhW0CHpmndiFo6RCxsEVkEvZFu6ZrD1x4ItXBdUlfTlYLCQsTbdUW2n3m-g8NIQnj-8gWemlZV5vaxi2MnxXFr-em0VkD995qkfxXp9eI0HPq2e0hvCTRO6P1ATxyPv7Kc-~nEW6QWvWAlOYe~qFkuhWI9YTMo~eDl3HxvhKFeMWqJKZ7yW5k7uoU7sz3XRKg1JfY2HOmKjGcoZFEK9d~Ek-sgih4~cQ-qO67p1tg9q37rt8ffSq6sAMxR3TsjeTkPYVJA1ySB5I04g__",
  },
  {
    text: "We approached Appinventiv with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge. The Appinventiv team not only understood our vision but also enhanced the overall solution with their expertise. The end results exceeded our expectations with massive improvements in the user base and digital revenue for different brands.",
    author: "Neeraj Tiwari",
    designation: "Director – Digital Engineering",
    companyLogo: "/Asset/company logo.svg",
    profileImage: "https://s3-alpha-sig.figma.com/img/a476/3e57/659240565def57d3b05a0716eb7588df?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iWqbSf4J6XKZT0B42ksWFN3vVAyqNwL5EqLJDAM6y5PHu790yPPCzWkhUIXaa-LbHrfhNHgPhW0CHpmndiFo6RCxsEVkEvZFu6ZrD1x4ItXBdUlfTlYLCQsTbdUW2n3m-g8NIQnj-8gWemlZV5vaxi2MnxXFr-em0VkD995qkfxXp9eI0HPq2e0hvCTRO6P1ATxyPv7Kc-~nEW6QWvWAlOYe~qFkuhWI9YTMo~eDl3HxvhKFeMWqJKZ7yW5k7uoU7sz3XRKg1JfY2HOmKjGcoZFEK9d~Ek-sgih4~cQ-qO67p1tg9q37rt8ffSq6sAMxR3TsjeTkPYVJA1ySB5I04g__",
  },
  
];

const PatnerShip = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%", 
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "15%", 
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10%", 
        },
      },
    ],
  };

  return (
    <div className="bg-black text-white py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold">
          First-Hand Opinions of Clients on Their Partnership Experience
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We are a software and mobile application development company that
          ensures its expertise extends to offer a seamlessly productive and
          growth-oriented partnership to its clients.
        </p>
      </div>

      {/* Testimonial Cards */}
      <Slider {...settings} >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-[#3B3B3B] p-12 rounded-lg shadow-lg w-full"
          >
            <p className="text-gray-300 mb-6">{testimonial.text}</p>
            <div className="flex items-center border-t border-gray-600 pt-4">
              <img
                src={testimonial.profileImage}
                alt={testimonial.author}
                className="w-24 h-24 rounded-md mr-4"
              />
              <div>
                <h3 className="font-bold">{testimonial.author}</h3>
                <p className="text-sm text-gray-400 w-[60%]">
                  {testimonial.designation}
                </p>
              </div>
              <img
                src={testimonial.companyLogo}
                alt="Company Logo"
                className="ml-auto w-20 h-auto"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PatnerShip;
