import { useContext, useEffect, useReducer, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { animated } from "react-spring";
import AppContext from "../contexts/AppContext";
import "./styles/HomeViewHeader.css";

interface Props {
  subtitle: string;
  subEmoji: string;
  isLanding: boolean;
  allParams: {
    param1: string;
    param2: string;
    param3: string;
    param4: string;
  };
}

const HomeViewHeader = ({
  subtitle,
  subEmoji,
  isLanding,
  allParams,
}: Props) => {
  // GENERAL
  const { hueRotation } = useContext(AppContext);
  const [isIntro, setIsIntro] = useState<boolean>(false);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    if (allParams.param2 === "introduction") {
      setIsIntro(true);
    } else {
      setIsIntro(false);
    }
  }, [allParams.param2]);

  useEffect(() => {
    forceUpdate();
  }, [isLanding]);

  // Some elements in the return will be hidden by media query CSS, to allow UI elements in the header or footer depending on mobile / Desktop. This is why there are some "redundant" elements
  return (
    <div className='HomeViewHeader'>
      <Link className='title-ctr' to={{ pathname: "/" }}>
        <h1>
          {`${isIntro ? "who is " : ""}`}
          <animated.span
            style={isIntro ? hueRotation : {}}
            className={isIntro ? "highlighted-link" : ""}>
            jake
            {`${isIntro ? "?" : "'s"} `}
          </animated.span>
          <animated.span style={hueRotation} className='highlighted-link'>
            {isIntro ? "" : `${allParams.param3}`}
            {isIntro ? "" : ` ${allParams.param2}`}
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
          <h2>{allParams.param4}</h2>
          <span className='material-symbols-outlined'>chevron_right</span>
        </div>

        <div className='project-nav-type-cat'>
          <NavLink
            to={`/${allParams.param1}/${allParams.param2}/gamedev`}
            className={({ isActive }) => (isActive ? "highlighted-link" : "")}>
            <animated.p style={hueRotation}>gamedev</animated.p>
          </NavLink>
          <NavLink
            to={`/${allParams.param1}/${allParams.param2}/webdev`}
            className={({ isActive }) => (isActive ? "highlighted-link" : "")}>
            <animated.p style={hueRotation}>webdev</animated.p>
          </NavLink>
        </div>
      </div>

      <div className='nav-ctr'>
        <ul>
          <li>
            <NavLink
              to={`/${allParams.param1}/${allParams.param2}/gamedev`}
              className={({ isActive }) =>
                isActive ? "highlighted-link" : ""
              }>
              <animated.p style={hueRotation}>gamedev</animated.p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/${allParams.param1}/${allParams.param2}/webdev`}
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
