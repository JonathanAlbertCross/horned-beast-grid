import { useState } from "react";

export default function HornedBeast(props) {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <div className="animals">
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.title} onClick={props.handleLikes} />
      <p>{props.description}</p>
      <p>Favourites: {props.likes} </p>
    </div>
  );
}
