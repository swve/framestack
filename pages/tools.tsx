import Layout from "../components/layout";
import Link from "next/link";
import { dataProvider } from "../services/dataProvider";
import pagination from "../services/pagination";
import ProductBox from "../components/ui/productbox";

const Web = props => {
  return (
    <Layout title="Tools" desc="No-code tools so you can build your next project without the hassle">
      <div className="hero-build">
        <span className="badge">List</span>
        <h1>Tools</h1>
       
      </div>
      <div className="frame-def">
        {props.items.map(item => (
          <ProductBox item={item} />
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

  let result = provider.getByType("tool", p ? p : 0);
  let pages = paginator.paginateBy(result.nbr, 9);
  return {
    items: result.result.map(entry => entry),
    pageNbr: p,
    tabPages: pages
  };
};

export default Web;
