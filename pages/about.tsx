import Layout from "../components/layout";
import Image from "next/image";

const About = (props) => {
  return (
    <Layout title="About" desc="About page">
      <div className="hero-build">
        <div style={{ textAlign: "center", marginTop: "120px" }}>
          {" "}
          <br></br>
          <Image
            alt="Picture of the author"
            width={120}
            height={15}
            src="/img/logo.png"
          />
          <h1 style={{ fontSize: "50px" }}>Tools you need to start building</h1>
          <br />
          <p
            style={{
              margin: "auto",
              marginTop: "7px",
              marginBottom: "15px",
              fontWeight: "bold",
              fontSize: 17,
              width: 550,
            }}
          >
            Framestack is a collection of tools/libraries/frameworks you'll
            probably need to start building your next idea and turn it to a
            reality{" "}
          </p>
          <div
            className="hero-features"
          >
            <div className="icon-feature" style={{ width: 250 }}>
              <img width="50" src="/img/frameworks-icon.png"></img>
              <h2 style={{ marginTop: "5px", margin: "auto" }}>Frameworks</h2>
              <p>
                Fully fledged platforms/toolkits you can use and follow to build
                a specific project{" "}
              </p>
            </div>
            <div className="icon-feature" style={{ width: 250 }}>
              <img width="53" src="/img/libraries-icon.png"></img>
              <h2 style={{ marginTop: "5px", margin: "auto" }}>Libraries</h2>
              <p>
                Pieces of code, generic code that will help you build your
                project{" "}
              </p>
            </div>
            <div className="icon-feature" style={{ width: 250 }}>
              <img width="50" src="/img/tools-icon.png"></img>
              <h2 style={{ marginTop: "5px", margin: "auto" }}>Tools</h2>
              <p>
                Platforms or full software that provide the tooling to build a
                project{" "}
              </p>
            </div>
          </div>
          <div style={{ marginBottom: "200px" }}>
            <p style={{marginTop: "20px",textTransform: "uppercase",margin: "auto"}}>
              Made by <b>Sweave</b>{" "}
            </p>
              <a href="https://github.com/swve">
                <img
                  style={{
                    marginTop: "15px",
                    width: "50px",
                    borderRadius: "7px",
                  }}
                  src="https://avatars.githubusercontent.com/u/29493708?v=4"
                  alt=""
                />
              </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
