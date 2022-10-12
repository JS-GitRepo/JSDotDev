import { useContext, useEffect, useReducer, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { animated } from "react-spring";
import AppContext from "../contexts/AppContext";
import "./styles/HomeViewHeader.css";

interface Props {
  subtitle: string;
  subEmoji: string;
  allParams: string[];
}

const HomeViewHeader = ({ subtitle, subEmoji, allParams }: Props) => {
  // GENERAL
  const location = useLocation();
  const { hueRotation } = useContext(AppContext);
  const [isIntro, setIsIntro] = useState<boolean>(false);

  useEffect(() => {
    if (allParams[1] === "introduction") {
      setIsIntro(true);
    } else {
      setIsIntro(false);
    }
  }, [allParams]);

  // Some elements in the return will be hidden by media query CSS, to allow UI elements in the header or footer depending on mobile / Desktop. This is why there are some "redundant" elements
  return (
    <div className='HomeViewHeader'>
      <Link className='title-ctr' to={{ pathname: "/landing" }}>
        <h1>
          {`${isIntro ? "who is " : ""}`}
          <animated.span
            style={isIntro ? hueRotation : {}}
            className={isIntro ? "highlighted-link" : ""}>
            jake
            {`${isIntro ? "?" : "'s"} `}
          </animated.span>
          <animated.span style={hueRotation} className='highlighted-link'>
            {isIntro ? "" : `${allParams[2]}`}
            {isIntro ? "" : ` ${allParams[1]}`}
          </animated.span>
        </h1>
        <p className='subtitle'>
          {subtitle}
          <span className='emoji'>{subEmoji}</span>
        </p>
      </Link>

      <div className='project-nav-ctr'>
        <div className='project-nav'>
          <span className='material-symbols-outlined'>chevron_left</span>
          <h2>{allParams[3]}</h2>
          <span className='material-symbols-outlined'>chevron_right</span>
        </div>

        <div className='project-nav-type-cat'>
          <NavLink
            to={`/${allParams[0]}/${allParams[1]}/gamedev`}
            className={({ isActive }) => (isActive ? "highlighted-link" : "")}>
            <animated.p style={hueRotation}>gamedev</animated.p>
          </NavLink>
          <NavLink
            to={`/${allParams[0]}/${allParams[1]}/webdev`}
            className={({ isActive }) => (isActive ? "highlighted-link" : "")}>
            <animated.p style={hueRotation}>webdev</animated.p>
          </NavLink>
        </div>
      </div>

      <div className='nav-ctr'>
        <ul>
          <li>
            <NavLink
              to={`/${allParams[0]}/${allParams[1]}/gamedev`}
              className={({ isActive }) =>
                isActive ? "highlighted-link" : ""
              }>
              <animated.p style={hueRotation}>gamedev</animated.p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${allParams[0]}/${allParams[1]}/webdev`}
              className={({ isActive }) =>
                isActive ? "highlighted-link" : ""
              }>
              <animated.p style={hueRotation}>webdev</animated.p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeViewHeader;
