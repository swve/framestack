import NextNProgress from 'nextjs-progressbar';
import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
      color="#5c19ef"
      startPosition={0.3}
      stopDelayMs={1}
      height={4}
      options={{ easing: "ease", speed: 500, showSpinner: false }}
    />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
