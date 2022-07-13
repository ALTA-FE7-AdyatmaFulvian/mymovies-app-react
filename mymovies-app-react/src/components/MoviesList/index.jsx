import React, { Component } from "react";
import Card from "../Card/index";

export class Movies extends Component {
  state = {
    filmList: [
      {
        id: 1,
        title: "Thor: Love and Thunder (R13+)",
        image:
          "https://media.21cineplex.com/webcontent/gallery/pictures/165589422282087_290x426.jpg",
      },
      {
        id: 2,
        title: "Minions 2: The Rise of Gru (SU)",
        image:
          "https://media.21cineplex.com/webcontent/gallery/pictures/165460605844936_290x426.jpg",
      },
      {
        id: 3,
        title: "Everything Everywhere All at Once (D17+)",
        image:
          "https://media.21cineplex.com/webcontent/gallery/pictures/165604137831090_290x426.jpg",
      },
      {
        id: 4,
        title: "Keluarga Cemara 2 (SU)",
        image:
          "https://media.21cineplex.com/webcontent/gallery/pictures/165467604350903_290x426.jpg",
      },
      {
        id: 5,
        title: "Ngeri-ngeri Sedap (R13+)",
        image:
          "https://media.21cineplex.com/webcontent/gallery/pictures/16529343191301_290x426.jpg",
      },
      {
        id: 6,
        title: "Top Gun: Maverick (SU)",
        image:
          "https://media.21cineplex.com/webcontent/gallery/pictures/165052703561352_290x426.jpg",
      },
      {
        id: 7,
        title: "Ivanna (D17+)",
        image:
          "https://media.21cineplex.com/webcontent/gallery/pictures/165467588636709_290x426.jpg",
      },
      {
        id: 8,
        title: "The Mauritanian (D17+)",
        image:
          "https://media.21cineplex.com/webcontent/gallery/pictures/165587319131864_290x426.jpg",
      },
      {
        id: 9,
        title: "Ranah 3 Warna (SU)",
        image:
          "https://media.21cineplex.com/webcontent/gallery/pictures/165518998566428_290x426.jpg",
      },
      {
        id: 10,
        title: "Elvis (D17+)",
        image:
          "https://media.21cineplex.com/webcontent/gallery/pictures/165509920350985_290x426.jpg",
      },
    ],
  };
  render() {
    return (
      <>
        <h1 className="text-3xl font-semibold text-center">Now Playing</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 py-4">
          {this.state.filmList.map((data) => (
            <Card key={data.id} title={data.title} image={data.image} />
          ))}
        </div>
      </>
    );
  }
}

export default Movies;
