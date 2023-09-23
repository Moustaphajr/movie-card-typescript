import React, { useState } from "react";
import { data } from "./db/data";
import { Movie } from "./service";

export const CreateNew = () => {
  const [movies, setMovies] = useState<Movie>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [img, setImg] = useState<string>("");

  return (
    <div className="container">
      <form action="">
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
      </form>
    </div>
  );
};

export default CreateNew;
