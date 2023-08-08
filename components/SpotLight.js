import FavoriteButton from "./FavoriteButton";

import Image from "next/image";

import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ({
  randomPiece,
  onGetRandomPiece,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const isFavorite = artPiecesInfo.find(
    (pieceInfo) => pieceInfo.slug === randomPiece.slug
  )?.isFavorite;
  return (
    <>
      <div>
        <FavoriteButton
          onToggleFavorite={() => onToggleFavorite(randomPiece.slug)}
          isFavorite={isFavorite}
        />
        <Image
          src={randomPiece.imageSource}
          alt={randomPiece.name}
          width={randomPiece.dimensions.width * 0.2}
          height={randomPiece.dimensions.height * 0.2}
        />
        <p>{`${randomPiece.name} by ${randomPiece.artist}`}</p>
        <div className="d-flex justify-content-center">
          <Button
            onClick={(event) => {
              onGetRandomPiece(event);
            }}
          >
            Get Random Art Piece
          </Button>
        </div>
      </div>
    </>
  );
}
