import { createContext } from "react";

export const ArtPiecesContext = createContext({
  allArtPieces: [],
  artPiecesInfo: [],
  setArtPiecesInfo: () => {},
  onToggleFavorite: () => {},
});
