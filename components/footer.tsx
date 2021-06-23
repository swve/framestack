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

    <a href="https://www.buymeacoffee.com/swve"><img style={{width:120,height:"auto",marginTop:7}} src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=swve&button_colour=BD5FFF&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"/></a>
 </div>
);

export default Footer;
