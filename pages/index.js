import Navigation from "@/components/Navigation";
import SpotLight from "@/components/SpotLight";
import { useState } from "react";

export default function HomePage({
  allArtPieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  // logic for get random art piece
  const getRandomPiece = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const [randomPiece, setRandomPiece] = useState(getRandomPiece(allArtPieces));

  // get random piece when clicking on the button
  const handleGetRandomArtPiece = (event) => {
    event.preventDefault();
    setRandomPiece(getRandomPiece(allArtPieces));
  };

  return (
    <>
      <SpotLight
        randomPiece={randomPiece}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
        onGetRandomPiece={handleGetRandomArtPiece}
      />
      <Navigation />
    </>
  );
}
