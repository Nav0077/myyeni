import NavBar from '../components/NavBar';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="overflow-hidden whitespace-nowrap bg-blue-100 py-2">
        <div className="inline-block animate-marquee text-blue-700 text-lg font-semibold">
          🚀 Welcome to MYYENI – It is Under-Development!!!
        </div>
      </div>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to MYYENI</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Discover tools and features that empower your daily productivity. Fast, secure, and intuitive.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-xl hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
          {[
            { title: 'Fast Performance', desc: 'Enjoy lightning-fast load times and optimized experience.' },
            { title: 'Secure Login', desc: 'Authenticate safely with Firebase Authentication.' },
            { title: 'Responsive Design', desc: 'Looks great on mobile, tablet, and desktop.' },
          ].map((feat, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feat.title}</h3>
              <p className="text-gray-600">{feat.desc}</p>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to explore MYYENI?</h2>
          <button className="bg-green-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-green-700 transition">
            Join Now
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-16 w-full">
        <p>&copy; {new Date().getFullYear()} MYYENI. All rights reserved.</p>
      </footer>
    </>
  );
}
