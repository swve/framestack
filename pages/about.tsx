import Layout from "../components/layout";
import Image from 'next/image'

const About = (props) => {
  return (
    <Layout title="About" desc="About page">
      <div className="hero-build">
        <div style={{textAlign:"center"}}>
          {" "}
          <br></br>
          <img src="../img/logo.png"/>
          
          <p>
          <br></br>
            Framestack helps you choose and find the perfect tool or framework
            to use to build and start your project, you can find your perfet tool by usage and soon by language, Framestack is an evolution of <b><a target="_blank" href="http://frame.graphicmade.com">Frame</a> </b>
            it's predecessor {" "}<br></br>
            Built on Node.js, React, NextJS it means that it's incredibly very fast, SEO ready, Future proof and soon avalaible in mobile 🌀
            <br></br><br></br>
            <img width={500} src="https://graphicmade.com/content/images/2020/01/DW1szauXUAEDtnt.jpg"/>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
