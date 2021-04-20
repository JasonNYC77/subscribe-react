import "./NewsletterItem.css";
import ItemImage from "../ItemImage";
import Checkbox from "../Checkbox";
import Text from "../Text";
function NewsletterItem(props) {
  return (
    <div className="news-letter-item">
      <div className="item-row">
        <div className="left">
          <ItemImage />
        </div>
        <div className="middle">
          <div>
            <Text variant={"h1"}>{props.data.header}</Text>
          </div>
          <div>
            <Text variant={"body"}>{props.data.description}</Text>
          </div>
        </div>
        <div className="right">
          <Checkbox value={props.data.checked} onChange={props.onChange} />
        </div>
      </div>
    </div>
  );
}

export default NewsletterItem;
