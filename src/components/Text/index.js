import "./Label.css";

function Text(props) {
  switch (props.variant) {
    case "h1":
      return <span className="header">{props.children}</span>;
    default:
      return <span className="normal">{props.children}</span>;
  }
}

export default Text;
