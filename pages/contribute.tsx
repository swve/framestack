import Layout from "../components/layout";
import Link from "next/link";

const Contribute = props => {
  return (
    <Layout title="Contribute" desc="Framestack needs your contributions">
      <div className="hero-build">
        <h1>Contribute</h1>
        <p>Framestack is a free web app ressource created and maintained by only me, which means that I can't manage to add all the frameworks/libraies/tools that actually exists <br></br>
        To help me grow the list and help more people you can submit a framework/library tool using this form : </p>
        <Link  href="https://docs.google.com/forms/d/e/1FAIpQLScbhgYEsXdLQLTA5UnJXHxhSWpjH2AALSFgk8BH7UT7BBC1Vw/viewform?usp=pp_url"><a target="_blank" >Add a framework/library/tool</a></Link><br></br>
      <br></br><br></br><br></br>
      </div>
    </Layout>
  );
};



export default Contribute;
