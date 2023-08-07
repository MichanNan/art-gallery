import { useRouter } from "next/router";
import FavoriteButton from "./FavoriteButton";

import Image from "next/image";

export default function ArtPieceDetails({
  detailArtPiece,
  onToggleFavorite,
  isFavorite,
}) {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/art-pieces");
  };
  return (
    <>
      <p onClick={handleGoBack}>{`< Back`} </p>
      <div>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
        />
        <Image
          src={detailArtPiece.imageSource}
          alt={detailArtPiece.name}
          width={detailArtPiece.dimensions.width * 0.3}
          height={detailArtPiece.dimensions.height * 0.3}
        />
        <p>{`${detailArtPiece.name} by ${detailArtPiece.artist}`}</p>
        <p>{`${detailArtPiece.year}(${detailArtPiece.genre})`}</p>
      </div>
    </>
  );
}
