import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Best Practices for Online Security",
    excerpt:
      "PhishSense is a comprehensive security research platform designed for simulating and analyzing phishing attempts in a controlled environment. It combines modern web technologies with powerful analysis tools to help security professionals understand phishing tactics and improve defense strategies.",
    date: "2025-04-25",
    author: "Oussama Benali",
    category: "Best Practices",
    readTime: "4 min read",
    imageUrl: "/blog/security-practices.jpg",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#1a2330] text-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            PhishSense Blog
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay informed about the latest in cybersecurity, phishing
            prevention, and online safety.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["All", "Security", "Best Practices", "Threats", "Updates"].map(
            (category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm bg-[#2a3441] hover:bg-[#3a4451] transition-colors"
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#2a3441] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span>{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 hover:text-green-400 transition-colors">
                  <Link href={`https://github.com/oussamabenalisst/PhishSense`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{post.author}</span>
                  <span className="text-gray-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
