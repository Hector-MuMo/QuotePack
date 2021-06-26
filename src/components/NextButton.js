import "../styles/NextButton.css";

const NextButton = ({ style, myOnClick }) => {
  return (
    <div className="next-button">
      <button onClick={myOnClick} style={{ backgroundColor: style }}>
        Next Quote
      </button>
    </div>
  );
};

export default NextButton;
