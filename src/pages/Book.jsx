export default function Book() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-emerald-800 text-white shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">Al-Quran</h1>
      </nav>

      {/* Page Title */}
      <section className="text-center py-10 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-2">
          Books of the Salaf
        </h2>
        <p className="text-emerald-700 max-w-xl mx-auto">
          Explore timeless works written by the righteous scholars of the early
          generations.
        </p>
      </section>

      {/* Book Grid */}

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-100 text-center py-6 mt-10">
        <p>
          &copy; {new Date().getFullYear()} Al-Quran Site. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
