import ArtPieceDetails from "@/components/ArtPieceDetails";
import { ArtPiecesContext } from "@/store/artPieces-context";
import { useRouter } from "next/router";
import { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function ArtPieceDetailPage() {
  const ArtPiecesCtx = useContext(ArtPiecesContext);
  const router = useRouter();
  const { slug } = router.query;

  // get single art piece according to the slug
  const detailArtPiece = ArtPiecesCtx.allArtPieces.find((piece) => {
    return piece.slug === slug;
  });

  //get single art piece info according to the slug
  const detailedArtPieceInfo = ArtPiecesCtx.artPiecesInfo.find(
    (pieceInfo) => pieceInfo.slug === slug
  );

  //add comment
  const handleSubmitComment = (event, slug) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newComment = data.comment;

    const artPiece = ArtPiecesCtx.artPiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === slug
    );
    // update the targeted artPiece comment if there is already a artPiece
    if (artPiece) {
      const comments = artPiece.comments;
      const newArtPieceInfo = {
        ...artPiece,
        comments: [...comments, newComment],
      };
      //update the artPiecesInfo
      const updatedArtPieces = ArtPiecesCtx.artPiecesInfo.map(
        (artPieceInfo) => {
          if (artPieceInfo.slug === slug) {
            return newArtPieceInfo;
          } else return artPieceInfo;
        }
      );
      ArtPiecesCtx.setArtPiecesInfo(updatedArtPieces);
    } else {
      ArtPiecesCtx.setArtPiecesInfo([
        ...ArtPiecesCtx.artPiecesInfo,
        { slug, comments: [newComment], isFavorite: false },
      ]);
    }
    event.target.reset();
  };

  return (
    <>
      <ArtPieceDetails
        detailArtPiece={detailArtPiece}
        detailedArtPieceInfo={detailedArtPieceInfo}
        onSubmitComment={handleSubmitComment}
        onToggleFavorite={ArtPiecesCtx.onToggleFavorite}
      />
    </>
  );
}
