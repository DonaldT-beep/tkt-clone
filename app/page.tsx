import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to TKT</h1>
        <p className="text-lg mb-6">Discover and attend amazing events near you.</p>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
          Get Started
        </button>
      </section>

      {/* Events Preview */}
      <section className="px-6 py-12 grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((event) => (
          <div key={event} className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="/images/event.jpg" alt="Event" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Sample Event {event}</h3>
              <p className="text-sm text-gray-600">June 2025</p>
              <button className="mt-3 px-4 py-2 bg-black text-white rounded">Learn More</button>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
