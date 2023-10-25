import { useState } from "react";

export default function HornedBeast(props) {
  const [likes, setLikes] = useState(0);
  function handleClicks() {
    setLikes(likes + 1);
    console.log("hello");
  }
  return (
    <div className="animals">
      <h2>{props.title}</h2>
      <img
        src={props.image_url}
        alt={props.title}
        onClick={props.handleLikes}
      />
      <p>{props.description}</p>
      <p>Favourites: {props.likes} </p>
      <p>onClick={handleClicks}</p>
    </div>
  );
}
