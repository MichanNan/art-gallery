import ArtPieceDetails from "@/components/ArtPieceDetails";
import { ArtPiecesContext } from "@/store/artPieces-context";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function ArtPieceDetailPage({ onSubmitComment }) {
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

  return (
    <>
      <ArtPieceDetails
        detailArtPiece={detailArtPiece}
        detailedArtPieceInfo={detailedArtPieceInfo}
        onSubmitComment={onSubmitComment}
        onToggleFavorite={ArtPiecesCtx.onToggleFavorite}
      />
    </>
  );
}
