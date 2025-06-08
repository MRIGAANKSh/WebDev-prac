const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-16">
      {/* Intro Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          We are a passionate team of developers, designers, and creators working to build modern, user-friendly applications using cutting-edge technologies like React and Tailwind CSS.
        </p>
      </section>

      {/* Our Mission */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to simplify frontend development by providing clean UI templates, reusable components, and modern workflows that empower developers to move fast and build confidently.
            </p>
          </div>
          <div className="bg-blue-100 h-64 w-full rounded-lg shadow-md flex items-center justify-center text-blue-600 text-xl font-bold">
            🚀 Innovation & Simplicity
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Mrigaank Sharma</h3>
            <p className="text-sm text-gray-600">Frontend Developer</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Jane Doe</h3>
            <p className="text-sm text-gray-600">UI/UX Designer</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">John Smith</h3>
            <p className="text-sm text-gray-600">Backend Engineer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
