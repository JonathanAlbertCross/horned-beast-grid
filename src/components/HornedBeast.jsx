import React from "react";

export default function HornedBeast(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.title} title={props.title} />
      <p>{props.description}</p>
    </div>
  );
}
