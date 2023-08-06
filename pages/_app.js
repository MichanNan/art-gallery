import GlobalStyle from "../styles";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function App({ Component, pageProps }) {
  // get all pieces from the api using useSWR
  const { data: allArtPieces } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (!allArtPieces) {
    return;
  }

  //select a random piece

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} allArtPieces={allArtPieces} />
    </>
  );
}
