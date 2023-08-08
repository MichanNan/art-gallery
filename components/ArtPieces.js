import ArtPiecePreview from "./ArtPiecePreview";

import "bootstrap/dist/css/bootstrap.min.css";
export default function ArtPieces({
  artPieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <div className="container-fluid text-center mb-5 ">
      <ul className="row justify-content-center">
        {artPieces.map((piece) => {
          return (
            <li
              key={piece.slug}
              className="border col-lg-4 col-lg-offset-2 m-2 rounded  d-flex align-items-center  justify-content-center  bg-body-secondary"
            >
              <ArtPiecePreview
                {...piece}
                artPiecesInfo={artPiecesInfo}
                onToggleFavorite={onToggleFavorite}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
