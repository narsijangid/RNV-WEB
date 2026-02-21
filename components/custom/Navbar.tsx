"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface SubLink {
  name: string;
  href: string;
  description?: string;
}

interface NavCategory {
  title: string;
  links: SubLink[];
}

interface NavLink {
  name: string;
  href?: string;
  description?: string;
  subLinks?: SubLink[];
  categories?: NavCategory[];
  isMega?: boolean;
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    {
      name: "Products",
      subLinks: [
        { name: "Social", href: "/products/social" },
        { name: "Conversational AI", href: "/products/conversational-ai" },
        { name: "Computer Vision", href: "/products/computer-vision" },
        { name: "AI-Powered Social Media Automation", href: "/products/social-media-automation" },
      ],
    },
    {
      name: "Services",
      isMega: true,
      categories: [
        {
          title: "Custom Software Development",
          links: [
            { name: "Web Development", href: "/services/web-development" },
          ]
        },
        {
          title: "AI & Data Solutions",
          links: [
            { name: "Generative AI", href: "/services/generative-ai" },
          ]
        },
        {
          title: "Mobile App Development",
          links: [
            { name: "Web view mobile application", href: "/services/web-view-mobile-app" },
          ]
        },
        {
          title: "Industry Solutions",
          links: [
            { name: "Food Delivery App", href: "/industries/food-delivery" },
            { name: "eLearning & EdTech", href: "/industries/education-elearning" },
            { name: "Travel App Development", href: "/industries/travel" },
            { name: "Ecommerce", href: "/industries/e-commerce" },
          ]
        },
        {
          title: "QA & Testing",
          links: [
            { name: "API & Integration", href: "/services/api-integration" },
          ]
        }
      ],
    },
    {
      name: "Industries",
      subLinks: [
        { name: "E-Commerce", href: "/industries/e-commerce" },
        { name: "Entertainment", href: "/industries/entertainment" },
        { name: "Education & eLearning", href: "/industries/education-elearning" },
      ],
    },
    {
      name: "Thought Leadership",
      subLinks: [
        { name: "Blogs", href: "/blog" },
        { name: "Success Stories", href: "/success-stories" },
      ],
    },
    {
      name: "Careers",
      subLinks: [
        { name: "Life at Rinovea", href: "/careers/life-at-rinovea" },
        { name: "Current Opening", href: "/careers/openings" },
      ],
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveIndex(-1);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveIndex(-1);
    buttonRef.current?.focus();
  };

  // GSAP animation for dropdowns
  useGSAP(() => {
    if (openDropdown && dropdownRefs.current[openDropdown]) {
      gsap.fromTo(
        dropdownRefs.current[openDropdown],
        { opacity: 0, y: 10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [openDropdown]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isMenuOpen) closeMenu();
        setOpenDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useGSAP(() => {
    const headerEl = navRef.current;
    if (!headerEl) return;

    let isHidden = false;
    let headerHeight = headerEl.offsetHeight;
    gsap.set(headerEl, { y: 0, willChange: "transform" });

    const onResize = () => {
      headerHeight = headerEl.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const st = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const scrolled = self.scroll();
        if (isMenuOpen || openDropdown) {
          if (isHidden) {
            isHidden = false;
          }
          gsap.to(headerEl, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          return;
        }

        if (scrolled <= 0) {
          if (isHidden) {
            isHidden = false;
          }
          gsap.to(headerEl, { y: 0, duration: 0.4, ease: "power2.out", overwrite: "auto" });
          return;
        }

        if (self.direction === 1) {
          if (!isHidden) {
            isHidden = true;
            gsap.to(headerEl, {
              y: -headerHeight - 20,
              duration: 0.45,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        } else if (self.direction === -1) {
          if (isHidden) {
            isHidden = false;
            gsap.to(headerEl, { y: 0, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          }
        }
      },
    });

    return () => {
      st.kill();
      window.removeEventListener("resize", onResize);
      gsap.set(headerEl, { y: 0 });
    };
  }, [isMenuOpen, openDropdown]);

  return (
    <>
      <a
        href="#main-content"
        className="focus:bg-primary focus:text-primary-foreground focus:ring-ring !sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        ref={navRef}
        className="bg-white/10 fixed inset-x-0 top-0 z-40 mx-auto w-full max-w-7xl rounded-b-xl px-5 backdrop-blur-2xl border border-white/20 shadow-lg"
        role="banner"
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <div className="container mx-auto">
          <nav
            className="flex items-center justify-between py-1"
            role="navigation"
            aria-label="Primary navigation"
          >
            <div className="flex items-center">
              <Link
                href="/"
                className="focus:ring-ring flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                aria-label="Rinovea - Return to homepage"
              >
                <img
                  src="https://www.rinovea.com/images/logo1.png"
                  alt="Rinovea Logo"
                  className="h-16 w-auto object-contain"
                  width="200"
                  height="64"
                />
              </Link>
            </div>

            <ul className="hidden items-center space-x-1 lg:flex" role="menubar">
              {navLinks.map((link) => {
                const hasSubLinks = (link.subLinks && link.subLinks.length > 0) || (link.categories && link.categories.length > 0);
                const isActive = pathname === link.href || link.subLinks?.some(sub => pathname === sub.href) || link.categories?.some(cat => cat.links.some(l => pathname === l.href));

                return (
                  <li
                    key={link.name}
                    role="none"
                    className="relative"
                    onMouseEnter={() => hasSubLinks && setOpenDropdown(link.name)}
                  >
                    {link.href ? (
                      <Link
                        href={link.href}
                        className={`hover:bg-accent hover:text-accent-foreground focus:ring-ring flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none ${isActive ? "bg-accent/50 text-foreground" : "text-foreground/70"
                          }`}
                        role="menuitem"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        className={`hover:bg-accent hover:text-accent-foreground focus:ring-ring flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none ${isActive || openDropdown === link.name ? "bg-accent/50 text-foreground" : "text-foreground/70"
                          }`}
                        role="menuitem"
                        aria-expanded={openDropdown === link.name}
                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      >
                        {link.name}
                        {hasSubLinks && (
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === link.name ? "rotate-180" : ""}`} />
                        )}
                      </button>
                    )}

                    {hasSubLinks && openDropdown === link.name && (
                      <div
                        ref={(el) => { dropdownRefs.current[link.name] = el }}
                        className={`absolute top-full mt-1.5 rounded-xl border border-border bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${link.isMega ? "left-1/2 -translate-x-1/2 w-[700px]" : "left-0 w-64"}`}
                        role="menu"
                      >
                        {link.isMega ? (
                          <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                            {/* Column 1 */}
                            <div className="space-y-8">
                              {link.categories?.slice(0, 1).map((cat) => (
                                <div key={cat.title} className="space-y-3">
                                  <h4 className="px-1 text-[13px] font-bold text-black">{cat.title}</h4>
                                  <div className="space-y-0.5">
                                    {cat.links?.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] font-medium text-foreground/70 transition-all hover:bg-accent hover:text-foreground group"
                                        role="menuitem"
                                        onClick={() => setOpenDropdown(null)}
                                      >
                                        <ChevronDown className="h-2.5 w-2.5 -rotate-90 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              {link.categories?.slice(3, 4).map((cat) => (
                                <div key={cat.title} className="space-y-3">
                                  <h4 className="px-1 text-[13px] font-bold text-black">{cat.title}</h4>
                                  <div className="space-y-0.5">
                                    {cat.links?.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] font-medium text-foreground/70 transition-all hover:bg-accent hover:text-foreground group"
                                        role="menuitem"
                                        onClick={() => setOpenDropdown(null)}
                                      >
                                        <ChevronDown className="h-2.5 w-2.5 -rotate-90 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-8">
                              {link.categories?.slice(1, 2).map((cat) => (
                                <div key={cat.title} className="space-y-3">
                                  <h4 className="px-1 text-[13px] font-bold text-black">{cat.title}</h4>
                                  <div className="space-y-0.5">
                                    {cat.links?.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] font-medium text-foreground/70 transition-all hover:bg-accent hover:text-foreground group"
                                        role="menuitem"
                                        onClick={() => setOpenDropdown(null)}
                                      >
                                        <ChevronDown className="h-2.5 w-2.5 -rotate-90 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              {link.categories?.slice(4, 5).map((cat) => (
                                <div key={cat.title} className="space-y-3">
                                  <h4 className="px-1 text-[13px] font-bold text-black">{cat.title}</h4>
                                  <div className="space-y-0.5">
                                    {cat.links?.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] font-medium text-foreground/70 transition-all hover:bg-accent hover:text-foreground group"
                                        role="menuitem"
                                        onClick={() => setOpenDropdown(null)}
                                      >
                                        <ChevronDown className="h-2.5 w-2.5 -rotate-90 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Column 3 */}
                            <div className="space-y-8">
                              {link.categories?.slice(2, 3).map((cat) => (
                                <div key={cat.title} className="space-y-3">
                                  <h4 className="px-1 text-[13px] font-bold text-black">{cat.title}</h4>
                                  <div className="space-y-0.5">
                                    {cat.links?.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] font-medium text-foreground/70 transition-all hover:bg-accent hover:text-foreground group"
                                        role="menuitem"
                                        onClick={() => setOpenDropdown(null)}
                                      >
                                        <ChevronDown className="h-2.5 w-2.5 -rotate-90 text-foreground/20 group-hover:text-foreground/40 transition-colors" />
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-0.5">
                            {link.subLinks?.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="hover:bg-accent block rounded-md px-3 py-1.5 text-xs text-foreground/70 transition-colors hover:text-foreground"
                                role="menuitem"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3">
              <Button
                size={"sm"}
                className="hidden text-sm sm:flex font-semibold px-6 rounded-full"
                aria-label="Enquire about our services"
              >
                Enquire
              </Button>

              <div className="lg:hidden">
                <button
                  ref={buttonRef}
                  onClick={toggleMenu}
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-md outline-none focus:ring-0"
                  aria-expanded={isMenuOpen}
                  aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                  <span
                    className={`bg-foreground absolute left-1/2 block h-0.5 w-6 -translate-x-1/2 rounded-sm transition-all duration-200 ${isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-3.5"}`}
                  />
                  <span
                    className={`bg-foreground absolute left-1/2 block h-0.5 w-6 -translate-x-1/2 rounded-sm transition-all duration-200 ${isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-5.5"}`}
                  />
                </button>
              </div>
            </div>
          </nav>

          {isMenuOpen && (
            <div
              ref={menuRef}
              className="lg:hidden animate-in fade-in slide-in-from-top-4 duration-300 pb-8 bg-background rounded-b-xl"
              id="mobile-menu"
            >
              <div className="space-y-4 px-2 py-4 max-h-[70vh] overflow-y-auto">
                {navLinks.map((link) => (
                  <div key={link.name} className="space-y-2">
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="block px-3 py-2 text-lg font-semibold text-foreground"
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <div className="px-3 py-2 text-lg font-semibold text-foreground/50 uppercase tracking-wider text-xs">
                        {link.name}
                      </div>
                    )}
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block rounded-md px-6 py-2 text-base font-medium text-foreground/70 hover:bg-accent hover:text-foreground transition-colors"
                        onClick={closeMenu}
                      >
                        {sub.name}
                      </Link>
                    ))}
                    {link.categories?.map((cat) => (
                      <div key={cat.title} className="space-y-1">
                        <div className="px-6 py-1 text-xs font-bold text-foreground/40 uppercase tracking-wider">
                          {cat.title}
                        </div>
                        {cat.links.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block rounded-md px-8 py-2 text-base font-medium text-foreground/70 hover:bg-accent hover:text-foreground transition-colors"
                            onClick={closeMenu}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
                <div className="border-t border-white/10 pt-4 px-3 space-y-4">
                  <Button className="w-full rounded-full" onClick={closeMenu}>
                    Enquire
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;

