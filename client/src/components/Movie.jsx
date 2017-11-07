import React from "react";

class Movie extends React.Component {

  render() {
    return (
      <div className="movie">
        <p><b>{this.props.title}</b></p><a href={this.link}>See more details</a>
      </div>
    )

  }

}


export default Movie;
