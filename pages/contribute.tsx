import Layout from "../components/layout";
import Link from "next/link";

const Contribute = (props) => {
  return (
    <Layout title="Contribute" desc="Framestack needs your contributions">
      <div className="hero-build">
        <h1>How to contribute</h1>
        <p>
          Framestack is a free web ressource freely available on GitHub as an
          Open Source project, this means you can actually improve the code, add
          new features, <br /> or add your framework/libraries/tools by simply
          forking the project and making a Pull Request !{" "}
        </p>
        <h2>Step 1</h2>
      </div>
    </Layout>
  );
};

export default Contribute;
