import ArtPieces from "@/components/ArtPieces";
import Navigation from "@/components/Navigation";

import { ArtPiecesContext } from "@/store/artPieces-context";
import { useContext } from "react";

export default function ArtPiecesPage() {
  const ArtPiecesCtx = useContext(ArtPiecesContext);
  return (
    <div className="">
      <ArtPieces
        artPieces={ArtPiecesCtx.allArtPieces}
        artPiecesInfo={ArtPiecesCtx.artPiecesInfo}
        onToggleFavorite={ArtPiecesCtx.onToggleFavorite}
      />
      <Navigation />
    </div>
  );
}
