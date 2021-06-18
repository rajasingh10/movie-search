import React, {useState, useEffect} from 'react'
import Movies from "./component/movies.js"
import "./App.css"
import Navbar from "./component/navbar.js"

const API_KEY = "4ad048295c0cc7f8019942dd4cd86c41"
const FEATURED_API = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`

const IMG_API = "https://image.tmdb.org/t/p/w1280"

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const App = ()=>{
 const [moviesdetail,setMovies] = useState([])
 const [searchmovie,setSearch] = useState()
 const [changeapi,setApi] = useState(FEATURED_API)

 useEffect(()=>{
   fetch(changeapi)
   .then(res => res.json())
   .then(data => {
     console.log(data.results);
     setMovies(data.results.filter(movie => movie.poster_path!=null))
   })
 },[changeapi]) //the fetch will run only when any depenendecy value changes

const handleSearch = (event)=>{
  console.log("text")
    setSearch(event.target.value)
 }
 const handleSubmit = (event) => {
   console.log("submit")
   event.preventDefault()
   var letters = /[\w]+$/;
   if(letters.test(searchmovie)){
     setApi(SEARCH_API+searchmovie)
   }
 }
console.log("app render")
  return(
    <React.Fragment>
       <Navbar handleSearch={handleSearch} handleSubmit={handleSubmit} searchmovie={searchmovie} totalmovies={moviesdetail.length}/>
       <Movies moviesdetail={moviesdetail} />
    </React.Fragment>
  )
}
export default App