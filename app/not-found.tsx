import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6">
      <div className="text-center animate-fade-in p-12 rounded-2xl ">
        <h1 className="text-8xl font-bold text-green-200 mb-4 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-4 text-white tracking-wide">
          Page Not Found
        </h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-200 hover:bg-green-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-200/25 transform hover:-translate-y-1"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
