import {
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#d9ecf9] text-gray-800 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-10">

            {/* Logo and Rating */}
            <div className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left">
            <img src="/cflogo.svg" alt="Creative Frontiers" className="w-40 mb-4 hover:scale-110 transition-transform duration-300" />
            <div className="flex items-center mb-2 text-yellow-400 text-xl">{"★★★★★"}</div>
            <p className="text-sm mb-4">5 stars from 21+ reviews on Clutch</p>
            <div className="flex gap-4 text-2xl text-gray-700">
                <a href="#" className="hover:text-pink-500 hover:scale-105 transition-transform duration-300"><FaYoutube /></a>
                <a href="#" className="hover:text-pink-500 hover:scale-105 transition-transform duration-300"><FaInstagram /></a>
                <a href="#" className="hover:text-pink-500 hover:scale-105 transition-transform duration-300"><FaLinkedin /></a>
            </div>
            </div>

            {[
            {
                title: "Animation",
                links: ["Services", "Industries", "Video Styles", "Portfolio"]
            },
            {
                title: "E-Learning",
                links: ["Custom E-Learning", "Corporate training", "Innovative learning services", "E-Learning Portfolio"]
            },
            {
                title: "Design",
                links: ["Services", "Industries", "Design Portfolio"]
            },
            {
                title: "Software Development",
                links: ["Services", "Industries", "Platforms", "Solutions", "Development Portfolio"]
            },
            {
                title: "Company",
                links: ["About us", "Careers", "Privacy Policy", "Sitemap"]
            },
            {
                title: "Resources",
                links: ["Blog", "Case Studies"]
            },
            {
                title: "Headquarters",
                isLocation: true
            }
            ].map((section, idx) => (
            <div key={idx}>
                <h4 className="font-semibold hover:text-pink-500 mb-2">{section.title}</h4>
                <ul className="space-y-1 text-sm">
                {section.isLocation ? (
                    <>
                    <p className="text-sm mb-2">Reston Virginia,<br />United States</p>
                    <p><a href="#" className="hover:text-pink-500 hover:scale-105 transition-transform duration-300 inline-block">Contact Us</a></p>
                    <p className="text-sm flex items-center gap-2 hover:text-pink-500 hover:scale-105 transition-transform duration-300">
                        <FaPhoneAlt /> +1 202 630 7614
                    </p>
                    </>
                ) : (
                    section.links?.map((link, i) => (
                    <li key={i}>
                        <a href="#" className="hover:text-pink-500 hover:scale-105 transition-transform duration-300 inline-block">
                        {link}
                        </a>
                    </li>
                    ))
                )}
                </ul>
            </div>
            ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-600">
            All rights reserved © 2025 Creative Frontiers
        </div>
    </footer>
  );
}
