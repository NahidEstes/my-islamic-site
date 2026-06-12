import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <p className="text-emerald-600 font-arabic text-3xl mb-3">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-4">
          Knowledge is Light, Ignorance is Darkness
        </h2>
        <p className="text-emerald-700 max-w-2xl mx-auto mb-8">
          A space dedicated to learning the Quran, understanding Hadith, and
          following the path of the righteous predecessors (Salaf).
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-emerald-700 text-white px-6 py-3 rounded-full hover:bg-emerald-800 transition">
            <Link to="/quran" className="nav-link">
              Read Quran
            </Link>
          </button>
          <button className="border border-emerald-700 text-emerald-700 px-6 py-3 rounded-full hover:bg-emerald-100 transition">
            Explore Hadith
          </button>
        </div>
      </section>

      {/* Hadith / Salaf Quote Section */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border-l-4 border-emerald-600 rounded-xl shadow-md p-8 text-center">
          <p className="text-xl md:text-2xl text-emerald-900 font-medium italic mb-4">
            "Whoever follows a path seeking knowledge, Allah will make easy for
            him a path to Paradise."
          </p>
          <p className="text-emerald-600 font-semibold">
            — Prophet Muhammad ﷺ (Sahih Muslim)
          </p>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-400 rounded-xl shadow-sm p-8 mt-6 text-center">
          <p className="text-lg md:text-xl text-emerald-800 italic mb-4">
            "Patience is of two kinds: patience in adversity, which is good, but
            better still is patience in keeping away from sin."
          </p>
          <p className="text-emerald-600 font-semibold">
            — Ibn Taymiyyah (Salaf Scholar)
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 text-center">
          <h3 className="text-emerald-900 font-bold text-lg mb-2">📖 Quran</h3>
          <p className="text-emerald-600 text-sm">
            Read and reflect on the words of Allah, with translations and
            tafsir.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 text-center">
          <h3 className="text-emerald-900 font-bold text-lg mb-2">🕌 Hadith</h3>
          <p className="text-emerald-600 text-sm">
            Explore authentic sayings of the Prophet ﷺ from trusted collections.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 text-center">
          <h3 className="text-emerald-900 font-bold text-lg mb-2">🕊️ Salaf</h3>
          <p className="text-emerald-600 text-sm">
            Learn from the wisdom and example of the early generations of Islam.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-100 text-center py-6 mt-10">
        <p>
          &copy; {new Date().getFullYear()} Noor Al-Islam. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
