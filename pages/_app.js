import { useState } from "react";
import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import ArtPiecesPorvider from "@/store/artPiecesProvider";

// const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  // const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  // // get all pieces from the api using useSWR
  // const { data: allArtPieces } = useSWR(
  //   "https://example-apis.vercel.app/api/art",
  //   fetcher
  // );
  // if (!allArtPieces) {
  //   return <p>Loading...</p>;
  // }

  // //toggle favorite
  // const handleToggleFavorite = (slug) => {
  //   const artPiece = artPiecesInfo.find((pieceInfo) => pieceInfo.slug === slug);
  //   //if there is already existing a object, change the isFavorite to the oppsite
  //   if (artPiece) {
  //     setArtPiecesInfo(
  //       artPiecesInfo.map((pieceInfo) => {
  //         return pieceInfo.slug === slug
  //           ? { slug, isFavorite: !pieceInfo.isFavorite }
  //           : pieceInfo;
  //       })
  //     );
  //   }
  //   // if there is no correspongding object, add one and set isFavorite to true
  //   else {
  //     setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
  //   }
  // };

  // //add comment
  // const handleSubmitComment = (event, slug) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const data = Object.fromEntries(formData);
  //   const newComment = data.comment;

  //   const artPiece = artPiecesInfo.find(
  //     (artPieceInfo) => artPieceInfo.slug === slug
  //   );
  //   // update the targeted artPiece comment if there is already a artPiece
  //   if (artPiece) {
  //     const comments = artPiece.comments;
  //     const newArtPieceInfo = {
  //       ...artPiece,
  //       comments: [...comments, newComment],
  //     };
  //     //update the artPiecesInfo
  //     const updatedArtPieces = artPiecesInfo.map((artPieceInfo) => {
  //       if (artPieceInfo.slug === slug) {
  //         return newArtPieceInfo;
  //       } else return artPieceInfo;
  //     });
  //     setArtPiecesInfo(updatedArtPieces);
  //   } else {
  //     setArtPiecesInfo([
  //       ...artPiecesInfo,
  //       { slug, comments: [newComment], isFavorite: false },
  //     ]);
  //   }
  //   event.target.reset();
  // };

  return (
    <SWRConfig value={{ fetcher }}>
      <ArtPiecesPorvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ArtPiecesPorvider>
    </SWRConfig>
  );
}
