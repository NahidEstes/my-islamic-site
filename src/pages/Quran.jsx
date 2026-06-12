import { useEffect, useState } from "react";

export default function Quran() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => setSurahs(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-4">
          Welcome to the House of Guidance
        </h2>
        <p className="text-emerald-700 max-w-xl mx-auto mb-6">
          Explore the Holy Quran, read surahs, and strengthen your connection
          with faith.
        </p>
        <button className="bg-emerald-700 text-white px-6 py-3 rounded-full hover:bg-emerald-800 transition">
          Start Reading
        </button>
      </section>

      {/* Surah List */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
          Surahs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {surahs.map((surah) => (
            <div
              key={surah.number}
              className="bg-white border border-emerald-100 rounded-xl shadow-sm hover:shadow-md transition p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-emerald-900">
                  {surah.number}. {surah.englishName}
                </p>
                <p className="text-sm text-emerald-600">
                  {surah.englishNameTranslation}
                </p>
              </div>
              <p className="text-lg font-arabic text-emerald-800">
                {surah.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-100 text-center py-6 mt-10">
        <p>
          &copy; {new Date().getFullYear()} Al-Quran Site. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
