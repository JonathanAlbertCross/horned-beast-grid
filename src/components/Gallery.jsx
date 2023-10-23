import React from "react";
import HornedBeast from "./HornedBeast";

function Gallery() {
  const hornedBeastsData = [
    {
      title: "Markhor",
      imageUrl: process.env.PUBLIC_URL + "./markhor.jpeg",
      description:
        "The markhor, according to ARKive, lives in the mountains of central Asia, adeptly climbing craggy rocks with the grace of North America's own mountain goat. ",
    },
    {
      title: "Saiga",
      imageUrl: process.env.PUBLIC_URL + "./saiga.jpeg",
      description:
        "Native to the dusty steppes of Kazakhstan, Russia, and sometimes Uzbekistan during migrations, the saiga is a truly absurd-looking and delightful antelope",
    },
  ];

  return (
    <div>
      {hornedBeastsData.map((data, index) => (
        <HornedBeast
          key={index}
          title={data.title}
          imageUrl={data.imageUrl}
          description={data.description}
        />
      ))}
    </div>
  );
}

export default Gallery;
