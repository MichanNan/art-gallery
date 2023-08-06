import Navigation from "@/components/Navigation";
import SpotLight from "@/components/SpotLight";

export default function HomePage({ allArtPieces }) {
  const getRandomPiece = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  const randomPiece = getRandomPiece(allArtPieces);

  return (
    <>
      <SpotLight randomPiece={randomPiece} />
      <Navigation />
    </>
  );
}
