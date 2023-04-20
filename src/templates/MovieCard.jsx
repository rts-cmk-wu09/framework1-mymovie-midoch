import Image from "../components/Image";
import HeadingTree from "../components/HeadingTree";
import MovieRating from "../components/MovieRating";

const MovieCard = () => {
  return (
    <article>
      <figure>
        <Image />
        <HeadingTree />
        <MovieRating />
      </figure>
    </article>
  );
};

export default MovieCard;
