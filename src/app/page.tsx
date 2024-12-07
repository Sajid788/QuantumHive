"use client"
import Image from "next/image";
import {
  FiSmartphone,
  FiCode,
  FiSettings,
  FiFeather,
  FiMonitor,
  FiCloud,
} from "react-icons/fi";
import {
  FaRobot,
  FaBrain,
  FaCloud,
  FaCogs,
  FaEye,
  FaChartBar,
  FaWifi,
  FaVrCardboard,
  FaChartLine,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { TbFileInfinity } from "react-icons/tb";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PatnerShip from "@/components/PatnerShip";
import { BiSolidRightArrow } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import Navbar from "@/components/Navbar";

type Client = {
  name: string;
  title: string;
  image: string;
};

const clients: Client[] = [
  {
    name: "Edgar",
    title: "CEO, Street Smart 242",
    image:
      "https://s3-alpha-sig.figma.com/img/8e19/a488/02242321e94751b4a828da7d60416288?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jfvV~oDvG~ETP33RZV7VLwp7ymAkZMadoNx860qQOF5YBeZfx7bSFmgsm8worF2wuKIQm2gI2RQqehEYuWGOYR9ujmYrn3k-vzSvROYhJlP5PbrQ8NStitMhvulRIr8GFFcZDNSTuc6Npc8Gs3GC2L1ajvxQUcm0B4Qn1Rp9InpmuJootMFOP3R0UYg6jxjdv8GVHVJhWrPyQPAPhEGJD3tDvq8-SWwpkpNy0o38jup~2ZKFLek8GsIqTNoRBoSveMElhjjNkOoRaQ8A~-Q1AN2jaxXkABcS8xUUL6b5VvibaE1NvT1YqvjjVf69JDab~xswS0wG2bHrxCvuG8I9-Q__",
  },
  {
    name: "Tushar Patel",
    title: "CEO, DoList App",
    image:
      "https://s3-alpha-sig.figma.com/img/fe73/f4c9/0f33e34cdcd2df4fe8858e118ef2b019?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LS~Hdk8I4pxjakO-CPyet~24TYbuKs4eH0UWIliBfrY20hXwlYN6oPVq9xa-TqIfctC~cIxu7adboDYr65Kib61~JDwooQGKmw4xeFLDCPPA9WJqsv3IMnW-LGyA2X~mppwXFcGgGfVOpqWC6TpSrc0GtqiAmSVBjxChxzWbvJ42HIZKAPSeBdx7kewIEo2~zqWt2k3M5YB0MBti6u5oRjn5tb8YJ35EdpGEJXCyK3fQCIWcGm5c1L0IflLoXXmtIFmGwi19PZNoDmD83kxmbm4FAX2IuwDyB9ehThL-gQCwOFYBNqa8RqSMU9URIUJ2pO4tPqIKhhR29W1DZK6KZQ__",
  },
  {
    name: "Daniel Zukich",
    title: "Co-founder, Plandid",
    image:
      "https://s3-alpha-sig.figma.com/img/9006/fcaa/13b64d5e1480019971882b5ba20e27d7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFSPAk9JKJNNV2Hb3unYDaEp6HFnHqVn7T-fQCo~GObcVdC1P-XpqzATp11MiFWcu7-sHOfl1lymNQ3CL5EtUFroHDy2ug8R5D-I8zz-6wg~Ye~6419~O3AXNeDMQ8V~hviGjy-HeqEsa44lKZSyzqdoO3IlBlCaLgrUb40rD-CsMAPckYjurIcdSVXftJuUXysL0I1Q3brN06gEAIJEKc9i544qk9wUBBPxWNJK8FcbaqtGyuhzyLoEEBsASZvaxW1kjuFCefsFCydszbJekxNh7XssumqHNX5a1AD59QKLqIBOfxvmDi~6Z7-LTQIW2HX4x~NMfoO6cdu3AM7qjg__",
  },
  {
    name: "Fred McCaw",
    title: "CEO, McCaw Digital LLC",
    image:
      "https://s3-alpha-sig.figma.com/img/e008/93dc/d0e6bd79f77cf6c259c5c3ec975c7a1a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nQwgn3JVPIYWdjmSdCU63LRRXfRdRAPi9yjvd4GmGFrQ9YEWRCfBMcsRLoLnjZnu3mfTzSAEKDDiEwt8cN1j5E9wLoHuV9EmbVVlXHU9yoyRPmb1PM4XNUe2i7FyoWQT7HKdE-3lYXgk9bWW5yREmxVOwbsJgazrKgrW-0v52gLBafu2dQqCr-7mQ4EOWeHVv0jsD1Pfifm4AtIs9kHcLkpAm7hI0HBAwAi~HuJ6DL7zO~XEE7WpzRFwr9pNpO0onze1O8C1cQx8muZ7D4hK3XbK3uCXhS-puqOfDJt3berfQhlvgBu-LLnHoPWvQpz2SLUSqtDKG0FcZae1TquM~A__",
  },
];

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const services: Service[] = [
  {
    title: "Mobile App Development",
    description:
      "We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement.",
    icon: <FiSmartphone />,
  },
  {
    title: "Software Development",
    description:
      "From custom development to system upgrades, we craft software that enhances operational efficiency and drives innovation.",
    icon: <FiCode />,
  },
  {
    title: "Digital Transformation",
    description:
      "We help businesses stay competitive by transforming legacy systems with modern, digital-first solutions that drive growth.",
    icon: <FiSettings />,
  },
  {
    title: "Ideation and Design Strategy",
    description:
      "Our strategic ideation and design processes ensure that your digital products are not only functional but also well-resonated with users.",
    icon: <FiFeather />,
  },
  {
    title: "IT Consulting",
    description:
      "We provide expert IT consulting services to help your organization navigate complex technology decisions and align IT strategies with business objectives.",
    icon: <FiMonitor />,
  },
  {
    title: "DevOps",
    description:
      "Our DevOps services streamline development and operations to accelerate your project timelines and improve the overall product quality.",
    icon: <TbFileInfinity />,
  },
  {
    title: "Cloud Managed Services",
    description:
      "We manage your cloud infrastructure end-to-end, ensuring it is optimized, secure, and cost-effective; allowing you to focus on strategic business activities.",
    icon: <FiCloud />,
  },
];

type Services = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const service: Services[] = [
  {
    icon: <FaRobot />,
    title: "Artificial Intelligence",
    description:
      "We leverage AI to craft intelligent solutions that streamline operations and enhance decision-making capabilities.",
  },
  {
    icon: <FaBrain />,
    title: "Generative AI",
    description:
      "We utilize Generative AI technology to create solutions that produce new content, automate creative processes and enhance user experiences.",
  },
  {
    icon: <FaCogs />,
    title: "Machine Learning",
    description:
      "We use ML to build intelligent systems that analyze data patterns and predict outcomes while continuously improving operations.",
  },
  {
    icon: <FaEye />,
    title: "Computer Vision",
    description:
      "We employ computer vision to analyze visual data, automate image processing tasks and enhance the accuracy and speed of visual recognition systems.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud",
    description:
      "We offer scalable and secure cloud consulting services that enhance flexibility and reduce IT overhead, allowing your team to focus on business growth.",
  },
  {
    icon: <FaChartBar />,
    title: "Data Science and Analytics",
    description:
      "We leverage data to extract actionable insights, helping your business make informed decisions and optimize operations.",
  },
  {
    icon: <FaWifi />,
    title: "IoT",
    description:
      "We create IoT apps that connect various devices seamlessly, boosting efficiency and exploring new possibilities for enhanced automation and monitoring.",
  },
  {
    icon: <FaVrCardboard />,
    title: "AR/VR",
    description:
      "We design and develop immersive AR and VR applications that offer engaging and interactive user experiences.",
  },
  {
    icon: <FaVrCardboard />,
    title: "Blockchain",
    description:
      "We develop blockchain solutions that enhance transparency and security across sectors like finance, retail, healthcare, and manufacturing.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Intelligence",
    description:
      "We empower your business with BI tools that provide clear, concise data visualizations, helping your team to understand trends and drive business performance.",
  },
];

type Logo = {
  name: string;
  src: string;
};

const logos: Logo[] = [
  { name: "IKEA", src: "/Asset/Ikea.svg" },
  { name: "Google", src: "/Asset/Google.svg" },
  { name: "BCG", src: "/Asset/BCG.svg" },
  { name: "KFC", src: "/Asset/Kfc.svg" },
  { name: "TGI Fridays", src: "/Asset/Fridays.svg" },
  { name: "IKEA", src: "/Asset/Ikea.svg" },
  { name: "Google", src: "/Asset/Google.svg" },
  { name: "BCG", src: "/Asset/BCG.svg" },
  { name: "KFC", src: "/Asset/Kfc.svg" },
  { name: "TGI Fridays", src: "/Asset/Fridays.svg" },
  { name: "IKEA", src: "/Asset/Ikea.svg" },
  { name: "Google", src: "/Asset/Google.svg" },
  { name: "BCG", src: "/Asset/BCG.svg" },
  { name: "KFC", src: "/Asset/Kfc.svg" },
  { name: "TGI Fridays", src: "/Asset/Fridays.svg" },
];

// Define the type for an industry card
type Industry = {
  name: string;
  icon: string;
};

const industries: Industry[] = [
  { name: "Healthcare", icon: "❤️" },
  { name: "Finance", icon: "💲" },
  { name: "Restaurant", icon: "🍽️" },
  { name: "eCommerce", icon: "🛒" },
  { name: "Electric Vehicle (EV)", icon: "🔋" },
  { name: "SaaS", icon: "☁️" },
  { name: "Travel", icon: "✈️" },
  { name: "Entertainment", icon: "🎵" },
  { name: "On-Demand", icon: "🚴" },
  { name: "Social Media", icon: "💬" },
  { name: "Logistics", icon: "📦" },
  { name: "Education", icon: "📚" },
  { name: "Real Estate", icon: "🏠" },
  { name: "Aviation", icon: "✈️" },
  { name: "Agriculture", icon: "🌾" },
  { name: "Telecom", icon: "📞" },
  { name: "Oil and Gas", icon: "⛽" },
  { name: "Automotive", icon: "🚗" },
  { name: "Insurance", icon: "📑" },
  { name: "Manufacturing", icon: "🏭" },
];

type MenuItem = {
  name: string;
  active: boolean;
};

type Technology = {
  name: string;
  icon: string;
};

const menuItems: MenuItem[] = [
  { name: "Frontend Programming Languages", active: true },
  { name: "Backend Programming Languages", active: false },
  { name: "Mobile", active: false },
  { name: "Big Data", active: false },
  { name: "Databases / Data Storages", active: false },
  { name: "Cloud DB, Warehouses and Storage", active: false },
  { name: "DevOps", active: false },
];

const technologies: Technology[] = [
  { name: "CSS", icon: "/Asset/Css.svg" },
  { name: "HTML", icon: "/Asset/Html.svg" },
  { name: "Javascript", icon: "/Asset/Css.svg" },
  { name: "Angular", icon: "/Asset/Html.svg" },
  { name: "React", icon: "/Asset/Css.svg" },
  { name: "Vue.js", icon: "/Asset/Html.svg" },
  { name: "ember", icon: "/Asset/Html.svg" },
  { name: "Meteor", icon: "/Asset/Html.svg" },
  { name: "Next.js", icon: "/Asset/Html.svg" },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What mobile app development services do you offer?",
    answer: "We offer end-to-end mobile app development services, including design, development, and deployment for Android and iOS platforms.",
  },
  {
    question: "What software development services do you offer?",
    answer: "Our software development services include custom software development, cloud solutions, and enterprise software integration.",
  },
  {
    question: "What is the average cost and timeline for developing a mobile app?",
    answer: "The cost and timeline depend on the app's complexity. Typically, development can take 3-6 months with a budget ranging from $10,000 to $100,000.",
  },
  {
    question: "How do you ensure the security and quality of the software you develop?",
    answer: "We follow industry best practices such as code reviews, automated testing, and adherence to security standards like OWASP.",
  },
  {
    question: "Do you offer app maintenance and support services?",
    answer: "Yes, we provide ongoing maintenance, updates, and support to ensure your app remains functional and up-to-date.",
  },
  {
    question: "Do you assist with software integration and data migration?",
    answer: "Absolutely. We assist with seamless integration of software systems and ensure data migration with minimal downtime.",
  },
  {
    question: "What mobile app development services do you offer?",
    answer: "We offer end-to-end mobile app development services, including design, development, and deployment for Android and iOS platforms.",
  },
  {
    question: "What software development services do you offer?",
    answer: "Our software development services include custom software development, cloud solutions, and enterprise software integration.",
  },
  {
    question: "What is the average cost and timeline for developing a mobile app?",
    answer: "The cost and timeline depend on the app's complexity. Typically, development can take 3-6 months with a budget ranging from $10,000 to $100,000.",
  },
  {
    question: "How do you ensure the security and quality of the software you develop?",
    answer: "We follow industry best practices such as code reviews, automated testing, and adherence to security standards like OWASP.",
  },
  {
    question: "Do you offer app maintenance and support services?",
    answer: "Yes, we provide ongoing maintenance, updates, and support to ensure your app remains functional and up-to-date.",
  },
  
];

interface Award {
  image: string;
  year: string;
  title: string;
}

const awards: Award[] = [
  {
    image: "/Asset/Delloite.svg", 
    year: "2023",
    title: "Fastest Growing Technology Company",
  },
  {
    image: "/Asset/Mobile.svg", 
    year: "2023",
    title: "Top Mobile App Development Companies",
  },
  {
    image: "/Asset/Grouth.svg", 
    year: "2023",
    title: "Tech company of the year",
  },
  {
    image: "/Asset/Champion.svg", 
    year: "2023",
    title: "India's Growth Champions in IT",
  },
];


export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sliderRef = useRef<Slider | null>(null);

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const toggleFAQ = (index: number): void => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div>
      <div className="  text-white w-[96%] m-auto ">
        {/* Hero Section */}
        <div className="h-screen  bg">
          {/* Navbar */}
         <Navbar/>
          <section className="flex items-center">
            <div className=" text-start px-4 mt-40">
              <h1 className="text-4xl md:text-5xl font-semibold">
                Meet the Digital Drivers of Global Disruptors
              </h1>
              <p className="mt-4 text-xl font-light max-w-2xl ">
                We catalyze business growth by reimagining digital experiences
                that conquer complex challenges through innovation and agility.
              </p>
              <a
                href="#"
                className="mt-12 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
              >
                Consult Our Experts
              </a>
            </div>
          </section>
        </div>

        <div className="w-[85%] m-auto">
          <div className="bg-black py-8 ">
            <div className=" flex gap-10">
              {/* Add each logo item */}
              <img
                src="/Asset/Delloite.png"
                alt="Deloitte"
                className="w-full h-28 object-cover"
              />

              <img
                src="/Asset/Grouth.png"
                alt="Deloitte"
                className="w-full h-28 object-cover"
              />

              <img
                src="/Asset/Enterepreneur.png"
                alt="Deloitte"
                className="w-full h-28 object-cover"
              />

              <img
                src="/Asset/Champion.png"
                alt="Deloitte"
                className="w-full h-28 object-cover"
              />

              <img
                src="/Asset/Award.png"
                alt="Deloitte"
                className="w-full h-28 object-cover"
              />
            </div>
          </div>

          <div className="py-14">
            <div className="flex justify-between items-center">
              <h2 className="w-[45%] text-4xl">
                Transforming Businesses with Technology That Transcends
                Geographies and Platforms
              </h2>
              <p className="w-[45%]">
                Appinventiv is one of the world’s largest IT service providers
                helping companies redefine their digital possibilities for
                nearly a decade now. With our team of 1600+ tech evangelists, we
                are building the digital infrastructure of our clients
                positioning them to be the market leaders of their respective
                industries.
              </p>
            </div>
          </div>

          <div className="bg-black text-white mt-8 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {/* Stat Card 1 */}
              <div className="flex flex-col items-start p-6 border-l border-[#2E2E2E] shadow-md">
                <h3 className="text-4xl font-bold text-blue-500">
                  35 <span className="text-white">+</span>
                </h3>
                <p className="mt-4 font-medium">Industries Mastered</p>
                <p className="mt-2 text-gray-400">
                  With our agility & engineering expertise, we equip your
                  critical business functions with customized tech, and expand
                  digital capabilities.
                </p>
              </div>
              {/* Stat Card 2 */}
              <div className="flex flex-col items-start p-6  border-l border-[#2E2E2E] shadow-md">
                <h3 className="text-4xl font-bold text-blue-500">
                  1600 <span className="text-white">+</span>
                </h3>
                <p className="mt-4 font-medium">Tech Evangelists</p>
                <p className="mt-2 text-gray-400">
                  We are a dynamic team of technology enthusiasts and experts
                  passionately driven to achieve the best results for our
                  clients.
                </p>
              </div>
              {/* Stat Card 3 */}
              <div className="flex flex-col items-start p-6  border-l border-[#2E2E2E] shadow-md">
                <h3 className="text-4xl font-bold text-blue-500">
                  3000 <span className="text-white">+</span>
                </h3>
                <p className="mt-4 font-medium">
                  Solutions Designed and Delivered
                </p>
                <p className="mt-2 text-gray-400">
                  We have empowered businesses with thousands of successful
                  future solutions that have helped them grow and scale.
                </p>
              </div>
              {/* Stat Card 4 */}
              <div className="flex flex-col items-start p-6  border-l border-[#2E2E2E] shadow-md">
                <h3 className="text-4xl font-bold text-blue-500">
                  500 <span className="text-white">+</span>
                </h3>
                <p className="mt-4 font-medium">Legacy Processes Transformed</p>
                <p className="mt-2 text-gray-400">
                  We help businesses achieve their digital transformation goals
                  by seamlessly integrating cutting-edge technologies into their
                  legacy systems.
                </p>
              </div>
              {/* Stat Card 5 */}
              <div className="flex flex-col items-start p-6  border-l border-[#2E2E2E] shadow-md">
                <h3 className="text-4xl font-bold text-blue-500">
                  05 <span className="text-white">+</span>
                </h3>
                <p className="mt-4 font-medium">
                  Strategic Federal Partnerships
                </p>
                <p className="mt-2 text-gray-400">
                  We drive collaborative initiatives that address critical
                  challenges and deliver impactful solutions.
                </p>
              </div>
              {/* Call-to-Action */}
              <div className="flex flex-col items-start justify-between p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-white">
                  Ready to innovate and drive an impact?
                </h3>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md">
                  Partner with Us
                </button>
              </div>
            </div>
          </div>

          <div className="flex mt-24  items-center bg-black text-white  rounded-lg overflow-hidden">
            {/* Left Section */}
            <div className=" space-y-8 pr-8 w-[35%]">
              <h3 className="text-blue-500 text-sm uppercase">Case Study</h3>
              <h1 className="text-4xl font-bold">Adidas</h1>
              <p className="text-lg">
                Scores the perfect digital landing in UAE
              </p>
              <div className="flex space-x-8">
                <div>
                  <p className="text-2xl font-bold">2M+</p>
                  <p className="text-sm">App downloads</p>
                </div>
                <div className="mb-8">
                  <p className="text-2xl font-bold">500K</p>
                  <p className="text-sm">New users acquired</p>
                </div>
              </div>
              <button className="px-6 py-2  border border-white rounded-lg hover:bg-white hover:text-black">
                View Case Study
              </button>
            </div>

            {/* Right Section */}

            <div className="relative w-[65%] h-96 rounded-lg overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/159e/28bf/4ce53b11fe46ff4d7dc96b9fd24a941a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KwFl8N8P3vmWIjZo0Y4PXy9cwMjX1LbZerqNp5fVm0~VXw-~78dVjha~ttrs7SzLgcVAdGsZFwTEBTcEMVN~kdASRuk7kuU45frwS0vzdMKI5JrWJ5xOwQiPbLkG5-mNifUxUzMrUz5f89c9SAHguaAOsKVO3a4abxytcBYX6CRtOYh0RfpghhDvtov10lXtNXsGn04pVtaO-DXs6p~noSXntq~hV8HGI7SJI0ivhM87bgl430~UBFEoru1ntVhQM9WxCAgk~K2T7M8UG1Wyc046ZFzAeiKJwaiXll0y9VX616Z7DAXvQkgz7r6ZKi-dFfT6g~V5RxlsrUhY4IGCyA__"
                alt="Adidas Store"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 ">
        <div className="bg1 text-white my-24 py-16 ">
          {/* Title Section */}
          <div className="w-[85%] m-auto">
            <div className=" mb-12 text-4xl w-[90%]">
              <h3 className="py-1 bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#5C5757]">
                Our Clients Are Our Superheroes. We Prioritize Delivering
                Excellent Products, Thorough Training, and Optimal Execution
              </h3>
            </div>

            {/* Client Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {clients.map((client, index) => (
                <div key={index}  className={`text-center ${index === 1 || index === 3 ? "mt-12" : ""}`}>
                  {/* Client Image */}

                  <img
                    src={client.image}
                    alt={client.name}
                    className="rounded-md object-cover w-full "
                  />

                  {/* Client Info */}
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{client.name}</h3>
                    <p className="text-sm">{client.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[85%] m-auto text-white">
          <h2 className="text-4xl max-w-3xl mb-8">
            Navigate the Digital Frontier with Our Engineering Excellence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#171717] border border-[#2B2B2B] p-6 rounded-md  transition-shadow"
              >
                <div className="text-2xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 w-[70%]">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
            {/* Blue Card */}
            <div className="bg-blue-600 relative  rounded-lg shadow-md  flex items-center justify-center">
              <img src="https://s3-alpha-sig.figma.com/img/ec3c/6c3a/2fc45e0b5ecea0d6f6fde9f4d5ed16ef?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h8zaB5HGP~crIpZRew2rOnzOpEjkc0CGxk02qB0~j4yjhPjSE3Jw1x0QixPNc~UHALJdHqwIHq4~Z8hHgt8Lh6A8kzNq4z9Eew6qyQzY1HcJvx4vvLvutuFKbqQWyk1~RaDVeBBT7~jZ7oJqSJigTd5GMFyhxfeeVN8Qgpn-kQucdL3GlcTGYB63HIgmMzE5ki7tiANeQmYcGKSWXZLzSNrFK6bz8UneZdsyE6-GyG55nLbAKdbtXOsbik-Ra2S289S4AN9lxD6eITmsBY0z~Cn56QQB7GeR9iQu7VDMWo64nJRqqBlHXLeQxGDq~cajGmpB6NVUbTJLR6wS81LgFA__" alt="" 
              className="w-full h-full object-cover"
              />
              <div className="absolute bg-white py-1.5 px-4 gap-3 rounded-md flex items-center justify-center">
              <span className="font-semibold text-black  ">Our Services </span>
              <BiSolidRightArrow className="text-black mt-1"/>
              </div>             
            </div>
          </div>
        </div>
      </div>

      <div className=" text-white flex lg:flex-row flex-col gap-5  py-10 w-[85%] m-auto">
        <div className="w-[50%]">
          <div>
            <h2 className="text-3xl md:text-4xl  mb-6">
              We Create New Solutions and Transform Existing Ones with
              Technologies That Beat Industry-Best Timelines
            </h2>
          </div>

          {/* Highlighted card */}
          <div className="bg-[#1B1B1B] rounded-lg p-6 md:p-6 shadow-lg w-11/12 md:w-3/4 flex flex-col  ">
            <div className="flex-shrink-0">
              <BsFillSendFill className="text-3xl"/>
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-semibold mb-2">
                Fuel Your Digital-First Idea
              </h2>
              <p className=" mb-4">With 1600+ Transformation Experts</p>
              <button className="px-4 py-2 mt-6 bg-[#0066FF] text-white rounded-md  hover:bg-blue-600 transition">
                Innovate With Us
              </button>
            </div>
          </div>
        </div>

        {/* Services list */}
        <div className="w-[50%] space-y-5">
          {services.map((service, index) => (
            <div key={index} className="flex justify-between border-[#2B2B2B]  pb-5 border-b">
              <div className="flex  gap-4">
                <div className="text-2xl mt-1">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-[#FFFFFF]/70 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
              <div>
                <MdArrowForwardIos  />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" text-white flex flex-col  justify-center px-4 w-[85%] m-auto  mt-8">
        <h1 className=" text-lg md:text-4xl w-[70%] mb-8">
          Our Partnerships Have Transformed How You Experience These Global
          Leaders
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-16 w-full  ">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-transparent"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Two sectio sliding pending */}

      <div className=" bg-black text-white my-24 w-full ">
      <div className="w-[90%] ml-auto">
        {/* Heading */}
        <div className="flex justify-between items-end  w-[95%]">
        <h1 className="text-2xl md:text-4xl  max-w-2xl">
          Our Growth Journey as a Mobile App Development Company Has Bagged a Few Reputed Accolades as Well
        </h1>
          <div className="flex gap-4">
            <button className="h-9 w-9 rounded-full border border-[#5B5B5B] flex items-center justify-center"
              onClick={prevSlide}
            >
            <FaArrowLeft />
            </button>
            <button className="h-9 w-9 rounded-full border border-[#5B5B5B] flex items-center justify-center"
             onClick={nextSlide}
            >
            <FaArrowRight />
            </button>
          </div>
        </div>
          

          {/* Cards */}
          {/* <div className="flex gap-4 w-ful"> */}
          <Slider {...settings} ref={sliderRef} className="mt-10 mr-3">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-[#171717] rounded-lg p-6 h-64 flex flex-col items-center justify-center w-full border border-[#343434] "
              >
                <div className=" flex flex-col items-center justify-between">
                <img
                  src={award.image}
                  alt={award.title}
                  className="mb-4 "
                />
                <div className="mt-2">
                <p className="text-sm text-gray-400 mb-2 text-center">{award.year}</p>
                <h3 className="text-base font-semibold text-center">
                  {award.title}
                </h3>
                </div>
                </div>
              </div>
            ))}
            </Slider>
          {/* </div> */}
        
      </div>
      </div>

    <PatnerShip/>

      <div className="w-[85%] m-auto">
        <div className=" text-white flex flex-col items-center justify-center px-6 py-12">
          {/* Heading */}
          <div className="w-full max-w-6xl flex justify-between items-center mb-10">
            <h1 className=" text-lg md:text-4xl w-[50%] ">
              A Unified Vision That Caters To Diverse Industry Demands
            </h1>
            <button className="bg-blue-600 text-white text-sm md:text-base py-2 px-4 rounded-md hover:bg-blue-700">
              Explore More in Industries
            </button>
          </div>

          {/* Industry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full ">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center  text-white p-6 rounded-md border border-[#2E2E2E]"
              >
                <div className="text-3xl mb-4">{industry.icon}</div>
                <p className="text-center text-sm md:text-base">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" text-white w-[85%] m-auto py-12">
        <h2 className="text-lg md:text-4xl w-1/2  mb-6">
        Tech Capabilities Driving Digital 
        Transformation for Our Clients
        </h2>
        <div className=" w-full  rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
          {/* Sidebar */}
          <div className="w-1/2 h-[32rem] bg-blue-600 p-6">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg cursor-pointer ${
                    item.active ? "bg-[#3C80FE] text-white" : "text-blue-200"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.active && <span>→</span>}
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Grid */}
          <div className="w-1/2 h-[32rem] bg-white p-12">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex py-3 px-12 items-center justify-between bg-[#F7F7F7]   rounded-lg  "
                >
                  <div className="flex items-center gap-10">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className=""
                  />
                  <p className="text-sm md:text-base font-medium text-black ">
                  {tech.name}
                  </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="bg-[#1B1B1B] w-full">
        <div className="py-6 w-[85%] m-auto flex justify-between items-center">
         <h4 className="text-4xl w-1/2">Strategic Partnerships to 
         Unlock Greater Business Value</h4>

         <div className="flex w-1/2 justify-between">
         <img src="/Asset/Aws.svg" alt="" className="h-14 object-contain" />
         <img src="/Asset/MongoDB.svg" alt="" className="h-14 object-contain" />
         <img src="/Asset/cload.svg" alt="" className="h-14 object-contain"/>
         <img src="/Asset/cloadnary.svg" alt="" className="h-14 object-contain"/>
         </div>
        </div>

      </div>

      <div className="bg2 flex items-center justify-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center  w-[85%] m-auto">
        {/* Left Content */}
        <div className="text-white max-w-sm">
          <h1 className="text-4xl font-semibold leading-tight">
            Our Technology Experts are Change Catalysts
          </h1>
          <p className="mt-4">
            Book a Free Consultation Call with Our Experts Today
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-[#0E0E1C] px-8 py-4 rounded-lg shadow-md">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full  py-3  text-white bg-[#0E0E1C] border-b border-[#3F3F41] focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-mail ID*"
              className="w-full py-3  text-white bg-[#0E0E1C] border-b border-[#3F3F41]   focus:outline-none "
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full py-3 bg-[#0E0E1C] border-b border-[#3F3F41] text-white focus:outline-none "
            />
            <select
              className="w-full  py-3 bg-[#0E0E1C] border-b border-[#3F3F41] text-white  focus:outline-none "
            >
              <option>Select a Budget Range</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>$10,000+</option>
            </select>
            <textarea
              placeholder="Project Description*"
              className="w-full  py-3  text-white bg-[#0E0E1C] border-b border-[#3F3F41] focus:outline-none "
              rows={2}
            ></textarea>

            <div className="flex items-center justify-between space-x-4">
              <label className="flex items-center text-white">
                <input
                  type="checkbox"
                  className="form-checkbox bg-gray-800 border-gray-700 "
                />
                <span className="ml-2 text-sm">Include Copy of a Non-Disclosure Agreement</span>
              </label>

              <div className="flex items-center space-x-4">
              <span className="text-white">5 + 4 =</span>
              <input
                type="text"
                placeholder="?"
                className="w-16 px-4 py-2 bg-[#0E0E1C] text-white rounded-lg border border-gray-700 focus:outline-none "
              />
            </div>

            </div>

           

            <button
              type="submit"
              className="w-full py-2 bg-[#383842] text-white font-semibold rounded-lg "
            >
              Request Proposal
            </button>
          </form>
        </div>
      </div>
    </div>

     
     <div className=" bg-white pb-16 ">
    <div className="w-[85%] m-auto ">
     
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center text-black py-14 ">
          Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="grid grid-cols-2 gap-5">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F1F2FD] p-11 rounded-lg "
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-800 font-medium">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-5 h-5 text-gray-600 transform ${
                    expandedIndex === index ? "rotate-180" : ""
                  } transition-transform`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </div>
              {/* Answer */}
              {expandedIndex === index && (
                <div className="mt-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
     
    </div>
    </div>

    <Footer/>

    </div>
  );
}
