import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <img
          src={this.props.image}
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
