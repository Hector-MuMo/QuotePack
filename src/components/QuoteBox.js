import { useState } from "react";
import "../styles/QuoteBox.css";
import NextButton from "./NextButton";
import TwitterBtn from "./TwitterBtn";
import data from "../helpers/data.json";
import logoQ from "../helpers/quote.svg";

const QuoteBox = ({ style, onClickColor }) => {
  let rndmIndex = Math.floor(Math.random() * 102);

  const [quote, setQuote] = useState(data.quotes[rndmIndex].quote);
  const [author, setAuthor] = useState(`-- ${data.quotes[rndmIndex].author}`);

  return (
    <div className="quote-box">
      <div className="quote-author">
        <figure>
          <img src={logoQ} alt="quote" />
        </figure>
        <article>
          <cite>{quote}</cite>
          <span>{author}</span>
        </article>
      </div>

      <div className="buttons">
        <TwitterBtn style={style} quoteT={quote} authorT={author} />
        <NextButton
          style={style}
          myOnClick={(e) => {
            let rndmIndex = Math.floor(Math.random() * 102);
            onClickColor();
            setQuote(data.quotes[rndmIndex].quote);
            setAuthor(`-- ${data.quotes[rndmIndex].author}`);
          }}
        />
      </div>
    </div>
  );
};

export default QuoteBox;
