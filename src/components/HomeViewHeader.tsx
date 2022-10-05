import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { animated } from "react-spring";
import AppContext from "../contexts/AppContext";
import "./styles/HomeViewHeader.css";

interface Props {
  subtitle: string;
  subEmoji: string;
  currentContent: string;
  paramObj: {
    param1: string;
    param2: string;
    param3: string;
    param4: string;
  };
}

const HomeViewHeader = ({
  subtitle,
  subEmoji,
  currentContent,
  paramObj,
}: Props) => {
  // GENERAL
  const { hueRotation } = useContext(AppContext);

  // Some elements in the return will be hidden by media query CSS, to allow UI elements in the header or footer depending on mobile / Desktop. This is why there are some "redundant" elements
  return (
    <div className='HomeViewHeader'>
      <Link className='title-ctr' to={{ pathname: "/" }}>
        <h1>
          {`jake's `}
          <animated.span style={hueRotation} className='highlighted-link'>
            {`${paramObj.param3}`}
            {` ${paramObj.param2}`}
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
          <h2>{currentContent}</h2>
          <span className='material-symbols-outlined'>chevron_right</span>
        </div>

        <div className='project-nav-type-cat'>
          <NavLink
            to={`/home/${paramObj.param2}/gamedev`}
            className={({ isActive }) => (isActive ? "highlighted-link" : "")}>
            <animated.p style={hueRotation}>gamedev</animated.p>
          </NavLink>
          <NavLink
            to={`/home/${paramObj.param2}/webdev`}
            className={({ isActive }) => (isActive ? "highlighted-link" : "")}>
            <animated.p style={hueRotation}>webdev</animated.p>
          </NavLink>
        </div>
      </div>

      <div className='nav-ctr'>
        <ul>
          <li>
            <NavLink
              to={`/home/${paramObj.param2}/gamedev`}
              className={({ isActive }) =>
                isActive ? "highlighted-link" : ""
              }>
              <animated.p style={hueRotation}>gamedev</animated.p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/home/${paramObj.param2}/webdev`}
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
