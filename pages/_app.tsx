import NextNProgress from "nextjs-progressbar";
import "../styles/style.scss";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider
      domain={process.env.ANALYTICS_DOMAIN}
      customDomain={process.env.ANALYTICS_CUSTOM_DOMAIN}
      selfHosted={true}
    >
      <NextNProgress
        color="#5c19ef"
        startPosition={0.3}
        stopDelayMs={1}
        height={4}
        options={{ easing: "ease", speed: 500, showSpinner: false }}
      />
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
