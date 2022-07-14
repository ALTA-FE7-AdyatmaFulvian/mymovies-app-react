import React, { Component } from "react";
import Card from "../Card/index";
import axios from "axios";
import Slider from "react-slick";

export class NowPlaying extends Component {
  state = {
    nowPlayingList: [],
    loading: false,
  };

  async componentDidMount() {
    await this.fetchData();
  }

  async fetchData() {
    this.setState({ loading: true });
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      )
      .then((response) => {
        const { results } = response.data;
        if (results) {
          this.setState({ nowPlayingList: results });
        }
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <h1 className="text-3xl font-semibold text-center">Now Playing</h1>
        <div className="py-4">
          <Slider {...settings}>
            {this.state.nowPlayingList.map((data) => (
              <Card key={data.id} title={data.title} image={data.poster_path} />
            ))}
          </Slider>
        </div>
      </>
    );
  }
}

export default NowPlaying;
