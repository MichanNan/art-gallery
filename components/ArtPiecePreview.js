import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({
  imageSource,
  name,
  dimensions,
  artist,
  slug,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const isFavorite = artPiecesInfo.find((artPiece) => {
    return artPiece.slug === slug;
  })?.isFavorite;
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={imageSource}
          alt={name}
          width={dimensions.width * 0.2}
          height={dimensions.height * 0.2}
        />
      </Link>
      <FavoriteButton
        onToggleFavorite={() => onToggleFavorite(slug)}
        isFavorite={isFavorite}
      />
      <p>{`${name} by ${artist}`}</p>
    </div>
  );
}
