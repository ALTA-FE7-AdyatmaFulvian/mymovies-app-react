import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className="flex flex-col m-4">
        <img
          src={
            this.props.image
              ? `https://image.tmdb.org/t/p/w500/${this.props.image}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={this.props.title}
          className="rounded-xl h-80 w-auto my-1"
        />
        <p className="mx-0 my-auto text-left text-white font-bold">
          {this.props.title}
        </p>
      </div>
    );
  }
}

export default Card;
