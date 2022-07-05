import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animated, SpringValue } from "react-spring";
import "./HomeViewHeader.css";

interface Props {
  title: string;
  subtitle: string;
  subEmoji: string;
  gameDevLink: string;
  webDevLink: string;
  portfolioLink: string;
  blogLink: string;
  isPortfolio: boolean;
  gamedevOrWebdev: boolean;
  currentProject: string;
  hueRotation: {
    filter: SpringValue<string>;
  };
}

const HomeViewHeader = ({
  title,
  subtitle,
  subEmoji,
  gameDevLink,
  webDevLink,
  portfolioLink,
  blogLink,
  isPortfolio,
  gamedevOrWebdev,
  currentProject,
  hueRotation,
}: Props) => {
  // Some elements in the return will be hidden by media query CSS, to allow UI elements in the header or footer depending on mobile / Desktop. This is why there are some "redundant" elements
  return (
    <div className="HomeViewHeader">
      <Link className="title-ctr" to={{ pathname: "/" }}>
        <h1>
          {`Jake's `}
          <animated.span style={hueRotation} className="highlighted-link">
            {title}
          </animated.span>
        </h1>
        <p className="subtitle">
          {subtitle}
          <span className="emoji">{subEmoji}</span>
        </p>
      </Link>

      <div className="project-nav-ctr">
        <div className="project-nav">
          <span className="material-symbols-outlined">chevron_left</span>
          <h2>{currentProject}</h2>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="project-nav-type-cat">
          <Link
            to={gameDevLink}
            className={gamedevOrWebdev ? "highlighted-link" : ""}>
            <animated.p style={gamedevOrWebdev ? hueRotation : {}}>
              Game Dev
            </animated.p>
          </Link>
          <Link
            to={webDevLink}
            className={gamedevOrWebdev ? "" : "highlighted-link"}>
            <animated.p style={gamedevOrWebdev ? {} : hueRotation}>
              Web Dev
            </animated.p>
          </Link>
        </div>
      </div>

      <div className="nav-ctr">
        <ul>
          <li>
            <Link
              className={isPortfolio ? "highlighted-link" : ""}
              to={portfolioLink}>
              <animated.p style={isPortfolio ? hueRotation : {}}>
                Portfolio
              </animated.p>
            </Link>
          </li>
          <li>
            <Link
              className={isPortfolio ? "" : "highlighted-link"}
              to={blogLink}>
              <animated.p style={isPortfolio ? {} : hueRotation}>
                Blog
              </animated.p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeViewHeader;
