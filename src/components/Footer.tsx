import React from 'react'

interface Location {
    name: string;
    address: string;
    imageSrc: string;
  }
  
  const locations: Location[] = [
    {
      name: "HQ INDIA",
      address: "B-25, Sector 58, Noida - 201301, Delhi - NCR, India",
      imageSrc: "/Asset/India.svg", 
    },
    {
      name: "USA",
      address: "79, Madison Ave Manhattan, NY 10001, USA",
      imageSrc: "/Asset/USA.svg", 
    },
    {
      name: "Australia",
      address: "Appinventiv Australia, East Brisbane, QLD 4169, Australia",
      imageSrc: "/Asset/Australia.svg", 
    },
    {
      name: "UK",
      address: "3rd Floor, 86-90 Paul Street EC2A 4NE London, UK",
      imageSrc: "/Asset/UK.svg", 
    },
    {
      name: "UAE",
      address:
        "Tiger Al Yarmook Building, 13th Floor F-Block Al Nahda St - Sharjah",
      imageSrc: "/Asset/UAE.svg", 
    },
    {
      name: "CANADA",
      address: "Suite 3810, Bankers Hall West, 888 - 3rd Street SW Calgary Alberta",
      imageSrc: "/Asset/CANADA.svg", 
    },
  ];

const Footer = () => {
  return (
    <div className=''>

    <div className='bg3 py-20'>
      <div className='w-[80%] m-auto'>
        <div className='flex justify-between'>
            <h2 className='uppercase text-2xl font-semibold'>QuantumHive</h2>
            <div className='py-2 px-6 bg-[#24246A]'>
                <p>Most trusted Mobile App Consulting Company on Clutch</p>
            </div>
        </div>

      </div>

      <div className=" text-white pt-12 w-[85%] m-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        {locations.map((location, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center space-y-4"
          >
            {/* Location Image/Icon */}
            <img
              src={location.imageSrc}
              alt={location.name}
              className="w-28 h-24 object-contain"
            />

            {/* Location Name */}
            <h3 className="text-lg font-semibold">{location.name}</h3>

            {/* Location Address */}
            <p className="text-sm leading-relaxed">{location.address}</p>
          </div>
        ))}
      </div>
    </div>


    </div>
    <footer className="bg-[#1D1D25] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-8">
        {/* About */}
        <div>
          <h3 className="font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li>Our company</li>
            <li>Core Team</li>
            <li>
              Career <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">We’re Hiring</span>
            </li>
            <li>CSR</li>
            <li>How We Work</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>iOS App Development</li>
            <li>Android App Development</li>
            <li>Software Development</li>
            <li>Ideation & Design</li>
            <li>Mobile App Dev</li>
            <li>Research & Innovation</li>
            <li>Digital Transformation</li>
            <li>more...</li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="font-semibold mb-4">Technologies</h3>
          <ul className="space-y-2">
            <li>Blockchain</li>
            <li>Artificial Intelligence</li>
            <li>AR and VR</li>
            <li>Cloud Computing</li>
            <li>Internet of Things</li>
            <li>Metaverse Development</li>
            <li>NFT Development</li>
            <li>more...</li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="font-semibold mb-4">Industries</h3>
          <ul className="space-y-2">
            <li>Healthcare</li>
            <li>Education</li>
            <li>SaaS</li>
            <li>Finance</li>
            <li>On-Demand</li>
            <li>eCommerce</li>
            <li>Logistics</li>
            <li>more...</li>
          </ul>
        </div>

        {/* Portfolio */}
        <div>
          <h3 className="font-semibold mb-4">Portfolio</h3>
          <ul className="space-y-2">
            <li>KFC</li>
            <li>Adidas</li>
            <li>IKEA</li>
            <li>Hukoomi</li>
            <li>Domino’s</li>
            <li>Pizza Hut</li>
            <li>YouCOMM</li>
            <li>more...</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Press Release</li>
            <li>Guides</li>
            <li>Ebooks</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <span className="mr-4">
              <img src="/dmca.png" alt="DMCA Protected" className="inline h-6" />
            </span>
            Full stack mobile (iOS, Android) and web app design and development agency
          </div>
          <div className="mt-4 md:mt-0">
            2024-2025 © AppInventiv | <a href="#" className="hover:text-white">SiteMap</a> | <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
