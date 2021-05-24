import Layout from "../../components/layout";
import Link from "next/link";
import { dataProvider } from "../../services/dataProvider";
import pagination from "../../services/pagination";
import ProductBox from "../../components/ui/productbox";
import HeroLinks from "../../components/ui/herolinks";

const Web = props => {
  return (
    <Layout
      title="Build APIs easily"
      desc="Frameworks, libraries and tools to help you make APIs for your project"
    >
      <div className="hero-build">
        <span className="badge">Build</span>
        <HeroLinks title="APIs" ></HeroLinks>
        <div className="types">
          <Link href="?">
            <a>
              <span className="type-btn">All</span>
            </a>
          </Link>
          <Link href="?type=frame">
            <a>
              <span className="type-btn">Frameworks</span>
            </a>
          </Link>
          <Link href="?type=lib">
            <a>
              <span className="type-btn">Libraries</span>
            </a>
          </Link>
          <Link href="?type=tools">
            <a>
              <span className="type-btn">Tools</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="frame-def">
        {props.items.map(item => (
          <ProductBox item={item} key={item.link} />
        ))}
      </div>
      <div className="pages">
        {props.tabPages.map(page => (
          <Link href={{ pathname: "", query: { type: props.type, p: page } }}>
            <a key={page}>{page}</a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

Web.getInitialProps = async function(context) {
  var { p } = context.query;
  var { type } = context.query;

  let provider = new dataProvider();
  let paginator = new pagination();

  if (!type) {
    var result = provider.getByTags("api", p ? p : 0);
  } else {
    var result = provider.getBy("api", p ? p : 0, type);
  }

  let pages = paginator.paginateBy(result.nbr, 9);

  // Return to render
  return {
    items: result.result.map(entry => entry),
    pageNbr: p,
    tabPages: pages,
    type: type
  };
};

export default Web;
