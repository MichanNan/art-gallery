import Favorite from "../public/heart.svg";
export default function ({ onToggleFavorite, isFavorite }) {
  return (
    <>
      <Favorite
        onClick={onToggleFavorite}
        style={{
          width: "2rem",
          height: "2rem",
          position: "absolute",
          fill: isFavorite ? "red" : "black",
        }}
      />
    </>
  );
}
