import React from "react";
import Movie from "./Movie"

class MovieList extends React.Component{

  render() {
    const movieEntries = this.props.movies.map((movie)=> {
      return (
        <Movie title={movie.title} key={movie.id} link={movie.link}/>
      )
    })

    return (
      <div className="movie-list">
        {movieEntries}
      </div>
    )

  }
}


export default MovieList;
