// const Moviecard = ({Movie})=>{
//     return(
//         <div >
//             <img width="320" src={Movie.posterURL}/>
//             <h5>{Movie.title}</h5>
//             <p>{Movie.description}</p>
//             <p>{Movie.rating}</p>
//         </div>

//     )
// }
// export default Moviecard

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Moviecard({ Movie }) {
  return (
    <Card
      style={{ width: "18rem", marginTop: "10px", backroundColor: "black" }}
    >
      <Card.Img
        variant="top"
        src={Movie.posterURL}
        width="320
      "
      />
      <Card.Body>
        <Card.Title>{Movie.title}</Card.Title>
        <Card.Text>BIO: {Movie.description}</Card.Text>
        <Card.Text>
          Rating: {Movie.rating}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
        </Card.Text>
        <Link to={"/movieinfo/${Movie.id}"}>
        <Button variant="primary">WATCH MOVIE</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Moviecard;
