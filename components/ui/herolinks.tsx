
const HeroLinks = (props) => (
  <div className="links_header">
    <h1>{props.title}</h1>
    <div className="add_data_github">
      <a
        href="https://github.com/swve/framestack/blob/main/CONTRIBUTING.md"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-icons">share</span> Add more by contributing
        to the project
      </a>
    </div>
  </div>
);

export default HeroLinks;
