import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./css/Movies.css";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  // to get all movies list on component mounts
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const getAllMovies = () => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://movie-fake-server.herokuapp.com/data",
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    //   dispatch an action to the store
    getAllMovies();
  }, []);

  //    filter by genre
  const handleFilter = (e) => {
    // dispach filterby genre action to the store
  };
  return (
    <>
      <Navbar />
      <h2>Movies</h2>
      <select onChange={handleFilter}>{/* map through the filter  */}</select>
      <div className="movies-list">
        {/* map throught th movie list and display the results */}
        {loading && <h2>Loading............</h2>}
        {!loading && 
        data &&
        data.map((item) => {
          return(
            <div className="movies">
              <Link key={item.id} to={`/.movies/$(item.id)`}>
                {"Movie Name: " +item.movie_name}
              </Link>
              <img src="{item.image_url}"/>
              <Link key={item.id} to={`/movies/$(item.id)`}>
                {"Movie Release Date: " +item.release_date}
              </Link>
              </div>
          )
        })};
      </div>
      <Outlet />
    </>
  );
};
