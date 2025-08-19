import Link from "next/link";
// import { CompanySlider } from "./Slider";
import { AwardsGrid } from "./Home/Award";
import OurProcess from "./Home/OurProcess";
import CallToAction from "./Home/CallToAction";
import Footer from "./Global/Footer";
import TrustedCompaniesCarousel from "./Home/TrustedCompaniesCarousel";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div>
      <section className="bg[#d7eeff] text-white min-h-96 flex flex-col justify-center px-6 md:mt-0 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className=" md:pr-20 md:pl-20 pr-4 pl-4">
            <h1 className="text-gray-700 text-2xl md:text-4xl font-bold md:mb-2">
              We <span className="bg-[#0091e1] text-white rounded">simplify the complex</span> with</h1>
              <h1 className="text-gray-700 text-2xl md:text-4xl font-bold mb-8">stunning storytelling!</h1>
            <p className="text-md md:text-xl text-gray-700 mb-8">
              By harnessing innovative digital solutions and creative design, we translate intricate concepts into clear, engaging narratives that captivate audiences and drive action.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#009ded] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Our services
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: "Animation",
                icon: "/s1.svg",
                hoverIcon: "/s5.svg",
                link: "/services/animation",
              },
              {
                title: "E-Learning",
                icon: "/s2.svg",
                hoverIcon: "/s5.svg",
                link: "/services/e-learning",
              },
              {
                title: "Design",
                icon: "/s3.svg",
                hoverIcon: "/s5.svg",
                link: "/services/design",
              },
              {
                title: "Development",
                icon: "/s4.svg",
                hoverIcon: "/s5.svg",
                link: "/services/development",
              },
            ].map((service) => (
              <a
                key={service.title}
                href={service.link}
                className="group relative bg-[#52b6f0]/40 border border-white rounded-2xl w-36 h-36 sm:w-44 sm:h-44 flex flex-col items-center justify-center text-white font-semibold hover:scale-110 transition-transform duration-300 hover:bg-[#ff2bab]"
                style={{ minWidth: "8rem" }}
              >
                {/* Default icon */}
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="absolute top-0 right-0 w-34 h-34 group-hover:hidden"
                />

                {/* Hover icon */}
                <img
                  src={service.hoverIcon}
                  alt={`${service.title} hover icon`}
                  className="absolute top-0 right-0 w-24 h-24 hidden group-hover:block"
                />

                {/* Title */}
                <span className="mt-auto mb-4">{service.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    
      <div>
        <section className="bg-white py-16 px-4">
          <div className="text-left">
            {/* Top Content */}
            <div className="mb-12">
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
                Our mission is clear. Simplify the complex with stunning storytelling. Today, we’re a vibrant team of over 40 creatives spread across three locations and have served more than 100 clients. Our culture thrives on creativity, collaboration, and continuous innovation. We empower every team member to bring bold ideas to life, encouraging an environment where creativity knows no bounds.
              </p>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
                Our work has garnered multiple awards, including accolades at the Los Angeles A Film Awards (LAFA), the Global Film Festival, and the Texas Film Festival. We’re proud to be recognized as one of DC’s top ten animation companies by The Manifest and maintain a solid 5-star rating on Clutch.
              </p>
              <h3 className="font-bold text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-4">Our results</h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
                We’ve successfully completed over 200 projects for prestigious organizations such as the
                World Bank Group, WWF, Stanford University, Sunrise Group, and John Snow Inc.
              </p>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                In our 10-year history, we&apos;ve consistently earned five-star reviews and garnered numerous
                awards for our work. When you choose to work with us, come with high expectations!
              </p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto text-center">

            <div className="flex flex-wrap justify-center gap-12">
              <div>
                <p className="text-blue-600 text-6xl font-bold">100+</p>
                <p className="font-semibold text-gray-800 text-2xl">clients</p>
              </div>
              <div>
                <p className="text-blue-500 text-6xl font-bold">40</p>
                <p className="font-semibold text-gray-800 text-2xl">creatives</p>
              </div>
              <div>
                <p className="text-purple-600 text-6xl font-bold">200</p>
                <p className="font-semibold text-gray-800 text-2xl">projects</p>
              </div>
              <div>
                <p className="text-blue-600 font-semibold mb-1 text-lg">5 star rated on</p>
                <div className="flex items-center justify-center space-x-1">
                  <a
                  href="https://clutch.co/profile/creative-frontiers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1 hover:underline"
                  >
                    <img src="/clutch.svg" alt="Clutch Logo" className="h-12" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg mt-12 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 pr-4">
                Our journey is a testament to the power of storytelling and innovation
              </h3>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-gray-700 mb-6 md:mb-0 text-center md:text-left md:pl-20 pl-0">
                  Join us as we continue to empower organizations to create clear,
                  captivating narratives that inspire and engage.
                </p>
                <Button
                  asChild
                  className="w-full font-bold md:w-auto"
                >
                  <Link href="/contact">
                    Book an intro call
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </section>
      </div>

      <TrustedCompaniesCarousel />
      <AwardsGrid />
      <OurProcess />
      <CallToAction />
      <Footer />

    </div>
  );
}