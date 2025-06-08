const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MyWebsite</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Build beautiful, responsive React applications using Tailwind CSS with ease.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p>Optimized for speed and efficiency with modern build tools.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p>Fully responsive UI that works across all devices and screen sizes.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Developer Friendly</h3>
            <p>Clean codebase with Tailwind utility-first styling out of the box.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to build your app?</h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Start Now
        </button>
      </section>
    </div>
  );
};

export default Home;
