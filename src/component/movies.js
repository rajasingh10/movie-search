import React, { useState } from 'react'
import Movie from './movie.js'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
//React.memo() is a HOC (higher order component) meant to optimize a React functional component.
//Thus avoiding multiple renders
const Movies = React.memo(({ moviesdetail }) => {
    const [trailerUrl, setTrailerUrl] = useState("");


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };


    const handleClick = (original_title) => {
        if (trailerUrl) {
            setTrailerUrl("");
        }
        else {
            movieTrailer(original_title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));

        }
    }

    return (
        <>
            <div className="play">
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
            <div className="moviecontainer">
                {moviesdetail.map(movie => (
                    <Movie key={movie.id} {...movie} handleClick={handleClick} />
                ))}
            </div>
        </>
    )
})

export default Movies