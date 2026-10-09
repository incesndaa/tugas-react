
import { useState } from "react";
import booksData from "../../../Utils/books";

export default function ProductList() {
  const [books, setBooks] = useState(booksData);

  function tambahBuku() {
    const bukuBaru = {
      id: Date.now(),
      title: "Buku Pemrograman Baru",
      author: "Adinda",
      year: 2026,
      description: "Buku tambahan untuk koleksi BookSales.",
      image: "https://placehold.co/300x180?text=Buku+Baru"
    };

    setBooks([...books, bukuBaru]);
  }

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-4">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="fw-light">Best Selling Books</h1>
            <p className="lead text-body-secondary">
              Temukan berbagai buku menarik untuk belajar pemrograman
              dan menambah pengetahuan.
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Daftar Buku</h2>

            <button
              type="button"
              className="btn btn-primary"
              onClick={tambahBuku}
            >
              + Tambah Buku
            </button>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm h-100">
                  <img
                    src={book.image}
                    className="card-img-top"
                    alt={book.title}
                    style={{
                      height: "225px",
                      objectFit: "cover"
                    }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{book.title}</h5>

                    <p className="text-body-secondary mb-1">
                      Penulis: {book.author}
                    </p>

                    <p className="text-body-secondary mb-2">
                      Tahun: {book.year}
                    </p>

                    <p className="card-text">{book.description}</p>

                    <div className="mt-auto">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}