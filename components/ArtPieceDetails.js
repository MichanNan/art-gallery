import FavoriteButton from "./FavoriteButton";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "react-bootstrap";

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
    <div className="container mt-2 mb-2 text-center d-flex flex-column align-items-center justify-content-center">
      <div className="row align-items-start">
        <Button className="col-lg-12 offset-lg-3 " onClick={handleGoBack}>
          {"< Back"}
        </Button>
      </div>
      <p className="">{`${detailArtPiece.name} by ${detailArtPiece.artist}`}</p>

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

        <p>{`${detailArtPiece.year}(${detailArtPiece.genre})`}</p>
      </div>
      <ul className="d-flex">
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
    </div>
  );
}
