import "../styles/TwitterBtn.css";
import { FaTwitter } from "react-icons/fa";

const TwitterBtn = ({ style, quoteT, authorT }) => {
  let tweet = `${quoteT} ${authorT}`;

  return (
    <div className="twitter-btn">
      <button style={{ backgroundColor: style }}>
        <a
          href={`https://twitter.com/intent/tweet?text=${tweet}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </button>
    </div>
  );
};

export default TwitterBtn;
