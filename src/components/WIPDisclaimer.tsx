import { useState } from "react";
import "./WIPDisclaimer.css";

const WIPDisclaimer = () => {
  const [closeClass, setCloseClass] = useState<string>("WIPDisclaimer");

  return (
    <div className={`${closeClass}`}>
      <div
        className='close-ctr'
        onClick={() => setCloseClass("WIPDisclaimer hide")}>
        <p>X</p>
      </div>
      <h2>
        <span className='emoji'>🛠</span> Website Under Construction{" "}
        <span className='emoji'>🛠</span>
      </h2>
      <p className='wip-text'>{`Some features may be incomplete, buggy, or site-breaking. Feel free to explore and please re-visit soon!`}</p>
    </div>
  );
};

export default WIPDisclaimer;
