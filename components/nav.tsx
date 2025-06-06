"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar");
      const button = document.getElementById("mobile-menu-button");

      if (!sidebar || !button) return;

      const clickedOutside =
        !sidebar.contains(event.target as Node) &&
        !button.contains(event.target as Node);

      if (isOpen && clickedOutside) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuItems = [
    {
      name: "Installation",
      href: "/Docs/installation",
      icon: "/globe.svg",
    },
    {
      name: "Add a Web Page",
      href: "/Docs/add-web-page",
      icon: "/file.svg",
    },
    {
      name: "Data Management",
      href: "/Docs/data-management",
      icon: "/window.svg",
    },
    {
      name: "Page Management",
      href: "/Docs/page-management",
      icon: "/window.svg",
    },
    {
      name: "Utility Commands",
      href: "/Docs/utility-commands",
      icon: "/window.svg",
    },
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-30 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu button */}
      <button
        id="mobile-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-lg bg-[#1e2736] text-gray-300 hover:text-white hover:bg-[#2a3441] focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-sidebar"
      >
        <svg
          className="h-6 w-6 transition-transform duration-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div
        id="mobile-sidebar"
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#1e2736] to-[#2a3441] shadow-2xl transform transition-all duration-300 ease-out z-40 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:h-[calc(100vh-4rem)] 
          w-72 border-r border-gray-700/50`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex flex-col h-full">
          {/* Mobile close button - for better UX */}
          <div className="lg:hidden flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-[#2a3441] focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 py-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent overscroll-contain">
            <nav className="px-6 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-3.5 rounded-xl transition-all duration-200 group
                    ${
                      pathname === item.href
                        ? "bg-[#2a3441] text-white"
                        : "text-gray-300 hover:bg-[#2a3441]/80 hover:text-white"
                    } active:scale-95`}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors
                      ${
                        pathname === item.href
                          ? "bg-[#3a4451]"
                          : "bg-[#2a3441]/50 group-hover:bg-[#2a3441]"
                      }`}
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={20}
                      height={20}
                      className={`transition-opacity
                        ${
                          pathname === item.href
                            ? "opacity-100"
                            : "opacity-75 group-hover:opacity-100"
                        }`}
                    />
                  </div>
                  <span className="ml-3 font-medium text-sm tracking-wide">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
