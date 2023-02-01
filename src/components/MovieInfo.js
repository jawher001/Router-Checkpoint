import { Params, useParams } from "react-router-dom";

const MovieInfo = ({ Movie }) => {
  const { idmovie } = useParams();
  const movie = Movie.find((el) => el.id == idmovie);
  return (
    <div
      style={{
        
        justifyContent: "centre",
      
      }}
    >
      <h1>{movie.title}</h1>
      <img width="320" src={movie.posterURL} />
      <p>{movie.description}</p>
      <iframe
        height="300"
        width="500"
        src={movie.trailer}
        title="Trailer"
      ></iframe>
      <img
        width="1000"
        src="https://media0.giphy.com/media/fbHFJR5vXcWgXpKEXK/giphy.gif?cid=ecf05e479q8c8ya3yxn9z8fi8ih87wlu1l2eu4lyywc6u93g&rid=giphy.gif&ct=g"
      />
    </div>
  );
};

export default MovieInfo;
