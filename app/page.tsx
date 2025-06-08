import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/phishsense-logo.png"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-8 animate-fade-in">
          <Image
            src="/phishsense-logo.png"
            alt="PhishSense Logo"
            width={300}
            height={300}
            className="mx-auto mb-8 hover:scale-105 transition-transform duration-300 drop-shadow-2xl rounded-full"
          />
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
            <Link
              href="/Docs"
              className="px-8 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-200 font-semibold"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/oussamabenalisst/PhishSense"
              className="px-8 py-3 border-2 border-green-400 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transform hover:scale-105 transition-all duration-200 font-semibold"
            >
              App view
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-[#243042] rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-green-900/40 to-green-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-all duration-300 shadow-lg">
                <Image
                  src="/globe.svg"
                  alt="Globe"
                  width={32}
                  height={32}
                  className="opacity-90 drop-shadow-md"
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-900/40 to-green-600/20 rounded-2xl flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-all duration-300 shadow-lg">
                <Image
                  src="/window.svg"
                  alt="Analysis"
                  width={32}
                  height={32}
                  className="opacity-90 drop-shadow-md"
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

          <section className="mt-24 text-left max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              🚀 Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8 px-4">
              <div className="bg-[#243042]/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                  🌐 Modern Web Interface
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Sleek, responsive design with dark theme
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Real-time form validation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Animated UI elements
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Cross-platform compatibility
                  </li>
                </ul>
              </div>
              <div className="bg-[#243042]/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                  🔒 Security Features
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Automated IP detection and logging
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Secure data handling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Cross-Origin Resource Sharing (CORS) support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Input sanitization and validation
                  </li>
                </ul>
              </div>
              <div className="bg-[#243042]/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                  📊 Advanced Analysis Tools
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Command-line data management interface
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Real-time data filtering and cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Multiple page template support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Comprehensive search capabilities
                  </li>
                </ul>
              </div>
              <div className="bg-[#243042]/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                  💾 Data Management
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    CSV-based storage system
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Record modification and deletion
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Bulk data operations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Template management system
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
