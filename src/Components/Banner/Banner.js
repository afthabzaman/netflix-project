import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import { API_KEY, ImageUrl } from "../../constant/constant";
function Banner() {
  const [movie, setMovie] = useState();
  const [movieNumber, setMovieNumber] = useState(0);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((Response) => {
        setMovie(Response.data.results[3]);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: ` url(${movie ? ImageUrl + movie.backdrop_path : ""})`,
      }}
      className="Banner"
    >
      <div className="content">
        <div>
          <h2 className="movie-name">{movie ? movie.title : ""}</h2>
        </div>
        <div>
          <button className="button">play</button>
          <button className="button">my list</button>
        </div>
        <div>
          <p className="description">{movie ? movie.overview : ""}</p>
        </div>
      </div>
      <div className="shade"></div>
    </div>
  );
}

export default Banner;
