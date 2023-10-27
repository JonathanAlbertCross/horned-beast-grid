import { useState } from "react";

export default function HornedBeast(props) {
  const [likes, setLikes] = useState(0);
  const [scared, setScared] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
    console.log("hello");
  }
  function handleScared() {
    setScared(scared + 1);
    console.log("hello");
  }
  function handleReset() {
    setLikes(likes - likes);
    setScared(scared - scared);
  }

  return (
    <div className="animals">
      <h2 className="titleCSS">{props.title}</h2>
      <img
        src={props.image_url}
        alt={props.title}
        onClick={props.handleLikes}
      />
      <p>{props.description}</p>
      <button onClick={handleLikes}>Favourites: {likes} </button>
      <button onClick={handleScared}>Scared:{scared}</button>
      <p className="resetCSS" onClick={handleReset}>
        Reset
      </p>

      <button onClick={() => props.handleShowModal(props)}>
        Show/Hide Modal
      </button>
    </div>
  );
}

// function Parent() {
//   return <Child name={"Tim"} />;
// }

// // We are destructuring an object
// let { name, age } = {
//   name: "Tim",
//   age: 9,
// };

// console.log(name);

// function Child() {
//   return <p>{name}</p>;
// }
