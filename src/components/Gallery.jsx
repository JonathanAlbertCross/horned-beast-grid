import HornedBeast from "./HornedBeast";

export default function Gallery({ hornedBeastsData }) {
  return (
    <div>
      {hornedBeastsData.map((data, index) => (
        <HornedBeast
          key={index}
          title={data.title}
          image_url={data.image_url}
          description={data.description}
        />
      ))}
    </div>
  );
}
