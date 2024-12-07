"use client"
import Navbar from "@/components/Navbar";
import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "@/components/Footer";

type Location = {
    title: string;
    address: string;
    phone: string;
    icon: string;
  }

  const locations: Location[] = [
    {
      title: "India (HQ)",
      address: "B-25, Sector 58, Noida 201301, UP, India",
      phone: "+91 844-883-2016",
      icon: "/Asset/India.png", 
    },
    {
      title: "United States",
      address: "79 Madison Ave Manhattan, NY 10001, USA",
      phone: "+1 646-585-0501",
      icon: "/Asset/United.png",
    },
    {
      title: "UAE",
      address: "Tiger Al Yarmook Building, 13th floor, Al Nahda Street, Sharjah",
      phone: "+971 54-454-4501",
      icon: "/Asset/Uae.png",
    },
    {
      title: "Australia",
      address: "Appinventiv Australia, East Brisbane QLD 4169, Australia",
      phone: "+61 (0) 410 505 508",
      icon: "/Asset/Australia.png",
    },
    {
      title: "United Kingdom",
      address: "3rd Floor, 86-90 Paul Street EC2A 4NE London, UK",
      phone: "+44-753-900-6841",
      icon: "/Asset/Kingdom.png",
    },
  ];
  

const page = () => {
    const sliderRef = useRef<Slider | null>(null);

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };
 
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        centerPadding: "20px",
        responsive: [
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 710,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <div className="bg-white ">
      <div className="h-[32rem] contact-bg ">
        {/* Navbar */}
        <Navbar />
        <div className="flex items-start w-[85%] m-auto mt-12 relative">
          <div className=" text-start px-4 mt-12  w-1/2">
            <h1 className="text-4xl md:text-5xl font-semibold">
              Kickstart Your Digital Journey Today
            </h1>
            <p className="mt-6 text-xl font-light max-w-xs  ">
              Get all your questions answered by our business development team.
            </p>
            <div className="flex gap-5">
              <a
                href="#"
                className="mt-10 inline-block bg-blue-600  text-white py-3.5 px-6 rounded"
              >
                Consult Our Experts
              </a>
              <a
                href="#"
                className="mt-10 inline-block bg-[#FFFFFF]  text-blue-500 py-3.5 px-6 rounded"
              >
                Consult Our Experts
              </a>
            </div>
          </div>

          <div className="flex justify-center items-cente rounded-lg bg-white">
            <div className="rounded-lg shadow-lg w-full max-w-lg">
              <h2 className="text-xl  text-center mb-6 text-neutral-800 py-2 bg-[#F6F6F6] rounded-lg">
                Request a proposal
              </h2>
              <div className="mb-6 px-6">
                <form className="space-y-4 ">
                  {/* Name and Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border-b focus:outline-none border-gray-300 text-neutral-500  px-4 py-2 w-full"
                    />
                    <input
                      type="email"
                      placeholder="Work Email"
                      className="border-b focus:outline-none text-neutral-500 border-gray-300 px-4 py-2 w-full"
                    />
                  </div>

                  {/* Select Budget and Contact Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      className="border-b focus:outline-none border-gray-300 px-4 py-2 w-full text-neutral-600"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a Budget Range
                      </option>
                      <option value="low">Less than $10,000</option>
                      <option value="medium">$10,000 - $50,000</option>
                      <option value="high">More than $50,000</option>
                    </select>
                    <div className="flex">
                      <span className="border-b border-gray-300 text-neutral-500 px-4 py-2">
                        +1
                      </span>
                      <input
                        type="text"
                        placeholder="Contact number"
                        className="border-b text-neutral-500 focus:outline-none border-gray-300  px-4 py-2 w-full"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <textarea
                    placeholder="Describe your idea to help us assign the relevant consultation expert."
                    className=" rounded px-4 py-2 w-full text-sm bg-[#F6F6F6] focus:outline-none"
                    rows={2}
                  ></textarea>

                  {/* Attach File */}
                  <div className="flex items-center justify-between">
                    <label className="text-neutral-500 rounded-lg px-4 py-2 cursor-pointer">
                      Attach file (less than 10MB)
                      <input type="file" className="hidden" />
                    </label>
                    <button className="bg-[#0092FF] text-white rounded-lg px-4 py-3 ">
                      <FaPlus />
                    </button>
                  </div>

                  {/* NDA and Captcha */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span className="text-gray-600">
                        Send me a copy of NDA
                      </span>
                    </label>
                    <div className="flex items-center justify-end space-x-2">
                      <span className=" text-neutral-500">3 + 2 =</span>
                      <input
                        type="text"
                        className="border border-gray-300 rounded px-4 py-2  w-20"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </form>

                {/* Footer Notes */}
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Your idea is 100% protected by our non-disclosure agreement.
                </p>
                <p className="text-sm text-gray-500 text-center">
                  <label className="flex justify-center items-center mt-2 space-x-2">
                    <input type="checkbox" />
                    <span>
                      Keep me updated of the upcoming technology trends
                    </span>
                  </label>
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 flex gap-12">
            <img
              src="/Asset/Kpmg.png"
              alt=""
              className="w-40 h-12 object-contain"
            />
            <img
              src="/Asset/Bcg1.png"
              alt=""
              className="w-40 h-12 object-contain"
            />
            <img
              src="/Asset/Asian.png"
              alt=""
              className="w-40 h-12 object-contain"
            />
          </div>
        </div>
      </div>

      <section className=" bg-white border-black mt-48 pb-10">
        <div className="w-[85%] m-auto px-6 text-center">
          <div className="w-full flex justify-center">
            <h2 className="text-2xl md:text-4xl max-w-xl mb-6 text-[#333333] ">
              We are helping Global Leaders with Digital Engineering
            </h2>
          </div>

          <div className="flex py-10 px-6 flex-col md:flex-row items-center justify-between bg-[#F5F5F5] rounded-lg ">
            {/* Left Section */}
            <div className=" md:w-1/5">
              <h3 className="text-3xl  mb-4 text-[#333333]">
                Become the next big story
              </h3>
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                Talk to our Experts
              </button>
            </div>

            {/* Right Section */}
            {/* <div className="px-6 py-8 md:w-[60%] bg-white rounded"> */}
            <Slider {...settings} ref={sliderRef} className="px-6 py-8 md:w-[60%] bg-white rounded" >  
              <div className="flex flex-col items-start">
                <h4 className="text-3xl font-bold text-red-600 mb-4">KFC</h4>
                <p className="text-gray-600 text-lg ">
                  "We were looking for an agency that holds an expertise in not
                  just mobile but other digital avenues active in a restaurant
                  space as well. When we saw Appinventiv's portfolio ranging
                  across multiple restaurant solutions, we knew that they would
                  be the best fit for our needs."
                </p>
                <div className="flex justify-end gap-5 w-full mt-6">
                  <button className="text-neutral-500"
                   onClick={prevSlide}
                 
                  >
                    <GoArrowLeft />
                  </button>
                  <button className="text-neutral-500"
                  onClick={nextSlide}
                  >
                    <GoArrowRight />
                  </button>
                </div>
              </div>
             
              <div className="flex flex-col items-start">
                <h4 className="text-3xl font-bold text-red-600 mb-4">KFC</h4>
                <p className="text-gray-600 text-lg ">
                  "We were looking for an agency that holds an expertise in not
                  just mobile but other digital avenues active in a restaurant
                  space as well. When we saw Appinventiv's portfolio ranging
                  across multiple restaurant solutions, we knew that they would
                  be the best fit for our needs."
                </p>
                <div className="flex justify-end gap-5 w-full mt-6">
                  <button className="text-neutral-500"
                 
                  onClick={prevSlide}
                  >
                    <GoArrowLeft />
                  </button>
                  <button className="text-neutral-500"
                  onClick={nextSlide}
                  >
                    <GoArrowRight />
                  </button>
                </div>
              </div>
              </Slider>
            {/* </div> */}
          </div>
        </div>
      </section>

     <div className="py-10 bg-white border">
      <h2 className="text-center text-3xl mb-8 text-[#333333]">
        Appinventiv around the Globe
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        {locations.map((location, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white  rounded-lg p-6"
          >
            <img
              src={location.icon}
              alt={location.title}
              className="w-28 h-auto object-contain mb-4"
            />
            <div className="w-36">
            <h3 className="text-lg font-medium mb-2 text-neutral-700">{location.title}</h3>
            <p className="text-sm font-semibold text-gray-600">{location.address}</p>
            <p
            //   href={`tel:${location.phone}`}
              className="pt-5 text-blue-500 font-medium"
            >
              {location.phone}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white h-[30rem]">
    <div className="bg-blue-500 py-10 h-60">
      <div className="w-[80%] m-auto flex flex-col justify-between shadow-md md:flex-row items-center bg-white mt-16 ">
        {/* Left Text Section */}
        <div className="p-8 md:w-[60%] ">
          <h1 className="text-4xl text-gray-800 mb-4">
            Enable Unmatched Digital Transformation Seamlessly
          </h1>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition">
            Talk to Our Experts
          </button>
        </div>

        {/* Right Image Section */}
        <div >
          <img
            src="https://s3-alpha-sig.figma.com/img/8aee/1b6e/219df462a6bb2ddc70d6cd1582c37e52?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hCPpZt6ZWi8Jux~QH3dRUrKnZX6rOADYMpgY7OSnpiqF-d9lC9V0zVAmvpFDWx6Vwf2mqL9hDictGXioD08BvrrAVFkPunH9mmi4msAYctSz0v9AxOL8j~oZ-P7rrTGFV5BR4UypQPZ-7LXm0jRuGfyaGGEWFhwqFOWgcMLITMrJ45H5cHFuxn3Li1QnB8ym7ATKTAWtI2v58L7T-9hTamhbvHCk0IXgkn~6SwWCcVckhcdpLnCLwGWesfc~6SCEN0WkLlGTpXt22AFHkSIt-PNZNYgjIyXejPLrR-ejkRT8VIvFj~MtB~ptwtn0ZAV0n8TG3VqhYgVB-PmgkfP8sQ__" // Replace with the actual path to your image
            alt="Digital Transformation"
            className="w-96 h-80 object-cover"
          />
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default page;
