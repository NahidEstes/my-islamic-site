import { useEffect, useState } from "react";
import SingleSurah from "./SingleSurah";

export default function Quran() {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => setSurahs(data.data))
      .catch((err) => console.error(err));
  }, []);

  if (selectedSurah) {
    return (
      <SingleSurah
        surahNumber={selectedSurah}
        onBack={() => setSelectedSurah(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-emerald-800 text-white shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">Al-Quran</h1>
      </nav>

      {/* Surah List */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
          Surahs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {surahs.map((surah) => (
            <div
              key={surah.number}
              onClick={() => setSelectedSurah(surah.number)}
              className="bg-white border border-emerald-100 rounded-xl shadow-sm hover:shadow-md hover:bg-emerald-50 cursor-pointer transition p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-emerald-900">
                  {surah.number}. {surah.englishName}
                </p>
                <p className="text-sm text-emerald-600">
                  {surah.englishNameTranslation}
                </p>
              </div>
              <p className="text-lg text-emerald-800">{surah.name}</p>
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
