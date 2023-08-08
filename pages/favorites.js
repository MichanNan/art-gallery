import ArtPieces from "@/components/ArtPieces";
import Navigation from "@/components/Navigation";

import { ArtPiecesContext } from "@/store/artPieces-context";
import { useContext } from "react";

export default function FavoritesPage() {
  const ArtPiecesCtx = useContext(ArtPiecesContext);

  // filter all the art pieces that the property isFavorite is true
  const favoritePiecesInfo = ArtPiecesCtx.artPiecesInfo.filter((artPiece) => {
    return artPiece.isFavorite === true;
  });

  const favoritePieces = ArtPiecesCtx.allArtPieces.filter((artPiece) =>
    favoritePiecesInfo.find(
      (artPieceInfo) => artPieceInfo.slug === artPiece.slug
    )
  );

  return (
    <>
      <ArtPieces
        artPieces={favoritePieces}
        artPiecesInfo={ArtPiecesCtx.artPiecesInfo}
        onToggleFavorite={ArtPiecesCtx.onToggleFavorite}
      />
      <Navigation />
    </>
  );
}
