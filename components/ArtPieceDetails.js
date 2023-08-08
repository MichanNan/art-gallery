import FavoriteButton from "./FavoriteButton";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

import { useRouter } from "next/router";
import Image from "next/image";

export default function ArtPieceDetails({
  detailArtPiece,
  detailedArtPieceInfo,
  onSubmitComment,
  onToggleFavorite,
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
          onToggleFavorite={() => onToggleFavorite(detailArtPiece.slug)}
          isFavorite={detailedArtPieceInfo?.isFavorite}
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
      <ul>
        {detailArtPiece.colors.map((color) => (
          <li key={color}>
            <div
              style={{
                backgroundColor: `${color}`,
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
              }}
            />
          </li>
        ))}
      </ul>
      <Comments comments={detailedArtPieceInfo?.comments} />
      <CommentForm
        onSubmitComment={onSubmitComment}
        slug={detailArtPiece.slug}
      />
    </>
  );
}
