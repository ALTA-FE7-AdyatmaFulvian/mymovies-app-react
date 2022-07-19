import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { Layout } from "../../components/Layout";
import Similar from "../../components/SimilarList";
import { reduxAction } from "../../utils/redux/actions/action";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { MdArrowBackIosNew, MdStarOutline } from "react-icons/md";

const timeConvert = (num) => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  return `${hours}hr ${minutes}min`;
};

export default function DetailMovie() {
  const { movie_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  const genre =
    movie.length !== 0
      ? Array.from(movie.genres.map((genre) => genre.name))
      : "";
  const duration = timeConvert(movie.runtime);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      );
      const { data } = response;
      if (data) {
        setMovie(data);
      }
    } catch (error) {
      alert(error.toString());
    }
  };

  const handleFav = (movie) => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      const item = parsedMovies.find((value) => value.id === movie.id);
      if (!item) {
        parsedMovies.push(movie);
        localStorage.setItem("favMovies", JSON.stringify(parsedMovies));
        dispatch(reduxAction("ADD_FAVORITE", parsedMovies));
        alert("Added to Favorite");
      } else {
        alert("Already Favorite");
      }
    } else {
      localStorage.setItem("favMovies", JSON.stringify([movie]));
      dispatch(reduxAction("ADD_FAVORITE", [movie]));
    }
  };
  return (
    <Layout>
      <div
        className="w-full h-auto flex bg-cover"
        style={{
          backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`})`,
        }}
      >
        <div className="w-full flex backdrop-opacity-40 backdrop-invert p-12">
          <figure>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={movie.title}
              className="rounded-xl w-80 h-auto my-1"
            />
          </figure>
          <section className="px-4 mx-4 w-2/3 text-justify">
            <h2 className="font-bold text-lg">
              {movie.release_date?.substring(0, 4)}
            </h2>
            <h1 className="font-bold text-5xl my-6">{movie.title}</h1>
            <h3 className="inline text-lg">{duration} | </h3>
            <h3 className="inline mx-0 my-auto text-lg font-semibold">
              {genre !== "" ? genre.join(" \u2022  ") : ""}
            </h3>
            <h2 className="font-bold text-3xl my-4">
              <span className="font-medium text-xl">Rating:</span>{" "}
              {movie.vote_average}
            </h2>
            <p className="my-3 text-lg font-medium">{movie.overview}</p>
            <ButtonGroup
              variant="solid"
              spacing="10"
              size="lg"
              className="my-8"
            >
              <Button
                leftIcon={<MdArrowBackIosNew />}
                colorScheme="blue"
                borderRadius="500px"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
              <Button
                leftIcon={<MdStarOutline />}
                colorScheme="yellow"
                borderRadius="500px"
                onClick={() => handleFav(movie)}
              >
                Add to favorite
              </Button>
            </ButtonGroup>
          </section>
        </div>
      </div>
      <Similar movieId={movie_id} />
    </Layout>
  );
}
