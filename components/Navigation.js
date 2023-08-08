import Link from "next/link";

import { useRouter } from "next/router";

import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <Nav className="navbar navbar-expand bg-body-tertiary fixed-bottom justify-content-center">
        <div className="container d-flex  navbar-nav row">
          <Link
            className={`nav-link ${
              router.route === "/" ? "active" : ""
            } col text-center`}
            aria-current="page"
            href="/"
          >
            Spotlight
          </Link>
          <Link
            className={`nav-link ${
              router.route === "/art-pieces" ? "active" : ""
            } col text-center`}
            href="/art-pieces"
          >
            ArtPieces
          </Link>
          <Link
            className={`nav-link ${
              router.route === "/favorites" ? "active" : ""
            } col text-center`}
            href="/favorites"
          >
            Favorite
          </Link>
        </div>
      </Nav>
    </>
  );
}
