import React from "react";

export default function UtilityCommandsPage() {
  return (
    <div className="min-h-screen bg-black/5 py-6 sm:py-12 px-3 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-300 mb-3 sm:mb-4">
            🛠️ Utility Commands
          </h1>
          <p className="text-base sm:text-lg text-gray-300 px-2">
            Essential utility commands for system control
          </p>
        </div>

        <div className="space-y-4 sm:space-y-8">
          {/* Restart Application Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                1
              </span>
              Restart Application
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -RE
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                Restart the entire application and reload all components
              </p>
            </div>
          </section>

          {/* Clear Screen Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                2
              </span>
              Clear Screen
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -c
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                Clear the terminal screen and remove all previous output
              </p>
            </div>
          </section>

          {/* Show Help Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                3
              </span>
              Show Help
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -h
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                Display the help menu with all available commands and their
                descriptions
              </p>
            </div>
          </section>

          {/* Exit Section */}
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                4
              </span>
              Exit Application
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -q
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                Exit and close the application
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
