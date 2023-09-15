/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import image from "../assets/banner.png"


function Content({movie}) {
  const genres = ["Action", "Drama", "Comedy"]

// const movies= {
//   title: "",
//   image: "",
//   desc: "",
//   runtime: 0,
//   release_year: "",
// }
//  console.log(movie)
 const url = "https://image.tmdb.org/t/p/w500" + movie?.poster_path
  return (
    <div className="sm:col-span-2 w-[90%] mx-auto">
    <div className="mt-10 ">
        <img src={url} alt="banner" className="w-[100%] h-[600px]" />
        
        <div className="flex flex-col md:flex-row  text-[18px] text-center align-center justify-between font-medium text-[#404040] mt-4 ">
        <div className="flex justify-between  sm:w-[75%] mb-2 md:w-[50%]">
          <p data-testid="movie-title">{movie.title} </p>
            <p>•</p>
            <p data-testid="movie-release-date">{movie?.release_date}</p>
            <p>•</p>
            <p>PG-13</p>
            <p>•</p>
            <p data-testid="movie-runtime">{movie.runtime}m</p>
        </div>
            
            <div className="flex w-[50%]  sm:w-[25%] justify-start gap-3 ">
            {
              movie?.genres?.map((genre) => {
                return(
                <p key={genre?.id} className="text-[#b91c1c] text-sm font-medium p-2" style={{borderRadius: "15px", border: "1px solid #F8E7EB"}}>{genre.name}</p>
              )})
            }
            </div>
        </div>
        <div className="md:flex">
          <p className="text-[20px] font-normal text-[#333]" data-testid="movie-overview">{movie.overview}</p>
          <div className=" w-[50%] mx-auto sm:flex justify-center mt-4 md:mt-0 sm:w-[100%] md:flex-col md:items-center">
            <button className="bg-[#be123c] p-4 w-[200px] text-[20px] font-medium m-2" style={{borderRadius: "10px"}}>
              See Showtimes
            </button>
            <button className="bg-[#e6a6b6] w-[200px] p-4 text-black text-[20px] font-medium m-2" style={{borderRadius: "10px", }}>
              More Actions
            </button>
          </div>
        </div>
    </div>
    
    </div>
  )
}

export default Content