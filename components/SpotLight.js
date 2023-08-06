import Image from "next/image";

export default function ({ randomPiece }) {
  return (
    <>
      <div>
        <Image
          src={randomPiece.imageSource}
          alt={randomPiece.name}
          width={randomPiece.dimensions.width * 0.2}
          height={randomPiece.dimensions.height * 0.2}
        />
        <p>{`${randomPiece.name} by ${randomPiece.artist}`}</p>
      </div>
    </>
  );
}
