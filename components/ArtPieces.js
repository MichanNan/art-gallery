import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <ul>
        {artPieces.map((piece) => {
          return (
            <li key={piece.slug}>
              <ArtPiecePreview
                {...piece}
                artPiecesInfo={artPiecesInfo}
                onToggleFavorite={onToggleFavorite}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
