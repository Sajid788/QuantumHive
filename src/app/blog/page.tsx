import BlogNavbar from "@/components/BlogNavbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { FiDownload } from "react-icons/fi";

interface BlogProps {
  category: string;
  title: string;
  description: string;
  author: string;
  image: string;
}

const blogData: BlogProps = {
  category: "Guides",
  title: "Mobile Application Development for Businesses – A Complete Guide",
  description:
    "In a digital age where the world is literally at our fingertips, mobile apps are more than just a growing trend, they are revolutionizing the...",
  author: "Saurabh Singh",
  image: "/placeholder-red.png",
};

interface BlogCardProps {
  category: string;
  title: string;
  description: string;
  author: string;
  image: string;
}

const blogDeta: BlogCardProps[] = [
  {
    category: "Guides",
    title: "How much does it cost to create an app in 2024? A detailed guide",
    description:
      "Ever heard of the phrase, 'there’s an app for everything'? Well, it’s true. According to...",
    author: "Saurabh Singh",
    image:
      "https://s3-alpha-sig.figma.com/img/acf8/f609/8793304cdb1aaf3be13096f31e1b6cb0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pC6pXBNV1O7uWCMMlYGDi~awkS1WyfCqcRAiVXTTU77I0O7GYWntaINhxzBtz9dgcxbd~tMUTWb8mtT3gvVGapO1hahpUAZ6Ff6~HRcoscBHPIwOoVNLfrkrYFbVpJygGq1UfBsxT6oQaYu8vXYoLFCPFPYY49j7vApw3Oga3lbhY6ywACXxcSHFyY0vCZAOlh8Xv0EWbLyx8W~nHSBDKifO1k6nD4KSKMS0KyigfbkzyX~~gK7wybuZtpFR6NPSjvtkXtXLjkwaSgZ4-HjbRtxEsmdYddu4nXG69bl4Rb-I1XuaqCr0oUKqljysnld17WrbF8JeD9XF1MyHPIH9~Q__", // Replace with actual image path
  },
  {
    category: "App Development",
    title:
      "How to Build an Minimal Viable Product (MVP) and Raise Funding in 2024",
    description:
      "Facebook, TikTok, Tinder, Uber, Instagram, Zoom, Spotify — today, all these big players are making...",
    author: "Prateek Saxena",
    image:
      "https://s3-alpha-sig.figma.com/img/7db2/dc10/bbed056af32f97242ea3debed02b45ad?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbEAAK12HQazKL7zeyV2hUCug2R6tcRhq8~R898Zqh1n2etwpbH5UzZOayvQnR8GjWvKpLdM0jtR2QoY8QsdUrMART7nadexjbXE3bGQgPzChXW4PJXt3cj1JnkJxGmDC6XQc7lcMsr4EQ1JORBnM5q60kZf2GRBu14Qr~JjLrqZjfGgeQeG7F7ithrqmISSm9ZddlkzM77ZSFXX4WUz-JJuSIg7lbPfliSZ4FOv6vT3S0dlEkkiDyIalRx1vnOO9KzvxRDO1YcLKKeNxPD-MFU0YDx7TeDojJq6tZL-s89ZHYL~W1FouhspIR71uct6QhxWZ-gNubW41cbS1ojpAA__", // Replace with actual image path
  },
  {
    category: "App Development",
    title: "How Long Does It Take to Develop a Mobile App?",
    description:
      "Once you have an app idea, a lot many thoughts occupy your mind—various questions begin to...",
    author: "Saurabh Singh",
    image:
      "https://s3-alpha-sig.figma.com/img/ee18/3bcd/6f70571613d28d10aa93a70c81cb2371?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AP-8KxAqTb1kLFtzZQGjPqpEBPCIQ9yrh4J-fvWko8Phm2x~UAoNbjyxrdfng97GmEzclQsjuPDG8ZZKv0L2aUE5lSekkoTnPn9irurkIV7KqU2Pt3KvXrBJ6MT2kZ63vpGokUpEFg-Z2g6CoYhzAqzjjNrPtEvULAr8sDpsoG3vQePvYLy5SaByJXt0VvOZvvbg50ZWCvRnP1dgbSJvhui5IGgEJnVuSHUUSPA~jW5Ub9gmHoMGf9fstZNADVLEQOGNw20LZG-G7M~7KBGQtEKfP~mAhVeAmhF7yR8A8OxRR40Gczl7Ha4Zo5TiGFYUKFZTHkg-pa50RTL-O5cjTg__", // Replace with actual image path
  },
];

const backgroundColors = ["bg-[#4B5EE8]", "bg-[#EC5B56]", "bg-[#FFF8E0]"];

interface Article {
  id: number;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    category: "Artificial Intelligence",
    title:
      "AI in Dentistry – Key Benefits, Real World Applications and Examples",
    description:
      "Imagine a dental practice where efficiency meets precision and operational workflows.",
    author: "Chirag Bhavsar",
    date: "25 Oct 2024",
    image:
      "https://s3-alpha-sig.figma.com/img/134b/9141/50525cbdc820fc1c39d3b89ce691a612?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqzsLqzXvxZSvJLcfwCZEHalz~sHn9fSWFZmezm4liYbaaue8k4xY9Kn~tL85gAunIUQK9zcyRyoSKJicRcEq~cmvNdGhsmNTliXcDs3F2s16YDBlH0nV3b4wtHXOBfEDOXx-hn6z9Y8opFSShyOopFHOsuAQUAKnP2F3YGnntOo~T3jzjjRzuE9XY3tuHLrSJduaT6m3Ll34jZ8B5xm01OtH9vLoUIegnqkWCsH-NSx7yKQZdUL6n8HMR5YkjvSmTMEcNddH8yvGgvwV7xBKlMsnmWRbIVz~wBDea2Ho4y01v55oT5-60cpuYoPZ4wsZt2SHhFQqHes6rosHK5~Pw__",
  },
  {
    id: 2,
    category: "Digital Transformation",
    title:
      "Exploring the Impact of Digital Transformation on the Pharma Industry",
    description:
      "Digital transformation today is shaking things up in the pharmaceutical world.",
    author: "Deepak Koshir",
    date: "25 Oct 2024",
    image:
      "https://s3-alpha-sig.figma.com/img/72b5/af7c/edf618c948d968615c1d38a83d021139?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ON6kySaxN6Nw7v1DAyyAOji2YjLhddMz6~9BNwissUVrrGhhF6G7vVNLxaZRJ8BS1M~cmnUKbsAf~3Rxj92Xz9qwRc-ioh4M9mEgQkHPFCHv1eYG~kpMpo4~mqlTYEYNAgJeHYO1BdR06m2YmXcWkamO~URugIAJ9CkZTgDt0BQGsekIEKTHzTa5uDmcg~D3MgEdV6A2Myrk3wkKotsyuDqw5wfnTeDIh10jxnm~f~IJG8J5-C4XTc4zxy8oJ75jDj1vNqQzZx5zbygcXv7a~6wt7lodpBaSKwnqfJMo-puoZp93rs5ikjngXX9KmiaRxz67pzfqg8sBan~4LShpyg__",
  },
  {
    id: 1,
    category: "Artificial Intelligence",
    title:
      "AI in Dentistry – Key Benefits, Real World Applications and Examples",
    description:
      "Imagine a dental practice where efficiency meets precision and operational workflows.",
    author: "Chirag Bhavsar",
    date: "25 Oct 2024",
    image:
      "https://s3-alpha-sig.figma.com/img/134b/9141/50525cbdc820fc1c39d3b89ce691a612?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqzsLqzXvxZSvJLcfwCZEHalz~sHn9fSWFZmezm4liYbaaue8k4xY9Kn~tL85gAunIUQK9zcyRyoSKJicRcEq~cmvNdGhsmNTliXcDs3F2s16YDBlH0nV3b4wtHXOBfEDOXx-hn6z9Y8opFSShyOopFHOsuAQUAKnP2F3YGnntOo~T3jzjjRzuE9XY3tuHLrSJduaT6m3Ll34jZ8B5xm01OtH9vLoUIegnqkWCsH-NSx7yKQZdUL6n8HMR5YkjvSmTMEcNddH8yvGgvwV7xBKlMsnmWRbIVz~wBDea2Ho4y01v55oT5-60cpuYoPZ4wsZt2SHhFQqHes6rosHK5~Pw__",
  },
  {
    id: 2,
    category: "Digital Transformation",
    title:
      "Exploring the Impact of Digital Transformation on the Pharma Industry",
    description:
      "Digital transformation today is shaking things up in the pharmaceutical world.",
    author: "Deepak Koshir",
    date: "25 Oct 2024",
    image:
      "https://s3-alpha-sig.figma.com/img/72b5/af7c/edf618c948d968615c1d38a83d021139?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ON6kySaxN6Nw7v1DAyyAOji2YjLhddMz6~9BNwissUVrrGhhF6G7vVNLxaZRJ8BS1M~cmnUKbsAf~3Rxj92Xz9qwRc-ioh4M9mEgQkHPFCHv1eYG~kpMpo4~mqlTYEYNAgJeHYO1BdR06m2YmXcWkamO~URugIAJ9CkZTgDt0BQGsekIEKTHzTa5uDmcg~D3MgEdV6A2Myrk3wkKotsyuDqw5wfnTeDIh10jxnm~f~IJG8J5-C4XTc4zxy8oJ75jDj1vNqQzZx5zbygcXv7a~6wt7lodpBaSKwnqfJMo-puoZp93rs5ikjngXX9KmiaRxz67pzfqg8sBan~4LShpyg__",
  },
  {
    id: 1,
    category: "Artificial Intelligence",
    title:
      "AI in Dentistry – Key Benefits, Real World Applications and Examples",
    description:
      "Imagine a dental practice where efficiency meets precision and operational workflows.",
    author: "Chirag Bhavsar",
    date: "25 Oct 2024",
    image:
      "https://s3-alpha-sig.figma.com/img/134b/9141/50525cbdc820fc1c39d3b89ce691a612?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqzsLqzXvxZSvJLcfwCZEHalz~sHn9fSWFZmezm4liYbaaue8k4xY9Kn~tL85gAunIUQK9zcyRyoSKJicRcEq~cmvNdGhsmNTliXcDs3F2s16YDBlH0nV3b4wtHXOBfEDOXx-hn6z9Y8opFSShyOopFHOsuAQUAKnP2F3YGnntOo~T3jzjjRzuE9XY3tuHLrSJduaT6m3Ll34jZ8B5xm01OtH9vLoUIegnqkWCsH-NSx7yKQZdUL6n8HMR5YkjvSmTMEcNddH8yvGgvwV7xBKlMsnmWRbIVz~wBDea2Ho4y01v55oT5-60cpuYoPZ4wsZt2SHhFQqHes6rosHK5~Pw__",
  },
  {
    id: 2,
    category: "Digital Transformation",
    title:
      "Exploring the Impact of Digital Transformation on the Pharma Industry",
    description:
      "Digital transformation today is shaking things up in the pharmaceutical world.",
    author: "Deepak Koshir",
    date: "25 Oct 2024",
    image:
      "https://s3-alpha-sig.figma.com/img/72b5/af7c/edf618c948d968615c1d38a83d021139?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ON6kySaxN6Nw7v1DAyyAOji2YjLhddMz6~9BNwissUVrrGhhF6G7vVNLxaZRJ8BS1M~cmnUKbsAf~3Rxj92Xz9qwRc-ioh4M9mEgQkHPFCHv1eYG~kpMpo4~mqlTYEYNAgJeHYO1BdR06m2YmXcWkamO~URugIAJ9CkZTgDt0BQGsekIEKTHzTa5uDmcg~D3MgEdV6A2Myrk3wkKotsyuDqw5wfnTeDIh10jxnm~f~IJG8J5-C4XTc4zxy8oJ75jDj1vNqQzZx5zbygcXv7a~6wt7lodpBaSKwnqfJMo-puoZp93rs5ikjngXX9KmiaRxz67pzfqg8sBan~4LShpyg__",
  },
];

const categories = [
  "Healthcare & Fitness",
  "Digital Transformation",
  "Restaurant App Development",
  "Education",
  "IoT Development",
  "React Native Development",
  "Data Science & Analytics",
  "Cloud Computing",
  "Android Development",
  "Fintech",
];

const tabs = ["Android", "IOS", "React Native", "Flutter", "App Design"];

const article = [
  {
    title: "Mobile Application Development for Businesses – A Complete Guide",
    category: "Guides",
    author: "Swarath Singh",
    image: "https://via.placeholder.com/150",
    main: true,
  },
  {
    title: "How Much Does Android App Development Cost?",
    category: "Android Development",
    author: "Aarav",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "10 Tips to Hire Android App Developers",
    category: "Android Apps",
    author: "Swarath",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Enterprise Android App Development: Why you need it?",
    category: "Enterprise",
    author: "Swarath",
    image: "https://via.placeholder.com/150",
  },
];

type CardData = {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  author: string;
};

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/eadd/b00b/9455a9cfa985f9f2004c8c2cc204ab9c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZOk6t252Hg5OithoHY-gS7TYe76S14DfehsylxH7R7RXZx244yA024FU3z~cE9QYCi~E~ySqjLAvWVewte9zu5kifPu1vV31TKyBxaBElXiQPTNCUcMvIWzFiIAYpBf4f~oENrs-zhoyByA~XZC2-D5qobwZlXnHQ78vgz09WQFPl~VVZqs6~zW9zrtIgCivb7HiQdI6-fBPdvlS-EgXFruQaGbRa1wdxPtkcS8XdmyBC6-O-0uyvZobcM8iiezX0gEKR70Dux2MwZR7lH6sWxgBDuN00R1A9k2e7SsX7RNEFnVEqx8ez8EwsB5zVajWK5PqVc-dzrqftHKuIrlnA__",
    category: "Android Development",
    title: "How Much Does Android App Development Cost?",
    author: "Avinash",
  },
  {
    id: 2,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/a720/74f2/6ec5bce641a35bc493427762c3f64bc4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSQ9S8AdcpSWkPCd7twJu~53ENDWjcz6ry41yiM0dKnznlwwpFQskwe~xGClFrVdPIkfW~wl1Pj-kbAU3pMx4Amz8-ylJa1C33wDQIbx3SldtHBqivreRl3VWfaHssVOlxAyXQj4H0DAcMdJFfYFNh2hGcUFa4hWk-wg9HRfG78uSQHbKx~NcAkr7Tuwx7NJNRAQuBatcC~uzsMae1XuD2Yat7VFsoF9yx8efZeDwBla4E6Z~UKJxxR8tb6QxQMAb0jES8d0VCL3-nz15JXE-nL0t1ir8EvUBqnEkD27Kquv-rbtx7SeeGID~BgcNpJkr-GaXK95p8h5ieVkmsDhrA__",
    category: "Web Development",
    title: "The Future of Web Applications in 2024",
    author: "John Doe",
  },
  {
    id: 3,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8ddd/3c58/26d1ca1bdfe8ecabf3eb5ac0c7e41116?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qpawCcL3JR4CHZMqKZNdz6KGF9NXhpbeFeg9VzcB9VAtr4Ux39h9q1UK6AEx3zJ42WJLo9SEpywvoHpdEvN-bb4b1iZrt8mo9qO8uDS-WwRIKzKVi7VWg1En2Nm5-oUnTaWxeO39NmjwllGgey~r-2~0z~1JG1llqVKx~tLU-Snv5VLFXHVPUnZiwG3DdNlUzMb-3~CnQnr9RSM2mOaSZFIHxga2VwR~fv0jY~Q~eskulypKvNu7vBGnqZdimqDRFYDcKoPAa0W7fET7WTAul80Zmm~Zl0JPeTScuQVfUUBy33i91qf3PWaqvh6nVxHO4eCAgWYDW7cPxgDrZ1HFIQ__",
    category: "UI/UX Design",
    title: "Design Principles for a Modern Interface",
    author: "Jane Smith",
  },
];



const tab = ["Data Science & Analytics", "Digital Transformation", "Business Intelligence", "AI-ML", "AR/VR Development"];

const cardDeta: CardData[] = [
  {
    id: 1,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/eadd/b00b/9455a9cfa985f9f2004c8c2cc204ab9c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZOk6t252Hg5OithoHY-gS7TYe76S14DfehsylxH7R7RXZx244yA024FU3z~cE9QYCi~E~ySqjLAvWVewte9zu5kifPu1vV31TKyBxaBElXiQPTNCUcMvIWzFiIAYpBf4f~oENrs-zhoyByA~XZC2-D5qobwZlXnHQ78vgz09WQFPl~VVZqs6~zW9zrtIgCivb7HiQdI6-fBPdvlS-EgXFruQaGbRa1wdxPtkcS8XdmyBC6-O-0uyvZobcM8iiezX0gEKR70Dux2MwZR7lH6sWxgBDuN00R1A9k2e7SsX7RNEFnVEqx8ez8EwsB5zVajWK5PqVc-dzrqftHKuIrlnA__",
    category: "Android Development",
    title: "How Much Does Android App Development Cost?",
    author: "Avinash",
  },
  {
    id: 2,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/a720/74f2/6ec5bce641a35bc493427762c3f64bc4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSQ9S8AdcpSWkPCd7twJu~53ENDWjcz6ry41yiM0dKnznlwwpFQskwe~xGClFrVdPIkfW~wl1Pj-kbAU3pMx4Amz8-ylJa1C33wDQIbx3SldtHBqivreRl3VWfaHssVOlxAyXQj4H0DAcMdJFfYFNh2hGcUFa4hWk-wg9HRfG78uSQHbKx~NcAkr7Tuwx7NJNRAQuBatcC~uzsMae1XuD2Yat7VFsoF9yx8efZeDwBla4E6Z~UKJxxR8tb6QxQMAb0jES8d0VCL3-nz15JXE-nL0t1ir8EvUBqnEkD27Kquv-rbtx7SeeGID~BgcNpJkr-GaXK95p8h5ieVkmsDhrA__",
    category: "Web Development",
    title: "The Future of Web Applications in 2024",
    author: "John Doe",
  },
  {
    id: 3,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8ddd/3c58/26d1ca1bdfe8ecabf3eb5ac0c7e41116?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qpawCcL3JR4CHZMqKZNdz6KGF9NXhpbeFeg9VzcB9VAtr4Ux39h9q1UK6AEx3zJ42WJLo9SEpywvoHpdEvN-bb4b1iZrt8mo9qO8uDS-WwRIKzKVi7VWg1En2Nm5-oUnTaWxeO39NmjwllGgey~r-2~0z~1JG1llqVKx~tLU-Snv5VLFXHVPUnZiwG3DdNlUzMb-3~CnQnr9RSM2mOaSZFIHxga2VwR~fv0jY~Q~eskulypKvNu7vBGnqZdimqDRFYDcKoPAa0W7fET7WTAul80Zmm~Zl0JPeTScuQVfUUBy33i91qf3PWaqvh6nVxHO4eCAgWYDW7cPxgDrZ1HFIQ__",
    category: "UI/UX Design",
    title: "Design Principles for a Modern Interface",
    author: "Jane Smith",
  },
];

const categorie = [
  "App Development",
  "Software Dev",
  "Blockchain",
  "Cloud",
  "Business Intelligence",
  "Data Analytics",
  "Artificial Intelligence",
]

const MainBlog: React.FC = () => {
  return (
    <div className="bg-white ">
     <BlogNavbar/>
 
     <nav className="flex items-center justify-between w-[85%] m-auto py-4 border-gray-200">
      {/* Categories */}
      <ul className="flex items-center gap-8 text-gray-700 text-sm">
        {categorie.map((category, index) => (
          <li key={index} className="hover:text-black cursor-pointer font-semibold">
            {category}
          </li>
        ))}
      </ul>

      {/* Search */}
      <div className="flex items-center gap-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700 hover:text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        {/* <span className="text-gray-700 text-sm hover:text-black">Search</span> */}
        <input type="text" placeholder="Search" className="focus:outline-none text-black" />
      </div>
    </nav>


      <section className="mt-10 bg-white">
        <div className="w-[85%] m-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="bg-red-400 rounded-lg  w-full h-72 ">
            {/* <img
            src={blogData.image}
            alt={blogData.title}
            className="w-full h-full object-cover rounded-lg"
          /> */}
          </div>

          {/* Text Section */}
          <div className="flex flex-col ">
            <p className="text-sm text-gray-500 mb-2">{blogData.category}</p>
            <h1 className="text-2xl md:text-4xl text-[#001D33] mb-4 leading-tight">
              {blogData.title}
            </h1>
            <p className="text-gray-600  mb-6">{blogData.description}</p>
            <p className="text-sm text-gray-500">By {blogData.author}</p>
          </div>
        </div>
      </section>

      <section className="bg-white mt-16 ">
        <div className="w-[85%] m-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogDeta.map((blog, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden ">
                <p className="text-sm text-gray-700 mb-2 font-semibold">
                  {blog.category}
                </p>
                <div
                  className={`h-48 rounded-lg ${
                    backgroundColors[index % backgroundColors.length]
                  }`}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mt-2 mb-3">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {blog.description}
                  </p>
                  <p className="text-sm text-gray-500">By {blog.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className=" py-10 bg-white">
        <div className="w-[85%] m-auto">
          <h1 className="text-3xl font-bold mb-8 text-black">Latest</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Section: Articles */}
            <div className="lg:col-span-2">
              {articles.map((article, index) => (
                <div
                  key={article.id}
                  className="flex items-start space-x-10 mb-8 bg-white  rounded-lg"
                >
                  {/* Image Section */}
                  <div
                    className={`w-80 h-52 flex-shrink-0 rounded-lg bg-blue-${
                      (index % 4) * 100 + 100
                    } flex items-center justify-center`}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="mt-3">
                    <p className="text-sm text-gray-500 mb-2">
                      {article.category}
                    </p>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-2 mt-2">
                      {article.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      By {article.author} · {article.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Section: Categories */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-black">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="bg-blue-600 text-white pt-10 w-[85%] m-auto">
          <div className=" flex flex-col lg:flex-row  justify-evenly">
            {/* Left Section - Image */}
            <div className="mb-6 flex justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/930b/6fd9/7e284bfed00d87ac730c487b26b4f804?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cuMM23CdmQLjEAVjQZ1K5WIOjdcGK5LIhq7OVoUq7w~zwUq9qhhLUjDtT6QVtUzezASl-D5CZFk2MX6ao5PIQazR2pXJYLN2H2p~fdvZinIRgvTGVdOjwsLJqKQTGnHODgf150AmcIQviL21zANbvw-dd79JnRoeNFln5NPdw8yMOKj6evpikjj97LB73rWP672IdnaopZVzzi0AtfuR6buvqclEqJDVLViNgjmM4rwJDxwqSfwNTEzo6uiVheqHfyGFlaIG4ip7f3C7FgWCVDqVhwsLHyRLNVZqMTIo4Y2ddykxvJD3R58yXPnm2nbqlQXUbTxih-ukxUxfbaDjNw__"
                alt="Newsletter Illustration"
                className="w-full h-72 object-contain"
              />
            </div>

            {/* Right Section - Text and Input */}
            <div className="lg:w-1/2">
              <div className="max-w-sm">
                <h3 className="text-xl max-w-xs font-light uppercase mb-2">
                  Subscribe Our <br /> Newsletter
                </h3>
                <h2 className="text-3xl font-semibold mb-4">
                  Get stories in your inbox twice a month.
                </h2>
                <form className="flex items-center">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 mt-3 px-4 py-2 rounded-l-lg border-none focus:ring-2 focus:ring-blue-300 outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-red-500 mt-3 hover:bg-red-600 text-white px-6 py-2 rounded-r-lg font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white mt-20">
        <div className="w-[85%] m-auto ">
          {/* Header */}
          <h1 className="text-2xl md:text-4xl font-bold mb-4  text-black">
            Mobile App Development
          </h1>

          {/* Tabs */}
          <div className="flex space-x-6 border-gray-200 pb-2 pt-3 mb-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`text-sm md:text-base font-medium ${
                  index === 0
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex gap-8">
            <div className="w-[30%]">
              <img
                src="https://s3-alpha-sig.figma.com/img/000a/55d2/57a5d00138d613eb98622f1d9fcdc263?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H76ah2MoejaF0Y6rTdTCcEM~utVmETNOXSo2X01vf2neWzDYEM1WXfhTcvO8Ekc9H3L0USC1JYAxEpl9Jb3lSAhd6-Ju5PXPDcYjHiVj2im8~Y8p3a~u5IN4-~siIOaUKfDzRohPTlvwGDYExKNjhGd2gW4fydvXOgHORgbSqltmZCtVk70u43v2GD82-4~MhA7T3MzSvOj3KNitfzh8V59-RRpJoG~gesE8RN54rdsOgsqTFK9Q7YOX0HuxX6fFdI6LDM~hspHwXN6MgkmyxdhkXikwRUmrEqGaIlb57eKS5CiLDtWzA2mJBdQndT6x26fI6Q3ZB2CsFbyv4tSMAA__"
                alt=""
                className="w-full h-60  rounded-lg"
              />
              <p className="mt-2 text-black">Guides</p>

              <h2 className="text-2xl text-black mt-2">
                Mobile Application Development for Businesses - A Complete Guide
              </h2>
              <p className="text-black mt-2">
                In a digital age where the world is literally at our fingertips,
                mobile apps are more than just{" "}
              </p>
            </div>

            <div className="w-[45%] flex flex-col gap-8 my-5">
              {cardData.map((card) => (
                <div key={card.id} className=" flex gap-4 self-start pb-8 ">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-72 h-36 rounded-lg"
                  />
                  <div className="flex flex-col justify-center gap-3">
                    <p className="text-sm text-black font-semibold">
                      {card.category}
                    </p>
                    <h2 className="text-black text-lg leading-6 font-semibold">
                      {card.title}
                    </h2>
                    <p className="text-black">{card.author}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[25%]">
              <div className=" w-full  bg-[#EC5932]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/bd9f/2e66/69151076c6d322a46c74cbf39835582d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhjwGQ71LqstjEikfYuAjdvh9uisksEwiZ1q8x66z3zHkcAVkaUf8AsBBzCMp3tViyrli5oUR3VsvNCtcylt6dX56L35i0dkY1M1tTlIJf0cv5ltIVsjXhuhbc6eIYAjR-DFF7g-qDQC2jwpnv4LL-YnIGyzvG-Y5Or9kr1rgOACCShkO1mHM6uC9M1dIHDkOHneSKs9ooX0il2epEaS71E6EvKkvOlP53ViK5s5z7CB7lt85ZHZbT33L~mxH9mTiOr~ldy5-qxrqTI~6iNqpa~U-Z3Vp15T0n8VUBkYI36ZRMCrVTah0xKrfuGkm-qxSwFRXnah1DQbutDTJn5k8A__"
                  alt=""
                  className=" pb-8 "
                />
                <div className="bg-[#FC7754] py-4 px-6 -mt-1">
                  <h3 className="text-2xl mt-5">
                    From an amazing idea to an amazing app that the world{" "}
                  </h3>
                  <p className="mt-8">
                    Learn the secret to how to enter the world of mobile apps
                    with strategic planning and the right outsourcing team.
                  </p>
                  <button className="px-4 py-1.5 rounded w-[80%] bg-white text-black mt-6 flex gap-3 items-center">
                    Download now
                    <FiDownload />
                  </button>
                </div>
              </div>
            </div>

          </div>

          


        </div>
      </div>


      <div className=" bg-white mt-20">
        <div className="w-[85%] m-auto ">
          {/* Header */}
          <h1 className="text-2xl md:text-4xl font-bold mb-4  text-black">
          Enterprise Software development
          </h1>

          {/* Tabs */}
          <div className="flex space-x-6 border-gray-200 pb-2 pt-3 mb-6">
            {tab.map((tab, index) => (
              <button
                key={index}
                className={`text-sm md:text-base font-medium ${
                  index === 0
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex gap-8">
            <div className="w-[30%]">
              <img
                src="/Asset/blog.png"
                alt=""
                className="w-full h-60  rounded-lg"
              />
              <p className="mt-2 text-black">Guides</p>

              <h2 className="text-2xl text-black mt-2">
                Mobile Application Development for Businesses - A Complete Guide
              </h2>
              <p className="text-black mt-2">
                In a digital age where the world is literally at our fingertips,
                mobile apps are more than just{" "}
              </p>
            </div>

            <div className="w-[45%] flex flex-col gap-8 my-5">
              {cardDeta.map((card) => (
                <div key={card.id} className=" flex gap-4 self-start pb-8 ">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-72 h-36 rounded-lg"
                  />
                  <div className="flex flex-col justify-center gap-3">
                    <p className="text-sm text-black font-semibold">
                      {card.category}
                    </p>
                    <h2 className="text-black text-lg leading-6 font-semibold">
                      {card.title}
                    </h2>
                    <p className="text-black">{card.author}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[25%]">
              <div className=" w-full  bg-[#0066FF]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/c37e/92d5/545062ce83402ec5392f143eda00cd7c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LYg-gGzPUROl1EXIMSC4ES0X87IoI~ml9Iuxyn8fBCKhDgaN2WKzv~CsTUCKlR2sVzTq09yV-lTVFrmHq1WBjKHkv94OwFwabsTDJItlBpEiieP3S-KxdSgPLmndSPzFaywrgPy-UESfaUiuGzdodrlW4nIy31oTbW11Zdqjg~Nl4YkUaJV6LnO1n9mfXtIvnyw3h0pEGzJexAZQCme6VSoSRaaUmbxDomdleNEcT9e0dDw3xKME2rkV0N7~Eg5tMqcWbxxsS687q0CkJufvURDz6JHxz1NoBkmPbjQdeKM9h3iYQBKg8EuV7tm-8t-mzkqyCL6gOYdAbjS2poUpLA__"
                  alt=""
                  className=" pb-8 "
                />
                <div className="bg-[#0092FF] py-4 px-6 -mt-1">
                  <h3 className="text-2xl mt-5">
                  How to become a successful app entrepreneur
                  </h3>
                  <p className="mt-8">
                  Learn more about how to take the journey of transition from being a full time employee to an 
                  </p>
                  <button className="px-4 py-1.5 rounded w-[80%] bg-white text-black mt-6 flex gap-3 items-center">
                    Download now
                    <FiDownload />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
       

      <div className="bg-white mb-16">
        <div className="bg-[#242F6F] text-white pt-10 w-[85%] m-auto">
          <div className=" flex flex-col lg:flex-row  justify-evenly">
           

            {/* left Section - Text and Input */}
            <div className="lg:w-1/2">
              <div className="max-w-sm">
                
                <h2 className="text-2xl font-semibold mb-4">
                We build digital products that help you unlock opportunities and embrace innovation.
                </h2>
               <button className="py-3 px-5 bg-[#FC5F36] mt-5">Let's discuss your project</button>
              </div>
            </div>

           {/* right Section - Image */}
           <div className="mb-6 flex justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/a155/3771/f56755734dbca8a9dfe2bae4b318021e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfbOBOxFHlD3XS4EWwMFhPUVBCBbN5NA8~9c9vQVmlmttQ-3CF4TB2VeDlCmiECsc3LlnBJLsNBCg-aSxZW~E2oIH9MXodDF5X6BWV7MSJFWDMkjg6k9m65SbibrmqhziqiTRnaEHRgYTYsy-2Vst~ZOyKu9Tt8CUhX6ZzmTxUkFiZMgzEcp2AbuL0rDvCDHO0-IF33h8WTdonFIy-NjmIQ4q6E3bXsSOn9UKdZEG08o7ro3SJzjlRPj8fnn44un5nCurHCojDxNLLQnxE8nxh8vq3ONxFpPAtVkuaDwG054nisbQU6J~BRGGk2xsXVTmqY28VzGcOk73mbBXPT59A__"
                alt="Newsletter Illustration"
                className="w-full h-52 object-contain"
              />
            </div>

          </div>
        </div>
      </div>

      <Footer/>

    </div>
  );
};

export default MainBlog;
