import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Welcome to PhishSense</h1>
      <p className="text-lg">
        Your go-to solution for phishing detection and prevention.
      </p>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
        Get Started
      </button>
    </div>
  );
}
