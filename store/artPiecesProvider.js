import { useState } from "react";
import { ArtPiecesContext } from "./artPieces-context";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function ArtPiecesPorvider({ children }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const { data: allArtPieces } = useSWR(URL);
  if (!allArtPieces) {
    return <p>Loading...</p>;
  }

  //toggle favorite
  const handleToggleFavorite = (slug) => {
    const artPiece = artPiecesInfo.find((pieceInfo) => pieceInfo.slug === slug);
    //if there is already existing a object, change the isFavorite to the oppsite
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) => {
          return pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo;
        })
      );
    }
    // if there is no correspongding object, add one and set isFavorite to true
    else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  };

  const artPiecesContext = {
    allArtPieces: allArtPieces,
    artPiecesInfo: artPiecesInfo,
    onToggleFavorite: handleToggleFavorite,
  };
  return (
    <ArtPiecesContext.Provider value={artPiecesContext}>
      {children}
    </ArtPiecesContext.Provider>
  );
}
