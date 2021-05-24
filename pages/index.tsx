import Layout from "../components/layout";
import Link from "next/link";
import { dataProvider } from "../services/dataProvider";
import ProductBox from "../components/ui/productbox";

const Index = props => (
  <Layout
    title="Discover tools & libraries to build your projects"
    desc="Collection of opensource libraries and frameworks and web and mobile tools to develop and make a project easily"
  >
    <div key="1" className="hero">
      <h1>Discover new ways to build things </h1>
      <p>
        Framestack is a free collection of frameworks/libraries and tools to
        build your next project without the hassle and in a record time{" "}
      </p>
      <div className="builds">
        <Link href="/build/web">
          <a className="build-btn">Web</a>
        </Link>
        <Link href="/build/mobile">
          <a className="build-btn">Mobile apps</a>
        </Link>
        <Link href="/build/api">
          <a className="build-btn">APIs</a>
        </Link>
        <Link href="/build/software">
          <a className="build-btn">Software</a>
        </Link>
        <Link href="/build/games">
          <a className="build-btn">Games</a>
        </Link>
        <Link href="/build/ai">
          <a className="build-btn">AI/Machine Learning</a>
        </Link>
        <Link href="/build/motion">
          <a className="build-btn">Motion</a>
        </Link>
        <Link href="/build/cloud">
          <a className="build-btn">Cloud <span style={{fontSize:8 , color:"#f9a911"}}>New</span></a> 
          
        </Link>
      </div>
    </div>
    <div className="frame-layout">
      {props.frameworks.map(item => (
        <ProductBox item={item} />
      ))}
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  // Get data from the website api
 const provider = new dataProvider;
 let data = provider.getAllWithLimit(9)
  return {
    frameworks: data.map(entry => entry)
  };
};

export default Index;
