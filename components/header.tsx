import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function Header(props) {
  const router = useRouter();

   const keyPress = (e) => {
    if (e.keyCode == 13) {
      router.push("/search?type=*&p=0&query="+e.target.value);
    }
  }
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{props.title} | Framestack </title>
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* SEO */}
        <meta name="description" content={props.desc} />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta property="og:site_name" content="Framestack" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.desc} />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/framestack.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.desc} />
        <meta name="twitter:url" content="/" />
        <meta name="twitter:image" content="/img/framestack.png" />
        <meta name="twitter:site" content="@graphicmade" />
        <meta property="og:site_name" content="Framestack"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:locale" content="en-EN"></meta>
        <meta name="twitter:creator" content="@graphicmade"></meta>
        <meta name="theme-color" content="#6426ec"></meta>

        {/* SEO */}

        <link
          key="0"
          rel="apple-touch-icon"
          sizes="180x180"
          href="img/apple-touch-icon.png"
        ></link>
        <link
          key="1"
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="img/favicon-32x32.png"
        ></link>
        <link
          key="2"
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="img/favicon-16x16.png"
        ></link>
      </Head>

      <header>
        <div className="menu">
          <div className="top-info">
            Framestack is now open source ✨ —{" "}
            <a target="_blank" href="https://github.com/swve/framestack">
              learn more
            </a>
          </div>
          <div className="menu-top">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="../img/logo.png" />
                </a>
              </Link>
            </div>
            <div className="links">
              <ul>
                <li>
                  <Link href="/frameworks">
                    <a>frameworks</a>
                  </Link>
                </li>
                <li>
                  <Link href="/libraries">
                    <a>libraries</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tools">
                    <a>tools</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="search">
              <input
                placeholder="Search framestack"
                onKeyDown={keyPress}
                type="text"
              ></input>
              <div className="search_btn_info">
                Press Enter To search{" "}
                <span className="material-icons">keyboard_return</span>
              </div>
            </div>
            <div className="secondary">
              <ul>
                <li>
                  <Link href="/about">
                    <a>about</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contribute">
                    <a id="contribute">contribute</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu-mobile">
            <div className="mobile-links">
              <ul>
                <li>frameworks</li>
                <li>libraries</li>
                <li>tools</li>
              </ul>
            </div>
            <div className="mobile-secondary"></div>
          </div>
        </div>
        <div className="menuremp"></div>
      </header>
    </div>
  );
}

export default Header;
