import "./BookCard.css";

export default function BookCard({ book }) {
  return (
    <div className="card">
      <div className="cover">
        {book.cover_i ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            alt={book.title}
          />
        ) : (
          <div className="no-cover">Sin portada</div>
        )}
      </div>

      <div className="book-info">
        <h3 className="title">{book.title}</h3>
        <p className="author">{book.author_name?.[0]}</p>
        <p className="year">{book.first_publish_year ?? "Año desconocido"}</p>
      </div>
    </div>
  );
}
