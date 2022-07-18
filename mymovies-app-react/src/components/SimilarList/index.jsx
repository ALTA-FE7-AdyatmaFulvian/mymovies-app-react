import { useEffect, useState } from "react";
import Card from "../Card/index";
import axios from "axios";
import Slider from "react-slick";

export default function Similar({ movieId }) {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      );
      const { results } = response.data;
      if (results) {
        setMovies(results);
      }
    } catch (error) {
      alert(error.toString());
    }
  };

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
    <div className="p-12">
      <h1 className="text-3xl font-semibold text-center">Similar</h1>
      <div className="py-4">
        <Slider {...settings}>
          {movies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.poster_path}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
