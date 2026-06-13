export default function About() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-4 py-6">
        {loading ? (
          <p className="text-center text-emerald-600">Loading books...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-white border border-emerald-100 rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col"
              >
                <h3 className="font-bold text-emerald-900 text-lg mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-emerald-600 mb-2">
                  by {book.author}
                </p>
                <p className="text-emerald-700 text-sm flex-grow">
                  {book.description}
                </p>

                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-emerald-700 text-white text-center px-4 py-2 rounded-full text-sm hover:bg-emerald-800 transition"
                >
                  Read Book
                </a>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
