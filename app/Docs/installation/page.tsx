import React from "react";

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-black/5 py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-300 mb-4">
            ⚙️ Installation Guide
          </h1>
          <p className="text-gray-300 text-lg">
            Follow these steps to set up PhishSense
          </p>
        </div>
        <div className="space-y-8">
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                1
              </span>
              Clone the Repository
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors overflow-x-auto whitespace-nowrap">
                git clone https://github.com/oussamabenalisst/phishsense.git
              </code>
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors overflow-x-auto whitespace-nowrap">
                cd phishsense
              </code>
            </div>
          </section>
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                2
              </span>
              Install Python Dependencies
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors overflow-x-auto whitespace-nowrap">
                cd scripts
              </code>
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors overflow-x-auto whitespace-nowrap">
                bash Packages.sh
              </code>
            </div>
          </section>
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                3
              </span>
              Configure Web Server
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-black/60 leading-relaxed">
                Configure your web server to serve the application at your
                desired URL. Make sure to set up the appropriate virtual host
                and directory permissions.
              </p>
            </div>
          </section>
          <div className="bg-black/5 border-l-4 border-green-500/80 p-6 rounded-xl shadow-sm">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-green-500/90 mr-3 mt-1"
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
              <p className="text-gray-300 leading-relaxed">
                After completing these steps, your PhishSense installation
                should be ready to use. If you encounter any issues, please
                check our troubleshooting guide or contact support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
