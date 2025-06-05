import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-5xl font-bold text-white mb-2 relative z-10">
              Welcome to PhishSense
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-green-500 opacity-30 transform -rotate-1"></div>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            PhishSense is a comprehensive security research platform designed
            for simulating and analyzing phishing attempts in a controlled
            environment. It combines modern web technologies with powerful
            analysis tools to help security professionals understand phishing
            tactics and improve defense strategies.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-200 font-semibold">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-green-400 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transform hover:scale-105 transition-all duration-200 font-semibold">
              Learn More
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-[#243042] rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-700">
              <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/globe.svg"
                  alt="Globe"
                  width={24}
                  height={24}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Global Protection
              </h3>
              <p className="text-gray-400">
                Analyze threats from around the world
              </p>
            </div>
            <div className="p-6 bg-[#243042] rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-700">
              <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/window.svg"
                  alt="Analysis"
                  width={24}
                  height={24}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Real-time Analysis
              </h3>
              <p className="text-gray-400">
                Instant threat detection and alerts
              </p>
            </div>
            <div className="p-6 bg-[#243042] rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-700">
              <div className="w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Image
                  src="/file.svg"
                  alt="Reports"
                  width={24}
                  height={24}
                  className="opacity-80"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Detailed Reports
              </h3>
              <p className="text-gray-400">Comprehensive security insights</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
