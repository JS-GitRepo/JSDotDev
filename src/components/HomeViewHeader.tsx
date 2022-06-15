import { useState } from "react";
import "./HomeViewHeader.css";

interface Props {
  pathname: string;
}

const HomeViewHeader = ({ pathname }: Props) => {
  const [title, setTitle] = useState<string>("Dev Blog");
  const [subtitle, setSubtitle] = useState<string>("Welcome! 😊");

  // Some elements in the return will be hidden by media query CSS, to allow UI elements in the header or footer depending on mobile / Desktop. This is why there are some "redundant" elements
  return (
    <div className="HomeViewHeader">
      <div className="title-ctr">
        <h1>{`Jake's ${title}`}</h1>
      </div>

      <div className="project-nav-ctr">
        <div className="project-nav">
          <span className="material-symbols-outlined">chevron_left</span>
          <h2>Deerfall</h2>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="project-nav-type-cat">
          <a>Game Dev</a>
          <a>Web Dev</a>
        </div>
      </div>

      <div className="nav-ctr">
        <ul>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeViewHeader;
