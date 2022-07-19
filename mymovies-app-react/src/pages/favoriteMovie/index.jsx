import { useSelector } from "react-redux";

import { Layout } from "../../components/Layout";
import Card from "../../components/Card/index";

export default function FavoriteMovie() {
  const favMovies = useSelector((state) => state.favorites);
  return (
    <Layout>
      <div className="py-4 flex min-h-screen">
        {favMovies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
          />
        ))}
      </div>
    </Layout>
  );
}
