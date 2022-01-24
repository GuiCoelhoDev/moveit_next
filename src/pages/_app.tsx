import "../styles/global.scss";
import { ChallengesProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// TODO: POSSO colocar o setLevel no contexto?
