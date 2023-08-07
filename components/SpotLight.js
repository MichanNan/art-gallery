import FavoriteButton from "./FavoriteButton";

import Image from "next/image";

export default function ({
  randomPiece,
  onToggleFavorite,
  artPiecesInfo,
  onGetRandomPiece,
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
        <button
          onClick={(event) => {
            onGetRandomPiece(event);
          }}
        >
          Get Random Art Piece
        </button>
      </div>
    </>
  );
}
