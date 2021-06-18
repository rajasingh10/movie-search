import React from 'react'



const IMG_API = "https://image.tmdb.org/t/p/w1280"

const countvote = (rating) => {
    if (rating >= 8) {
        return "green"
    }
    else if (rating >= 6) {
        return "orange"
    }
    else {
        return "red"
    }
}
const Movie = ({ title, overview, poster_path, vote_average, original_title, handleClick }) => {
    return (

        <div className="movie" onClick={() => handleClick(original_title)}>
            <img src={IMG_API + poster_path} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`vote ${countvote(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie