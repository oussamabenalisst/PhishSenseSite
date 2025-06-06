import React from "react";

export default function DevelopmentAssistance() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Development Assistance Guide
          </h1>

          {/* Introduction Section */}
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Thank you for considering contributing to PhishSense! It&apos;s
              people like you that make PhishSense such a great tool.
            </p>
          </div>

          {/* Code of Conduct Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              📜 Code of Conduct
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By participating in this project, you are expected to uphold our
              Code of Conduct:
            </p>
            <ul className="list-none space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">🎓</span>
                Use the tool for educational and research purposes only
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔒</span>
                Respect privacy and security guidelines
              </li>
              <li className="flex items-center">
                <span className="mr-2">💬</span>
                Be constructive and helpful in your communication
              </li>
              <li className="flex items-center">
                <span className="mr-2">🤝</span>
                Respect different viewpoints and experiences
              </li>
            </ul>
          </section>

          {/* How to Contribute Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              How Can I Contribute?
            </h2>

            {/* Bug Reports */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Reporting Bugs 🐛
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Before creating bug reports, please check the existing issues to
                avoid duplicates. When you create a bug report, include as many
                details as possible:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>
                  Your operating system and relevant software versions (PHP,
                  Python, XAMPP)
                </li>
                <li>Step-by-step description to reproduce the issue</li>
                <li>Expected behavior vs actual behavior</li>
                <li>Any relevant screenshots or error messages</li>
              </ul>
            </div>

            {/* Enhancements */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Suggesting Enhancements ✨
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>Use a clear and descriptive title</li>
                <li>
                  Provide a detailed description of the proposed functionality
                </li>
                <li>Explain why this enhancement would be useful</li>
                <li>Include code examples if applicable</li>
              </ul>
            </div>

            {/* Development Process */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                Development Process 🛠️
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Fork the repository</li>
                  <li>
                    Create a new branch:{" "}
                    <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
                      git checkout -b feature/your-feature-name
                    </code>
                  </li>
                  <li>Make your changes following our coding standards</li>
                  <li>Test your changes thoroughly</li>
                  <li>
                    Commit your changes:{" "}
                    <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
                      git commit -m "Add: brief description"
                    </code>
                  </li>
                  <li>
                    Push to your fork:{" "}
                    <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
                      git push origin feature/your-feature-name
                    </code>
                  </li>
                  <li>Open a Pull Request</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Coding Standards */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Coding Standards 📝
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
                  Python Code
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Follow PEP 8 style guide</li>
                  <li>Use meaningful variable names</li>
                  <li>Add comments for complex logic</li>
                  <li>Include docstrings</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
                  JavaScript/TypeScript
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Use ES6+ features</li>
                  <li>Follow camelCase naming</li>
                  <li>Add error handling</li>
                  <li>Comment complex logic</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Testing Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Testing 🧪
            </h2>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Test web interface functionality
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Verify IP detection and logging
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Test data storage and retrieval
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Check analysis tool commands
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Ensure cross-browser compatibility
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Test security features
                </li>
              </ul>
            </div>
          </section>

          {/* Questions Section */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Questions? 💭
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Feel free to create an issue tagged as &apos;question&apos; if you
              need any clarification.
            </p>
          </section>

          {/* Thank You Note */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Thank you for contributing to PhishSense! 🙏
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
