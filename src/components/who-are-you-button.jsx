import "./who-are-you-button.scss";

const WhoAreYouButton = (props) => {

  return (
    <div className="button-hover-border">
      <div
        id="who-button"
        className="who-are-you-button"
        onClick={props.onClick}
        style={{
          backgroundColor: props.selected ? "white" : "black",
        }}
      >
        <div
          className="who-are-you-btn-text"
          style={{ color: props.selected ? "black" : "white" }}
        >
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default WhoAreYouButton;
