import ArtPieces from "@/components/ArtPieces";
import Navigation from "@/components/Navigation";

export default function ArtPiecesPage({ allArtPieces }) {
  return (
    <>
      <ArtPieces allArtPieces={allArtPieces} />
      <Navigation />
    </>
  );
}
