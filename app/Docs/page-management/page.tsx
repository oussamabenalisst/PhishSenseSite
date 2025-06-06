import React from "react";

export default function PageManagementPage() {
  return (
    <div className="min-h-screen bg-black/5 py-6 sm:py-12 px-3 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-300 mb-3 sm:mb-4">
            📄 Page Management
          </h1>
          <p className="text-base sm:text-lg text-gray-300 px-2">
            Available commands for managing your pages
          </p>
        </div>

        <div className="space-y-4 sm:space-y-8">
          {/* Change Page Content Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                1
              </span>
              Change Page Content
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -Cp
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                Modify the content of an existing page
              </p>
            </div>
          </section>

          {/* Add New Page Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                2
              </span>
              Add New Page
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -Ap
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                Create and add a new page to the system
              </p>
            </div>
          </section>

          {/* List Page Types Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                3
              </span>
              List Page Types
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -ap
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                View all available page types in the system
              </p>
            </div>
          </section>

          {/* Delete Page Type Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                4
              </span>
              Delete Page Type
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -Sp
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                Remove a specific page type from the system
              </p>
            </div>
          </section>

          {/* Remove Page Content Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                5
              </span>
              Remove Page Content
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -Sap
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2 text-red-500">
                Delete the content of a specific page
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
