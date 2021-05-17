import Layout from "../components/layout";
import Link from "next/link";
import { dataProvider } from "../services/dataProvider";
import pagination from "../services/pagination";
var jmespath = require("jmespath");

const Web = props => {
  return (
    <Layout title="Tools" desc="No-code tools so you can build your next project without the hassle">
      <div className="hero-build">
        <span className="badge">List</span>
        <h1>Tools</h1>
       
      </div>
      <div className="frame-def">
        {props.items.map(item => (
          <div className="frame-box">
            <div className="data" id={item.id}>
              <div className="title">{item.name}</div>
              <div className="description">{item.mini_desc}</div>
              <div className="tags">
                <span>{item.tags}</span>
              </div>
            </div>
            <div className="second">
              <div className="logo-frame">
                <img  alt={item.name + " logo"} src={item.img_url}/>
              </div>
              <div className="link">
                <a target="_blank" href={item.link+'?ref=framestack'}>
                  <img src="../img/link.png"/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pages">
        {props.tabPages.map(page => (
          <Link href={"?p=" + page}>
            <a key={page}>{page}</a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

Web.getInitialProps = async function(context) {
  let provider = new dataProvider();
  let paginator = new pagination();

  var { type, p } = context.query;

  let result = provider.getList("tool", p ? p : 0);
  let pages = paginator.paginateBy(result.nbr, 9);
  console.log(result);
  return {
    items: result.result.map(entry => entry),
    pageNbr: p,
    tabPages: pages
  };
};

export default Web;
