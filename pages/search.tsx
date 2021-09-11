import Layout from "../components/layout";
import Link from "next/link";
import { dataProvider } from "../services/dataProvider";
import pagination from "../services/pagination";
import ProductBox from "../components/ui/productbox";
import PagesLink from "../components/ui/pageslinks";

const Search = (props) => {
  return (
    <Layout
      title="Search"
      desc="Search"
    >
      <div className="hero-build">
        <span className="badge">Search</span>
        <h1>Results for : {props.query}</h1>
        <div className="types">
          <Link href={{ pathname: "", query: { type: "*", p: props.page , query:props.query} }}>
            <a>
              <span className="type-btn">All</span>
            </a>
          </Link>
          <Link href={{ pathname: "", query: { type: "frame", p: props.page , query:props.query} }}>
            <a>
              <span className="type-btn">Frameworks</span>
            </a>
          </Link>
          <Link href={{ pathname: "", query: { type: "lib", p: props.page , query:props.query} }}>
            <a>
              <span className="type-btn">Libraries</span>
            </a>
          </Link>
          <Link href={{ pathname: "", query: { type: "tools", p: props.page , query:props.query} }}>
            <a>
              <span className="type-btn">Tools</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="frame-def">
        {props.items.map((item) => (
          <ProductBox item={item} key={item.link} />
        ))}
      </div>
      <PagesLink tabPages={props.tabPages} pageNbr={props.pageNbr}></PagesLink>
    </Layout>
  );
};

Search.getInitialProps = async function (context) {
  let { p } = context.query;
  let { type } = context.query;
  let { query } = context.query;

  let provider = new dataProvider();
  let paginator = new pagination();

  const result = provider.search({
    keyword: query,
    type: type ,
    page: p,
  });

  let pages = paginator.paginateBy(result.nbr, 9);

  // Return to render
  return {
    items: result.result.map((entry) => entry),
    pageNbr: p,
    tabPages: pages,
    type: type,
    query: query,
  };
};

export default Search;
