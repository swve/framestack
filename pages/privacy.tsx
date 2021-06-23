import Layout from "../components/layout";

const Privacy = (props) => {
  return (
    <Layout title="Privacy" desc="Privacy Policy">
      <div className="hero-privacy" >
        <h1>Privacy</h1>
        <h2>Analytics</h2>
        <p>
          We use Plausible Analytics, an alternative independent, minimal web
          analytics tool
        </p>
        <a href="https://plausible.io/privacy-focused-web-analytics">
          Plausible analytics
        </a>
        <h2>Data Collection </h2>
        <h4>Personal data </h4>
        <p>
          No personal data are collected such as :
          <ul style={{ marginTop: 15 }}>
            <li>- IP Adresses</li>
            <li>- Individual data</li>
            <li>- No cookies are used</li>
          </ul>
        </p>
        <p>
          You can explore the complete list of collected data points below :
        </p>
        <a
          href="https://plausible.io/data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Plausible Datapoints
        </a>
        <h4>All data is in aggregate only</h4>
        <h4>No tracking across devices</h4>
        <p>
          We do not track people across their devices. All the data is isolated
          to a single device only. There is no way to know whether the same
          person visits a site from more than one device.
        </p>
        <h4>No tracking across websites and apps</h4>
        <p>
          We do not track people across websites and apps that they visit. All
          the data is isolated to a single website only. There is no way to know
          what other websites someone visits
        </p>
        <h4>All data is isolated to a single day</h4>
        <p>
          All the data is isolated to a single day only. There is no way to know
          whether the same person comes back to a site on another day.
        </p>
        <h4>No cookies and other persistent identifiers</h4>
        <p>
          We do not generate any persistent identifiers either. We generate a
          random string of letters and numbers that is used to calculate unique
          visitors on a website and we reset this string once per day. This
          makes us compliant with the different cookie laws and privacy
          regulations such as GDPR and PECR. By not using cookies you do not
          need to obtain consent from the visitors to store and retrieve data
          from their devices. It’s one less thing to worry about and annoy your
          visitors with.
        </p>
        <h2>Hosting</h2>
        <h4>Analytics Server</h4>
        <p>
          Framestack Analytics server is hosted on a european server, This
          ensures that all analytics data is being covered by the European
          Union’s strict laws on data privacy
        </p>
        <h4>Analytics Server address  </h4>
        <p>
          - Hosting : Scaleway Elements (Online SAS - 8 rue de la Ville
          l’Evêque, 75008 Paris) <br />- Server : Amsterdam
        </p>
        <h4>Web Server</h4>
        <p>We use Vercel as a front-end platform to host & deploy Framestack</p>
        <h2>Code verification </h2>
        <p>Framestack code is completely open-source, I even deploy the website directly from the github repository</p> 
        <p>Check Framestack's code source at : <a href="https://github.com/swve/framestack" target="_blank" rel="noopener noreferrer">swve/framestack</a></p>
      </div>
    </Layout>
  );
};

export default Privacy;
