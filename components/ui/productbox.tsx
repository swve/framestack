const ProductBox = (props) => (
  <div className="frame-box" id={props.item.link}>
    <div className="data" id={props.item.link}>
      <div className="title">{props.item.name}</div>
      <div className="description">{props.item.mini_desc}</div>
      <div className="tags">
        <span>{props.item.tags}</span>
      </div>
    </div>
    <div className="second">
      <div className="logo-frame">
        <img alt={props.item.name + " logo"} src={props.item.img_url} />
      </div>
      <div className="link">
        <a target="_blank" href={props.item.link + "?ref=framestack"}>
          <img src="../img/link.png" />
        </a>
      </div>
    </div>
  </div>
);

export default ProductBox;
