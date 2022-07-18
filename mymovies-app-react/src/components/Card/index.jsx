import { Link } from "react-router-dom";

export default function Card({ id, title, image }) {
  return (
    <Link to={`/detail/${id}`} reloadDocument>
      <div className="flex flex-col m-4">
        <img
          src={
            image
              ? `https://image.tmdb.org/t/p/w500/${image}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={title}
          className="rounded-xl h-80 w-auto my-1"
        />
        <p className="mx-0 my-auto text-left text-white font-bold">{title}</p>
      </div>
    </Link>
  );
}
