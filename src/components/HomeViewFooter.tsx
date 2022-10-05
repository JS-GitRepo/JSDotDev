import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { animated } from "react-spring";
import AppContext from "../contexts/AppContext";
import "./styles/HomeViewFooter.css";

interface Props {
  currentContent: string;
  allParamsObj: {
    param1: string;
    param2: string;
    param3: string;
    param4: string;
  };
}

const HomeViewFooter = ({ currentContent, allParamsObj }: Props) => {
  const currentYear = new Date();
  const { hueRotation } = useContext(AppContext);

  return (
    <div className='HomeViewFooter'>
      <div className='project-nav-ctr'>
        <div className='project-nav'>
          <span className='material-symbols-outlined'>chevron_left</span>
          <h2>{currentContent}</h2>
          <span className='material-symbols-outlined'>chevron_right</span>
        </div>

        <div className='nav-ctr'>
          <ul>
            <li>
              <NavLink
                to={`/${allParamsObj.param1}/portfolio/${allParamsObj.param3}`}
                className={({ isActive }) =>
                  isActive ? "highlighted-link" : ""
                }>
                <animated.p style={hueRotation}>portfolio</animated.p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${allParamsObj.param1}/blog/${allParamsObj.param3}`}
                className={({ isActive }) =>
                  isActive ? "highlighted-link" : ""
                }>
                <animated.p style={hueRotation}>blog</animated.p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${allParamsObj.param1}/introduction`}
                className={({ isActive }) =>
                  isActive ? "highlighted-link" : ""
                }>
                <animated.p style={hueRotation}>intro</animated.p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className='rights-ctr'>
        <p>
          <animated.span
            className={"highlighted-link"}
            style={
              hueRotation
            }>{`© ${currentYear.getFullYear()} All Rights Reserved`}</animated.span>{" "}
        </p>
      </div>
    </div>
  );
};

export default HomeViewFooter;
