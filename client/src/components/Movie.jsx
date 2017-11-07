import React from "react";

class Movie extends React.Component {

  render() {
    return (
      <div className="movie">
        <b>{this.props.title}</b><a href={this.props.link}>See more details</a>
      </div>
    )

  }

}


export default Movie;
