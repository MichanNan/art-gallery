import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ allArtPieces }) {
  return (
    <>
      <ul>
        {allArtPieces.map((piece) => {
          return (
            <li key={piece.slug}>
              <ArtPiecePreview {...piece} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
