import React from "react";
import MovieList from "./MovieList"

class MovieScaffold extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      movies: [{id:1,title: "Sausage Party", link:"http://www.imdb.com/title/tt1700841/?ref_=nv_sr_1"},
              {id:2, title: "Cafe Society", link:"http://www.imdb.com/title/tt4513674/?ref_=nv_sr_1"},
              {id:3, title: "Morgan", link:"http://www.imdb.com/title/tt4520364/?ref_=nv_sr_7"},
              {id:4, title: "The 9th Life of Louis Drax", link:"http://www.imdb.com/title/tt3991412/?ref_=nv_sr_1"},
              {id:5, title: "Naam Hai Akira", link:"http://www.imdb.com/title/tt5465370/?ref_=nv_sr_1"},
              {id:6, title: "Equity", link:"http://www.imdb.com/title/tt3958780/?ref_=nv_sr_1"},
              {id:7, title: "Things to Come", link:"http://www.imdb.com/title/tt4120176/?ref_=nv_sr_1"},
              {id:8, title: "Justice League", link:"http://www.imdb.com/title/tt0974015/?ref_=nv_sr_1"},
              {id:9, title: "The Man Who Invented Christmas", link:"http://www.imdb.com/title/tt6225520/?ref_=cs_ov_tt"},
              {id:10, title: "Wind River", link:"http://www.imdb.com/title/tt5362988/?ref_=nv_sr_1"}
      ]
    }
  }

  render() {
    return (
      <div className="movie-box">
        <h1>UK's almost Latest Releases</h1>
          <MovieList movies = {this.state.movies}/>
        <a href="http://www.imdb.com/movies-coming-soon/?ref_=nv_mv_cs_4">See more opening this week</a>
        <hr></hr>
        <a href="https://www.myvue.com/cinema/edinburgh-omni-centre/whats-on">
        <button id="showtimes">Get Showtimes for Vue Edinburgh</button>
        </a>
        <hr></hr>
        </div>
    )
  }
}


export default MovieScaffold;
