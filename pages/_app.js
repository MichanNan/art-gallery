import GlobalStyle from "../styles";
import ArtPiecesPorvider from "@/store/artPiecesProvider";
import { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ArtPiecesPorvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ArtPiecesPorvider>
    </SWRConfig>
  );
}
