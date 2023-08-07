import ArtPieces from "@/components/ArtPieces";
import Navigation from "@/components/Navigation";

export default function FavoritesPage({
  allArtPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  // filter all the art pieces that the property isFavorite is true
  const favoritePiecesInfo = artPiecesInfo.filter((artPiece) => {
    return artPiece.isFavorite === true;
  });

  const favoritePieces = allArtPieces.filter((artPiece) =>
    favoritePiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === artPiece.slug
    )
  );

  return (
    <>
      <ArtPieces
        artPieces={favoritePieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
      <Navigation />
    </>
  );
}
