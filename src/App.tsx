import "./App.css";
import { data } from "./db/data";
import { Movie } from "./service";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState<any>(data);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const donees: Movie[] = [
    {
      id: Math.floor(Math.random() * 10),
      title: title,
      description: description,
      year: year,
      img: img,
      trailer: "",
    },
  ];

  const handleSubmit: React.FormEventHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setMovies([...movies, ...donees]);
    console.log(donees);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
        {movies
          .filter((ele: Movie) =>
            ele.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((element: Movie) => (
            <div className="col" key={element.id}>
              <div className="card">
                <img src={element.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <h5 className="card-title">{element.year}</h5>
                  <p className="card-text">{element.description};</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="container mt-5">
        <form action="" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="title" className="form-label">
              title
            </label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="year" className="form-label">
              year
            </label>
            <input
              type="text"
              className="form-control"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="Image" className="form-label">
              image
            </label>
            <input
              type="text"
              className="form-control"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
