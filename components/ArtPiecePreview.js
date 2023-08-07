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
      <FavoriteButton
        onToggleFavorite={() => onToggleFavorite(slug)}
        isFavorite={isFavorite}
      />
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={imageSource}
          alt={name}
          width={dimensions.width * 0.1}
          height={dimensions.height * 0.1}
        />
      </Link>
      <p>{`${name} by ${artist}`}</p>
    </div>
  );
}
