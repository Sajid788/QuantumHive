import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

type Logo = {
  name: string;
  image: string;
};

const logos: Logo[] = [
  { name: "IKEA", image: "/Asset/Ikea.png" },
  { name: "Google", image: "/Asset/Google.png" },
  { name: "BCG", image: "/Asset/Bcg.png" },
  { name: "KFC", image: "/Asset/Kfc.png" },
  { name: "TGI Fridays", image: "/Asset/Tgi.png" },
  { name: "Moo", image: "/Asset/Ikea.png" },
  { name: "Krispy Kreme", image: "/Asset/Google.png" },
  { name: "Hardees", image: "/Asset/Bcg.png" },
  { name: "Bajaj Allianz", image: "/Asset/Tgi.png" },
  { name: "Domino's", image: "/Asset/Ikea.png" },
  { name: "SuperShe", image: "/Asset/Google.png" },
  { name: "Wimpy", image: "/Asset/Bcg.png" },
  { name: "Empire Hotels", image: "/Asset/Kfc.png" },
  { name: "JobGet", image: "/Asset/Tgi.png" },
  { name: "Asian Bank", image: "/Asset/Ikea.png" },
];

const page = () => {
  return (
    <div>
        <Navbar/>
      <div className="w-[85%] m-auto">
        <div className="bg-black text-white  flex flex-col justify-center items-center">
          {/* Top Section */}
          <div className="text-center px-4 md:px-8">
            <div className="relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/47b1/e20f/0c2fb5dc72bcbe43ca352829b4501d55?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mP4eb1IMg8oRbrPgGmitisJ3PXkdO2dvDwQ5MNUbTxBICZ65oCzLpx~uhYTNWovlM5ieqLKo1wPHwCbIRqUMsOLya-1fCVFcO9mr6zxw9ad1neUfzCNJXzPSoQbD3pxmWvvqwQyEI-45nWrWj1xdpMTgfkDjdc6i796pXImWTdy-eBm0mMrItwVjwfKvQT1-Ikw9iLMNsCTUWnmx35Ap~yuvmsKUi8d5anCUKKDJZyt5tot~4SvssyBw59z-DLluLYfPTNKFrK11rvwR07Uu8o2KZm8VaUeKf1WFsn0LSkYshem5oY~w4OG3oYxBj3ylaDUwrK94kLTv9zKjsdby0A__" // Replace with your image path
                alt="Background Image"
                className="w-full max-w-3xl mx-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center">
                <h1 className="text-2xl md:text-5xl  ">
                  Meet The Vision Of{" "}
                  <span className="font-bold">1600 Humans</span> Whose Action
                  Built{" "}
                  <span className="font-bold">3000+ Digital Masterpieces</span>
                </h1>
              </div>
            </div>
            <p className="mt-20 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto bg-gradient-to-r from-[#FFFFFF] to-[#404040] bg-clip-text text-transparent">
              We are a group of agile thinkers who grew from the ground base of
              just 5 enthusiastic problem solvers in 2015 to a team of 1600+
              tech experts matching the top industry skills, qualifications, and
              experiences. Every solution offered to our clients, thus, is
              backed by strong factors that enable seamless business growth.
            </p>
          </div>

          {/* Bottom Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full">
            <div className=" text-black bg-[#F0DEFC] p-4 rounded-lg">
              <h3 className="text-3xl font-bold">05</h3>
              <p className="text-sm mt-1">Global Innovation Centers</p>
            </div>
            <div className="text-black bg-[#DDE5B6] p-4 rounded-lg">
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-sm mt-1">Awards & Certifications</p>
            </div>
            <div className="text-black bg-[#CAF0F8] p-4 rounded-lg">
              <h3 className="text-3xl font-bold">90%</h3>
              <p className="text-sm mt-1">Motivating Client Ratio</p>
            </div>
            <div className="text-black bg-[#FDFCDC] p-4 rounded-lg">
              <h3 className="text-3xl font-bold">94.7%</h3>
              <p className="text-sm mt-1">Employee Happiness Value</p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-28 px-6">
          {/* Header Section */}
          <div className="text-center mb-12 flex justify-center gap-5 w-full">
            <h2 className="text-5xl">The </h2>
            <img src="/Asset/Logo.svg" alt="" />
            <h2 className="text-5xl"> Story</h2>
          </div>

          {/* Timeline Section */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 pt-28">
            {/* Left Image */}
            <div className="w-full md:w-1/3">
              <img
                src="https://s3-alpha-sig.figma.com/img/75a4/d184/1dbf668b9d312a201e139dc176dcbd63?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bQSRZP7WJOuW2shA98UIOy1ewyZfDi4sHY4qZ4rcMyGMtxrd9iH~uxUy6KrqIdMqU15WIou2ujUUh8vCMptv5P62DQEudJwOO8Bf-Yt3pKECRdRU721NvhCLeA1PIIMT11lCriia7Z1yseQ2b6Fwvd9fP1If3LbK8DR6fuQ3vzd~QZ2zoqnF8xofRdWKKqG1YtLOW5Kojm~U3jIMLSR37UwplLyb3WLcUo3mv~BGKRNFICEc0bV7Qxdp1ULTrUOyQYlMJXL3dDqgCO18989t3Zc54GAfX0guVEWl0-zOLIHGYIn5KEcx1ZZqh6RtglR0tAo6W8R~HMj6kC6FjvkT5Q__"
                alt="QuantumHive"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Year and Text */}
            <div className="w-[35%] text-left">
              <p className="text-lg leading-relaxed text-gray-300">
                Appinventiv commenced operations with less than 10 employees
                working passionately with a vision to grow. With utmost
                dedication, we bagged our first brand project within a month of
                our incorporation. Set the grounds for success and unprecedented
                opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Section 2: Image and Text */}
            <div className="flex flex-col justify-start">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                We Keep Our Eye On The ROI
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Along with the latest infrastructure, tech stacks, management
                processes, and security measures gained from a diverse
                collective portfolio of seasoned strategists, designers, and
                developers in 35+ prominent industries. This helps us fulfill
                any client demand without compromising the output quality,
                quicker than the industry-best delivery timelines.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/89e8/945e/a45ba9d794c6917e724f148c59ae250f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNceifFEXxbvwW6ATj-Xeyg3gJemPB0BDK1RwcLvLAU2KAB0tkXvw3RxxYI9MQpOoCp7nwVgwneLNOTAKurUv1hzs2EbL2C2KzeylSm0YcqMEiO7U1UKkxBOsIQt3ov3XrzibmFOnGeS4Po565JmzQCs0sm~8FWAPx1wW3rxfszkDsjtAi8XaaNyFBX6rkt1G0omUDUmLZoI0GqWviwbAdva-lJVs0FVJURS5SrVsA9Jxk9Kx9YMWdKlo8KYVCEpiwOhSkRIQWZlsTFm1dsVl93IE~rgFp~0O3NiiuA3S1AFavlpXPNNYx6r3xkMHPbrhnP4I9Qu-JwXv9SuuuIMHQ__"
                alt="Appinventiv Team"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Section 2: Image and Text */}
            <div className="flex flex-col justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/d189/f381/ff5abdd6e46e4a5c99b6ed5e912fb215?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nwXMDC2nz4tNpxUbrB6b3xUEZixIhb4FSZhH3i3H~BjjTQu5UxmCdq9eeG32EBCoPc7486XyJSJoAbT3lr6BZ0chzVS1CM4i2W5WUtVSGQSL63YqslK5mk1UWttvRXjgf701MZiA7srwBh3bxblTsjZeCj9ujHZCB415LJiBZRwVA7avD8VH8i3iGNUsR43MN1CVehGhLkK8-9k1izoPBtjAIgbVKoNMjOewGFpUgZFICH0yJLn~XImxSuG2XB04t3hSS8dsHxn2yPtTRUPJKBar5zuwm2ezdW2JbSUjsnqOkjtU0QxribuTkb0-G6aGEW8KLMbgqInibtUe1pLRog__"
                alt="Appinventiv Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-start">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                We Own Responsibilities
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Along with the latest infrastructure, tech stacks, management
                processes, and security measures gained from a diverse
                collective portfolio of seasoned strategists, designers, and
                developers in 35+ prominent industries. This helps us fulfill
                any client demand without compromising the output quality,
                quicker than the industry-best delivery timelines.
              </p>
            </div>

            {/* Section 3: Text and Image */}
            <div className="flex flex-col justify-start">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                We Work Tirelessly
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                In an inclusive, progressive, and symbiotic environment, that
                won us the <strong>“Best Place To Work 2023”</strong> award by
                Outlook India.
              </p>
              <p className="text-gray-300 text-lg font-medium mt-2">
                Our work culture...
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg leading-relaxed mt-1 space-y-1">
                <li>Inspires Impactful Innovations</li>
                <li>Inculcates Self-Development</li>
                <li>Promotes Work-Life Balance</li>
              </ul>
            </div>
            <div className="flex flex-col justify-start">
              <img
                src="https://s3-alpha-sig.figma.com/img/efda/ad3a/c9d2aa27be8c24c1796bccff0260f699?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IT9CrcsmHPdVvNAN4qtrw4mOW2nMV0qTvH~Hf9xULCqD510fJJJc1YerfZ74upiI8qfsUw4-4Rtr3UK8Qj63~SZnqUCQYYfFW23n4Ml1k-Qga2FOR8RMn~vvhXf54iHTl-yyNMsc96HZJ2xPAxFq9E8RDKczH6RFIDTWQODXar64Ha~E3SI~6APa4gVMu3Ove~Y1CDQcPF8UdomuDz6m~UXM2thvNWrtl1SrJEV7cbUrnd8xy5SeKiY56leCilmhyTKAPhFqAaYHXaan1QpkJXf5hlMp3VsFnBGecYuADr2mzDkNsX96deY~HFhgH6ASWcThWnLbpfzHmUd5hpbPlQ__"
                alt="Best Place to Work"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-16">
          <div className="w-full text-center">
            {/* Heading */}
            <div className="w-full flex justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 max-w-3xl text-center">
                Our Efforts Have Transformed How You Experience These Global
                Leaders
              </h2>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
              {logos.map((logo) => (
                <div key={logo.name} className="flex justify-center">
                  {/* Using next/image for optimized loading */}
                  <img
                    src={logo.image}
                    alt={logo.name}
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-black pt-12 ">
      {/* Header */}
      <div className="w-full flex justify-center mb-8">
        <h2 className="text-2xl md:text-4xl font-semibold max-w-2xl text-center">
          We, Appinventors actively seek opportunities to better our
        </h2>
      </div>

      {/* Toggle Buttons */}
      <div className="flex   mb-12 w-[85%] m-auto">
        <button className="bg-black text-white py-2 w-1/2 rounded-l-xl  font-medium">
          Society
        </button>
        <button className="bg-gray-200 text-black py-2 w-1/2 rounded-r-xl   font-medium">
          Work Place
        </button>
      </div>

      {/* Image Grid */}
      <div className="flex gap-4 w-full">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-[80%]">
        <div className="overflow-hidden col-span-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/c86b/81d1/a6a227cefb76a3dcf083c0ee951801ac?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZGT64jbjX2D2IOiCmxz06S~3ANs8mFZ9OvMJPr3PsUFM15HRgH5SDbP3q~5qN7DqkezsL7wvp7KIl~lZQECikELUkqU5Qyd4ep57OKmOew~a8UOgrEbjuJSFFwPvjCst5bxH3BqrLLwmxWrXQmIrXDnsp1W7AD0WWze1SJC5dv2o9KPD8qJWs0tyGoDNz48hLp9BZb3gVciVSGj4NiOBtjMBrPUaa95WE-vRSsREwyr0ArHkVmO5jeGjT78cEX-nDZAcvTydoQuGOv-4v4JRjtpGcgeKpP8gEkruniJp~bVU4C6HI2rPI5SECYlPCgVLAnYuyQ2E-8jIBKasAuPMKg__"
            alt="Group of people smiling"
            className="w-full h-56 object-cover"
          />
        </div>
        <div className=" overflow-hidden col-span-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/70d4/5105/e05859736de4b6992783bb656b031e25?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMJIVaWTxcMxbCaMu0JhG2kNgKBQh4VpIZXKRisaruXYVds-sZqhyFjj7lha10B6oCnImt1wIoLskx1t1tWV6emP7pKj5vcAB6A91fI4HpxiET9YyzWH3NhMr2Z9z5sr~Ud6pW0mZRZgUwpzc1oK9M4iKInCro3WSwy0gXVyBFJ2A4sLiaAzSSxFcdebdbpzw-jUDzgXyVdteFxYbtyd9pw~1Gx94jh5gZtka7noFfQXGUbkTPbQBAr~D~uZy9FEArLtSV-SYsKxDfOnLhuGQHCgJvCT-K5rM3N5bBpQ053AUoi~NO4apz-6MoRZfeDIIrckzMTwDujGznEprYLMkQ__"
            alt="Person working on architecture designs"
            className="w-full h-56 object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/b41a/cf9a/f291bb13f1f37eaf7bff0f6be8b63021?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AR7lVxIKoYXHasN7Yig~5krTckBVxHtGosJlKfFu3XwfYfgrDZG3P-dczT74-gIdrqT2cqPDS5x8tMviKj~xdruKKZ2-doI5qBHIHnUyfB405ptih5nc74kPgGONwGN0~Z5PHeO7F0SinznNF0NOZykTdn1pd~uc~5dPDIhWbdgir596y-iodq-KQtyr9Z4kJsoCWcHohT-qAF6YbD5w~jNvvry6kU0SxprsOSlPdg5Ace23tGo4y217Wf0Xly8z-um0twTfg~HXeqLUFpKo7m7ceOlffDaarbFZ~nsWU6YkMMEpOqUCG110rWQSryn3WkqBZ5IEM-urP5dyFeGTkA__"
            alt="Team collaborating on laptops"
            className="w-full h-56 object-cover"
          />
        </div>
        <div className="col-span-2 overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/ceae/1c7e/4753f66a9f403bc39dfc8d8c387800b0?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nx0iEDn1jAOHs5mHdxNt5ErgChT9-Sva-~muCR7GCMK12Hf1GVHyqSBeKctql6WXbUJkknF-qN0NpLAN8tA8wnBzqlXb8MhX53wGL4h8WDOpkqKq50Oy7lBkZ6tglcOvxthBoQ-RORhug2hZVRm3tc2CE22dsx0oaNlNJD0Oh8aaXdRnIQH1GfM4WeXG6ujdxY8zz4g3bKeQkyRkiUnfECBi3NBTF7DwENB6SFrDqkzanjoyxpAkrpbw2BZsnqB6Kj7vtnm3LmuHakmGOpgcxPPW7FH4uZExpPyx7UIwxARLAeA7snI0e8aQY~PRGVm~WqFcD8Ct8PJCfMH8Avb1zg__"
            alt="Creative work in progress on screens"
            className="w-full h-56 object-cover"
          />
        </div>
        <div className=" overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/3a9c/c02c/a4c463727ec518993eccf9e6a7d543bc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gdck6O9xpUqPDyUtWTuEg-S563ZrovfGtDAZ92oOJo~QvlvTnLG0VVMIBhPmq3K25kV92MqZMorqg6kzAmHTFyRG2cp9shHq44NhSoMi6NXkTXvsxYkXOjOHrGt68kbXrmHQ-uS9-CWOmDOwaNpEx50~X2GZQIHs9kGCqcK1h8VCNCKJmMAzVgVxhGTGdiJJWBCtCSRYEbkgmWeWOwsWdes~dwCq5UcishqtGL6oJHQbbMtlAcN1VLb1Xi5WxdwFG3gbr5artlGZKk9XJ4~vMFn9RWC56M4gI94QgEfbZTwKvJ1t-UEGsBAGuVvhejsv558y1zG~CTUyXiX6XCB6Dw__"
            alt="Coworkers having a discussion"
            className="w-full h-56 object-cover"
          />
        </div>
        <div className="col-span-2 overflow-hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/5646/4d3a/5af028bf35bd6fd8927f14ab40a6a917?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IMw~rYdC4Yx3AR29GfurqTFT0n7kpHH-fOBsNBuGMSMLGsI5ZRDlgmyF9CalwXycGg3s3aOZ3xoJhZKtQK6fY9yUL6VISObbaRAFQcTH3ME3V~aNAmjgEzAAkQQe8muFu2zaZo36NfSSAePIU1K4u6COVcRVpu2KBhTHpDeAY16KYspO-1uckguLVCrvXuVSF7HZsnyEESFR1kUgDTwVvRm9YDa6b1EWX2KWwZUEXykYdH0b78kUtBo-koSTC8jO4wu-ggecJIuW2KK~2t-gXRRIvgAh0GEzgOs5k6~bZYCgd7YRGBTsVVGCus36Loxx7z8OFXktLGyoKBdOTesy3g__"
            alt="Vibrant workplace interior"
            className="w-full h-56 object-cover"
          />
        </div>
      </div>
        
        <div className="w-[20%]">
      <img src="https://s3-alpha-sig.figma.com/img/efa0/1f57/2937d67ed1249080a751d97cd92a0f6f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMuFAEQi0KAgHWglxQJcZrsISc68pIHyCFu61rGMzEHm29vToYulIxglgeu4uvcu65zSgrPgggfmXzbD09g87cSToRA~hWgep3gUpvhdOAxEX69sesr-6ALeOEKidtpcziUnyx-hf2xAh1rYI7FDq5xo4LXII6YaeAQer-bRjTtkJoWcimZfWJmi~MIG22TzPGDw-jsiaym5Fwx6CUqOj5V-MSqmvRBj84Bk--bRGuVWkWknEes1vOza1qDb6xTetzZ2CzXrK6Q6zRSPNJ9JqJAhYSfsErAU9~TIJW9Fm~jiupjphZ7h0V~0LMMTgC5jzt4Nb2ucR90GXqQSsg3blA__" alt="" 
      className="h-full w-full object-cover"
      />
      </div>
      </div>

      <div className=" bg-green-300 flex items-center justify-center mt-24">
      <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full px-4 lg:px-0">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold text-black">
            Want to meet the founding members and key drivers of our success till now?
          </h1>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Meet Our Core Team
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 relative ">
          <div className="relative w-full h-80 lg:h-96">
            {/* Image */}
            <img
              src="https://s3-alpha-sig.figma.com/img/f0d4/9b99/f079089330c689d29986f94e7dfef296?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bNGcyQkkaIjUABfPbp2zdXfIBjg8DTPFd~YHV0LdudiE21KUop75z1AoAPvfPfha5JHscwb8ZIkpDNH81AK5X1qnqVU1THryvy5TitI~9ydFRu8T1UBucy73UlayDiNy1uGO4bcOQStwv1tlluSv-5988YFm0zSxuQkAIrqL38BheOyrbiiovClliNgdgyMJCKddAO9vSGP7kJjtYjEV6BNxDCt8oMwPfuJu3zDTkBAaUN-5PBGFHibtvW-m3WUvT5YvLpUtIWTa2EuQZ-zfg8WcG-DDugpMk1KtMGmt~zxxaH0ggUWoxXQeHXm5K8-Jw9I600WF~HanKs~ujAjPbg__" 
              alt="Building"
              
              className="rounded-lg -mt-10"
            />

          
           
          </div>
        </div>
      </div>
      </div>

    </div>

    <Footer/>
    </div>
  );
};

export default page;
