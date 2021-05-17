import Header from "./header";
import Footer from "./footer";


interface PropsType{
  title:string,
  desc:string,
  children:any
}

const Layout = (props:PropsType) => {
  return (
    <div>
      <Header title={props.title} desc={props.desc}></Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
