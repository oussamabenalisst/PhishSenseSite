import React from "react";

export default function DataManagementPage() {
  return (
    <div className="min-h-screen bg-black/5 py-6 sm:py-12 px-3 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-300 mb-3 sm:mb-4">
            📊 Data Management
          </h1>
          <p className="text-base sm:text-lg text-gray-300 px-2">
            Available commands for managing your database
          </p>
        </div>

        <div className="space-y-4 sm:space-y-8">
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                1
              </span>
              View Records
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -a
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                View all records in the database
              </p>
            </div>
          </section>
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                2
              </span>
              Add Record
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -A
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                Add a new record to the database
              </p>
            </div>
          </section>
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                3
              </span>
              Modify Record
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -M
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                Modify an existing record in the database
              </p>
            </div>
          </section>
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                4
              </span>
              Delete Record
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -S
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                Delete a specific record from the database
              </p>
            </div>
          </section>
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                5
              </span>
              Reset Database
            </h2>
            <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
              <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                -Sa
              </code>
              <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2 text-red-500">
                Warning: This will reset the entire database
              </p>
            </div>
          </section>
          <section className="bg-white/80 rounded-lg sm:rounded-xl shadow p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-black/10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1a2330] mb-3 sm:mb-4 flex items-center">
              <span className="bg-green-500/90 text-white/90 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-sm sm:text-base">
                6
              </span>
              Data Management
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
                <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                  -f
                </code>
                <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                  Filter and clean data in the database
                </p>
              </div>
              <div className="bg-black/5 rounded-md sm:rounded-lg p-3 sm:p-6 border border-black/5">
                <code className="block text-xs sm:text-sm font-mono text-[#1a2330] hover:bg-black/5 p-2 rounded transition-colors">
                  -s
                </code>
                <p className="text-sm sm:text-base text-[#1a2330]/70 mt-2">
                  Save all changes to the database
                </p>
              </div>
            </div>
          </section>
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
                Remember to save your changes using the -s command after making
                modifications to the database. Be careful with the -Sa command
                as it will reset all data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
