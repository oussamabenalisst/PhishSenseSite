"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="flex">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-lg bg-[#1e2736] text-gray-300 hover:text-white hover:bg-[#2a3441] focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#1e2736] to-[#2a3441] shadow-2xl transform transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:h-[calc(100vh-4rem)] w-72 border-r border-gray-700/50`}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 py-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            <nav className="px-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-4 py-3.5 text-gray-300 rounded-xl hover:bg-[#2a3441]/80 hover:text-white transition-all duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-[#2a3441]/50 group-hover:bg-[#2a3441] transition-colors">
                    <Image
                      src={item.icon}
                      alt={`${item.name} icon`}
                      width={20}
                      height={20}
                      className="opacity-75 group-hover:opacity-100 transition-opacity"
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
    </div>
  );
};

export default Sidebar;
