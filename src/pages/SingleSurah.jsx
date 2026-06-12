import { useEffect, useState } from "react";

export default function SingleSurah({ surahNumber, onBack }) {
  const [ayahs, setAyahs] = useState([]);
  const [surahName, setSurahName] = useState("");

  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setSurahName(data.data.englishName);
        setAyahs(data.data.ayahs);
      })
      .catch((err) => console.error(err));
  }, [surahNumber]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-4 py-10 max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 text-emerald-700 hover:underline"
      >
        ← Back to Surah List
      </button>
      <h2 className="text-3xl font-bold text-emerald-900 mb-6 text-center">
        {surahName}
      </h2>
      <div className="space-y-4">
        {ayahs.map((ayah) => (
          <div
            key={ayah.number}
            className="bg-white rounded-xl shadow-sm p-4 text-right"
          >
            <p className="text-2xl text-emerald-900 font-arabic leading-loose">
              {ayah.text}
            </p>
            <p className="text-sm text-emerald-500 mt-2 text-left">
              Ayah {ayah.numberInAyah}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
