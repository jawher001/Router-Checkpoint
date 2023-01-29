import { Params, useParams } from "react-router-dom";

const MovieInfo=(Movie)=> {
  const {idmovie}=useParams()
  const moviein =Movie.find((el)=> el.id == idmovie )
    return (
      <div>
   <img src={moviein.posterURL} />
   </div>
    );
  }
  
  export default MovieInfo;