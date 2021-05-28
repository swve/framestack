import Link from "next/link";

const Footer = (props) => (
  <div className="footer">
    <div className="text-footer">
      © 2020 - 2021 | {" "}
      <Link href="/privacy">
        <a>Privacy</a>
      </Link>{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <br></br>
    </div>
    <a href="https://github.com/swve" target="_blank" rel="noreferrer">
      <img alt="Sweave logo" src="../img/sweave.png" />
    </a>
    <br></br>
  </div>
);

export default Footer;
