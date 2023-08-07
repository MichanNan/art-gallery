import { useState } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  // get all pieces from the api using useSWR
  const { data: allArtPieces } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        allArtPieces={allArtPieces}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
