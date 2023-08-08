import Navigation from "@/components/Navigation";
import SpotLight from "@/components/SpotLight";

import { useState, useContext } from "react";
import { ArtPiecesContext } from "@/store/artPieces-context";

import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const artPiecesCtx = useContext(ArtPiecesContext);

  // logic for get random art piece
  const getRandomPiece = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const [randomPiece, setRandomPiece] = useState(
    getRandomPiece(artPiecesCtx.allArtPieces)
  );

  // get random piece when clicking on the button
  const handleGetRandomArtPiece = (event) => {
    event.preventDefault();
    setRandomPiece(getRandomPiece(artPiecesCtx.allArtPieces));
  };

  return (
    <div className="d-flex justify-content-center vh-100 mt-4">
      <SpotLight
        randomPiece={randomPiece}
        onGetRandomPiece={handleGetRandomArtPiece}
        artPiecesInfo={artPiecesCtx.artPiecesInfo}
        onToggleFavorite={artPiecesCtx.onToggleFavorite}
      />
      <Navigation />
    </div>
  );
}
