"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type NavItem = {
  label: string;
  url: string;
  description?: string;
  image?: { url: string };
  children?: NavItem[];
};

export default function NavbarClient({ menu }: { menu: NavItem[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop dropdown state
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number>(0);

  return (
    <nav className="px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:scale-110 transition-transform duration-300"
        >
          <div className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-20 relative">
            <Image src="/cflogo.svg" alt="Company Logo" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          {menu.map((item, i) => {
            const children = item.children ?? [];

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  setOpenIndex(i);
                  setActiveSubIndex(0); // default to first submenu when opened
                }}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <a
                  href={item.url}
                  className="text-gray-700 hover:text-[#ff2bab] block px-2 py-1"
                >
                  {item.label}
                </a>

                {/* Two-pane mega menu */}
                {openIndex === i && children.length > 0 && (
                  <div
                    className="
                      absolute left-0 top-full mt-2
                      w-[960px] max-w-[95vw]
                      rounded-2xl border border-gray-200 bg-white shadow-2xl
                      z-50
                    "
                    // keep open while cursor is over the panel
                    onMouseEnter={() => setOpenIndex(i)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    <div className="grid grid-cols-12 gap-8 p-6">
                      {/* LEFT PANE: submenu list (selects which sub-submenu to show) */}
                      <div className="col-span-5 pr-6 border-r border-pink-300/50">
                        <ul className="flex flex-col gap-4">
                          {children.map((sub, subIdx) => {
                            const selected = activeSubIndex === subIdx;
                            return (
                              <li key={sub.label}>
                                {/* Click (and hover) to select, do not navigate */}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setActiveSubIndex(subIdx);
                                  }}
                                  onMouseEnter={() => setActiveSubIndex(subIdx)}
                                  className={`
                                    w-full text-left rounded-xl transition
                                    ${selected ? "bg-blue-50 ring-1 ring-blue-100" : "hover:bg-blue-50"}
                                    p-4
                                  `}
                                >
                                  <div className="flex gap-4 items-start">
                                    {sub.image?.url && (
                                      <div className="w-16 h-16 relative shrink-0">
                                        <Image
                                          src={sub.image.url}
                                          alt={sub.label}
                                          fill
                                          className="object-contain rounded"
                                        />
                                      </div>
                                    )}
                                    <div>
                                      <p className="text-lg font-semibold text-gray-800">
                                        {sub.label}
                                      </p>
                                      {sub.description && (
                                        <p className="text-sm text-gray-600">
                                          {sub.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* RIGHT PANE: sub-submenu links of the active submenu */}
                      <div className="col-span-7">
                        {children[activeSubIndex] ? (
                          <>
                            <div className="flex items-center justify-between mb-4">
                              {/* <h4 className="text-xl font-bold text-[#ff2bab] flex items-center gap-2">
                                {children[activeSubIndex].label} <span aria-hidden>→</span>
                              </h4> */}
                              <Link
                                    href={children[activeSubIndex].url ?? "#"}
                                    className="text-xl font-bold text-[#ff2bab] flex items-center gap-2 hover:underline"
                                >
                                    {children[activeSubIndex].label} <span aria-hidden>→</span>
                                </Link>

                              {/* Optional CTA — adjust target as needed */}
                              <Link
                                href="/portfolio"
                                className="inline-flex items-center gap-2 rounded-full border border-pink-300 px-4 py-2 text-sm font-semibold text-[#ff2bab] hover:bg-pink-50"
                              >
                                View Our portfolio
                              </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                              {(children[activeSubIndex].children ?? []).map((subsub) => (
                                <Link
                                  key={subsub.label}
                                  href={subsub.url || "#"}
                                  className="text-gray-700 hover:text-[#ff2bab] transition"
                                >
                                  {subsub.label}
                                </Link>
                              ))}

                              {/* If no sub-submenu items, show a fallback */}
                              {(children[activeSubIndex].children?.length ?? 0) === 0 && (
                                <p className="text-gray-500">No items available.</p>
                              )}
                            </div>
                          </>
                        ) : (
                          <p className="text-gray-500">Select a category.</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Contact Button */}
        <Button asChild className="hidden md:inline-block w-full md:w-auto">
          <Link href="/contact">Book a call</Link>
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation (kept simple & collapsible) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {menu.map((item, idx) => (
            <MobileGroup key={item.label} item={item} />
          ))}
          <div className="px-4 py-2">
            <Button asChild className="w-full md:w-auto">
              <Link href="/contact">Book a call</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ------- mobile helper ------- */
function MobileGroup({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex w-full justify-between items-center px-4 py-2 bg-white text-gray-800"
        onClick={() => setOpen((v) => !v)}
      >
        <Link href={item.url ?? "#"}>{item.label}</Link>
        {item.children && <span>{open ? "▴" : "▾"}</span>}
      </button>

      {open && item.children && (
        <ul className="bg-white space-y-1 py-2">
          {item.children.map((sub) => (
            <li key={sub.label} className="px-4 py-2 text-gray-800">
              {sub.children && sub.children.length > 0 ? (
                <>
                  <div className="font-semibold">{sub.label}</div>
                  {sub.description && (
                    <p className="text-sm text-gray-600">{sub.description}</p>
                  )}
                  <ul className="mt-2 ml-4 bg-white rounded">
                    {sub.children.map((subsub) => (
                      <li key={subsub.label} className="px-4 py-2 hover:bg-[#d7eeff]">
                        <a href={subsub.url}>{subsub.label}</a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={sub.url || "#"} className="block font-semibold hover:underline">
                  {sub.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}














// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../ui/button";

// type NavItem = {
//     label: string;
//     url: string;
//     description?: string;
//     image?: {
//         url: string;
//     };
//     children?: NavItem[];
// };

// export default function NavbarClient({ menu }: { menu: NavItem[] }) {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [openSubSubmenu, setOpenSubSubmenu] = useState<number | null>(null);

//     const toggleSubSubmenu = (index: number) => {
//         setOpenSubSubmenu(openSubSubmenu === index ? null : index);
//     };

//     return (
//         <nav className="bg[#d7eeff] px-6 py-4">
//             <div className="container mx-auto flex items-center justify-between">
//                 <Link href="/" className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
//                     <div className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-20 relative">
//                         <Image
//                         src="/cflogo.svg"
//                         alt="Company Logo"
//                         fill
//                         className="object-contain"
//                         />
//                     </div>
//                 </Link>


//                 {/* Desktop Navigation */}
//                 <ul className="hidden md:flex gap-6">
//                     {menu.map((item, i) => (
//                         <li key={item.label} className="relative group">
//                             <a
//                                 href={item.url}
//                                 className="text-gray-700 hover:text-[#ff2bab] block px-2 py-1"
//                             >
//                                 {item.label}
//                             </a>

//                             {/* Submenu (appears on hover) */}
//                             {item.children && item.children.length > 0 && (
//                                 <ul className="absolute left-0 top-full bg-gray-700 shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[250px] p-2">
//                                     {item.children.map((sub, subIndex) => (
//                                         <li key={sub.label} className="mb-2">
//                                             {sub.children && sub.children.length > 0 ? (
//                                                 // If sub-submenu exists, toggle it
//                                                 <button
//                                                     onClick={() => toggleSubSubmenu(subIndex)}
//                                                     className="block w-full text-left text-white hover:bg-gray-600 px-2 py-2 rounded"
//                                                 >
//                                                     <div className="flex gap-3 items-start">
//                                                         {sub.image?.url && (
//                                                             <div className="w-12 h-12 relative flex-shrink-0">
//                                                                 <Image
//                                                                     src={sub.image.url}
//                                                                     alt={sub.label}
//                                                                     fill
//                                                                     className="object-cover rounded"
//                                                                 />
//                                                             </div>
//                                                         )}
//                                                         <div>
//                                                             <p className="font-semibold">{sub.label}</p>
//                                                             {sub.description && (
//                                                                 <p className="text-sm text-gray-300">{sub.description}</p>
//                                                             )}
//                                                         </div>
//                                                     </div>
//                                                 </button>
//                                             ) : (
//                                                 // If no sub-submenu, just link to sub.url
//                                                 <Link
//                                                     href={sub.url || "#"}
//                                                     className="block text-white hover:bg-gray-600 px-2 py-2 rounded"
//                                                 >
//                                                     <div className="flex gap-3 items-start">
//                                                         {sub.image?.url && (
//                                                             <div className="w-12 h-12 relative flex-shrink-0">
//                                                                 <Image
//                                                                     src={sub.image.url}
//                                                                     alt={sub.label}
//                                                                     fill
//                                                                     className="object-cover rounded"
//                                                                 />
//                                                             </div>
//                                                         )}
//                                                         <div>
//                                                             <p className="font-semibold">{sub.label}</p>
//                                                             {sub.description && (
//                                                                 <p className="text-sm text-gray-300">{sub.description}</p>
//                                                             )}
//                                                         </div>
//                                                     </div>
//                                                 </Link>
//                                             )}

//                                             {/* Sub-submenu (shown only if toggled) */}
//                                             {openSubSubmenu === subIndex &&
//                                                 sub.children &&
//                                                 sub.children.length > 0 && (
//                                                     <ul className="bg-gray-800 mt-1 ml-4 rounded">
//                                                         {sub.children.map((subsub) => (
//                                                             <li key={subsub.label}>
//                                                                 <a
//                                                                     href={subsub.url}
//                                                                     className="block px-4 py-2 text-white hover:bg-gray-600"
//                                                                 >
//                                                                     {subsub.label}
//                                                                 </a>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 )}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}

//                         </li>
//                     ))}
//                 </ul>

//                 {/* Contact Button */}
//                 <Button
//                     asChild
//                     className="hidden md:inline-block w-full md:w-auto"
//                     >
//                     <Link href="/contact">
//                         Book a call
//                     </Link>
//                 </Button>
//                 {/* <Link
//                     href="/contact"
//                     className="hidden md:inline-block bg-[#ff2bab] hover:bg-pink-600 text-white text-sm px-4 py-2 rounded"
//                 >
//                     Book a call
//                 </Link> */}

//                 {/* Mobile Menu Toggle */}
//                 <button
//                     className="md:hidden text-black text-2xl"
//                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 >
//                     {mobileMenuOpen ? "✕" : "☰"}
//                 </button>
//             </div>

//             {/* Mobile Navigation */}
//             {mobileMenuOpen && (
//                 <div className="md:hidden mt-4 space-y-2">
//                     {menu.map((item, idx) => (
//                         <div key={item.label}>
//                             <div
//                                 className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white"
//                                 onClick={() =>
//                                     setOpenSubSubmenu(openSubSubmenu === idx ? null : idx)
//                                 }
//                             >
//                                 <Link href={item.url}>{item.label}</Link>
//                                 {item.children && <span>▼</span>}
//                             </div>
//                             {openSubSubmenu === idx && item.children && (
//                                 <ul className="bg-gray-700 space-y-1 py-2">
//                                     {item.children.map((sub) => (
//                                         <li key={sub.label} className="px-4 py-2 text-white">
//                                             {sub.children && sub.children.length > 0 ? (
//                                                 <>
//                                                     <div className="font-semibold">{sub.label}</div>
//                                                     {sub.description && (
//                                                         <p className="text-sm text-gray-300">{sub.description}</p>
//                                                     )}
//                                                     <ul className="mt-2 ml-4 bg-gray-800 rounded">
//                                                         {sub.children.map((subsub) => (
//                                                             <li
//                                                                 key={subsub.label}
//                                                                 className="px-4 py-2 text-white hover:bg-gray-600"
//                                                             >
//                                                                 <a href={subsub.url}>{subsub.label}</a>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 </>
//                                             ) : (
//                                                 // If no sub-submenu, it's just a link
//                                                 <a
//                                                     href={sub.url || "#"}
//                                                     className="block font-semibold hover:underline"
//                                                 >
//                                                     {sub.label}
//                                                     {sub.description && (
//                                                         <p className="text-sm text-gray-300">{sub.description}</p>
//                                                     )}
//                                                 </a>
//                                             )}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}

//                         </div>
//                     ))}
//                     <div className="px-4 py-2">
//                         <Button
//                             asChild
//                             className="w-full md:w-auto"
//                             >
//                             <Link href="/contact">
//                                 Book a call
//                             </Link>
//                         </Button>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }