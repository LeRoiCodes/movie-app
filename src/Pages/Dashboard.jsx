// import React from 'react'
import {useState, useEffect} from 'react'
import Content from "../components/Content"
// import Tab from "./Tab"
import { useParams } from 'react-router-dom';

function Dashboard() {

  const { id } = useParams()

  const API_URL =
    `https://api.themoviedb.org/3/movie/${id}?api_key=c8bd687d5d4f788f94ef77c9419dcde9`;

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovie(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  // console.log(loading)
  console.log(movie)

  if (loading){
    return <p>Loading...</p>
  }
  if (!movie){
    return(
      <div>
            <h1 className="text-xl px-10 text-center">
              Oops... Searched Item does not exist at the moment.
            </h1>
          </div>
    )
  }

  return (
    // <div className="sm:grid sm:grid-cols-3 text-black h-screen">
    <div>
        {/* <Tab /> */}
        <Content 
        movie={movie} />
        
    </div>
  )
}

export default Dashboard
