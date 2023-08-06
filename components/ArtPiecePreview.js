import Image from "next/image";

export default function ArtPiecePreview({
  imageSource,
  name,
  dimensions,
  artist,
}) {
  return (
    <div>
      <Image
        src={imageSource}
        alt={name}
        width={dimensions.width * 0.1}
        height={dimensions.height * 0.1}
      />
      <p>{`${name} by ${artist}`}</p>
    </div>
  );
}
