import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <div>
        <Link href={"/"}>Spotlight</Link>
        <Link href={"/art-pieces"}>ArtPieces</Link>
        <Link href={"/favorite"}>Favorite</Link>
      </div>
    </>
  );
}
