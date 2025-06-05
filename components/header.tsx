import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-green-200 font-bold text-xl">
              PhishSense
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-green-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/scan"
              className="text-green-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Scan
            </Link>
            <Link
              href="/about"
              className="text-green-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
