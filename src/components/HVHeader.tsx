import { useContext, useEffect, useReducer, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { animated } from "react-spring";
import AppContext from "../contexts/AppContext";
import "./styles/HVHeader.css";

interface Props {
  subtitle: string;
  subEmoji: string;
  allParams: string[];
  isIntro: boolean;
}

const HVHeader = ({ subtitle, subEmoji, allParams, isIntro }: Props) => {
  // GENERAL
  const { hueRotation } = useContext(AppContext);

  // Some elements in the return will be hidden by media query CSS, to allow UI elements in the header or footer depending on mobile / Desktop. This is why there are some "redundant" elements
  return (
    <header className='HVHeader'>
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

        <div className='nav-ctr'>
          <ul>
            <li>
              <NavLink
                to={`/${allParams[0]}/portfolio/${allParams[2]}`}
                className={({ isActive }) =>
                  isActive ? "highlighted-link" : ""
                }>
                <animated.p style={hueRotation}>portfolio</animated.p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${allParams[0]}/blog/${allParams[2]}`}
                className={({ isActive }) =>
                  isActive ? "highlighted-link" : ""
                }>
                <animated.p style={hueRotation}>blog</animated.p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${allParams[0]}/introduction`}
                className={({ isActive }) =>
                  isActive ? "highlighted-link" : ""
                }>
                <animated.p style={hueRotation}>intro</animated.p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <nav className={isIntro ? "hidden" : "nav-category-ctr"}>
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
      </nav>
    </header>
  );
};

export default HVHeader;
