import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailPage({
  allArtPieces,
  onToggleFavorite,
  artPiecesInfo,
  onSubmitComment,
}) {
  const router = useRouter();
  const { slug } = router.query;

  // get single art piece according to the slug
  const detailArtPiece = allArtPieces.find((piece) => {
    return piece.slug === slug;
  });

  //get single art piece info according to the slug
  const detailedArtPieceInfo = artPiecesInfo.find(
    (pieceInfo) => pieceInfo.slug === slug
  );

  return (
    <>
      <ArtPieceDetails
        detailArtPiece={detailArtPiece}
        onToggleFavorite={() => onToggleFavorite(slug)}
        detailedArtPieceInfo={detailedArtPieceInfo}
        onSubmitComment={onSubmitComment}
      />
    </>
  );
}
