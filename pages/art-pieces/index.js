import ArtPieces from "@/components/ArtPieces";
import Navigation from "@/components/Navigation";

export default function ArtPiecesPage({
  allArtPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <ArtPieces
        artPieces={allArtPieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
      <Navigation />
    </>
  );
}
