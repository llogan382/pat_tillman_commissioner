import "../style.css";
import PTCHeader from "../components/PTCHeader";
import MobileHeader from "../components/MobileHeader";


export default function App({ Component, pageProps }) {
  return (
    <>
      <PTCHeader />
<MobileHeader />
      <Component {...pageProps} />
    </>
  );
}
