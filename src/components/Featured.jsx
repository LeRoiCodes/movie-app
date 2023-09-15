/* eslint-disable no-unused-vars */
import {useState, useEffect} from 'react'
import movie1 from '../assets/Movie.png' 
// import Idmb from '../assets/idmb.png'
// import Tomato from '../assets/tomato.png'

import Card from "./Card"

function Featured() {
    const movies1=[{
        image:movie1,
        title:"Stranger Things",
        idmb:"96.0",
        movie: false,
        tomato:"97%",
        info: "USA 2016 - current",
        genre: "Action, Adventure, Horror"
    },
    {
        image:movie1,
        title:"Stranger Things",
        idmb:"96.0",
        movie: false,
        tomato:"97%",
        info: "USA 2016 - current",
        genre: "Action, Adventure, Horror"
    },
    {
        image:movie1,
        title:"Stranger Things",
        idmb:"96.0",
        movie: false,
        tomato:"97%",
        info: "USA 2016 - current",
        genre: "Action, Adventure, Horror"
    },
    {
        image:movie1,
        title:"Stranger Things",
        idmb:"96.0",
        movie: false,
        tomato:"97%",
        info: "USA 2016 - current",
        genre: "Action, Adventure, Horror"
    }] 
    const API_URL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=c8bd687d5d4f788f94ef77c9419dcde9";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results.slice(0, 10));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
//   console.log(movies)
//   console.log(movies[0].id)
  return (
    <div className='w-[100%] md:w-[80%] md:mx-auto mt-10'>
    <h1 className='text-black md:text-left text-center  text-4xl font-bold mb-7 '>Featured Movie</h1>
    <div className="sm:flex sm:flex-wrap sm:gap-2 sm:justify-center md:justify-between md:gap-5">
        { loading ? (
          <p>Loading...</p>
        ) :  movies.map((movie) => {
            return(<Card
            key={movie.id}
            movie={movie}
            />)
        })}
    </div>
    </div>
  )
}

export default Featured