import React from 'react'

const Navbar = (props)=>{
  console.log("navbar render")
    return(
        <header className="header">
        <h2>MOVIES INFO</h2>
        <h3>Total results: <span>{props.totalmovies}</span></h3>
        <div className="search">
        <input type="text" placeholder="search.." value={props.searchmovie} onChange={props.handleSearch}/>
        <button onClick={props.handleSubmit}>search</button>
        </div>
      </header>
    )
}

export default Navbar