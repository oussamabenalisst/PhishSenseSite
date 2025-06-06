import React from "react";

export default function AddWebPage() {
  return (
    <div className="min-h-screen bg-black/5 py-6 sm:py-12 px-3 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-300 mb-3 sm:mb-4">
            🌐 Add Web Page
          </h1>
          <p className="text-base sm:text-lg text-gray-300 px-2">
            Follow these steps to add a new web page to the system
          </p>
        </div>

        <div className="space-y-4 sm:space-y-8">
          {/* Command Usage Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                1
              </span>
              Command Usage
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors overflow-x-auto whitespace-nowrap">
                -Ap to add page web in data type
              </code>
            </div>
          </section>

          {/* Script Integration Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                2
              </span>
              Script Integration
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors overflow-x-auto whitespace-nowrap">
                {'<script src="./scripts/scripts.js"></script>'}
              </code>
            </div>
          </section>

          {/* Input Configuration Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                3
              </span>
              Input Configuration
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
                <p className="text-sm sm:text-base text-[#1a2330]/80 mb-2 font-semibold">
                  Username Input:
                </p>
                <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors overflow-x-auto whitespace-nowrap">
                  id="usernamefi"
                </code>
              </div>
              <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
                <p className="text-sm sm:text-base text-[#1a2330]/80 mb-2 font-semibold">
                  Password Input:
                </p>
                <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors overflow-x-auto whitespace-nowrap">
                  id="passwordfi"
                </code>
              </div>
            </div>
          </section>

          {/* Button Configuration Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                4
              </span>
              Button Configuration
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
                <p className="text-sm sm:text-base text-[#1a2330]/80 mb-2 font-semibold">
                  Button Type:
                </p>
                <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors overflow-x-auto whitespace-nowrap">
                  type="button"
                </code>
              </div>
              <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
                <p className="text-sm sm:text-base text-[#1a2330]/80 mb-2 font-semibold">
                  onClick Event:
                </p>
                <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors overflow-x-auto whitespace-nowrap">
                  onclick="addtocsv(type, url)"
                </code>
              </div>
            </div>
          </section>

          {/* Parameters Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                5
              </span>
              Parameters
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
                <p className="text-sm sm:text-base text-[#1a2330]/80 mb-2 font-semibold">
                  type:
                </p>
                <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors overflow-x-auto whitespace-nowrap">
                  type = name page
                </code>
              </div>
              <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
                <p className="text-sm sm:text-base text-[#1a2330]/80 mb-2 font-semibold">
                  url:
                </p>
                <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors overflow-x-auto whitespace-nowrap">
                  url = target page URL (destination when clicked)
                </code>
              </div>
            </div>
          </section>

          {/* Additional Info */}
          <div className="bg-black/5 border-l-4 border-green-500/80 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-green-500/90 mr-2 sm:mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Make sure to properly configure all elements with the correct
                IDs and event handlers. The script will handle the data
                submission to the CSV file when the button is clicked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
