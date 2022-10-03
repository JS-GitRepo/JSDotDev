import { Link, NavLink } from "react-router-dom";
import { animated, SpringValue } from "react-spring";
import "./styles/HomeViewFooter.css";

interface Props {
  pathname: string;
  gamedevOrWebdev: boolean;
  gameDevLink: string;
  webDevLink: string;
  portfolioLink: string;
  blogLink: string;
  isPortfolio: boolean;
  currentContent: string;
  hueRotation: {
    filter: SpringValue<string>;
  };
}

const HomeViewFooter = ({
  pathname,
  gamedevOrWebdev,
  hueRotation,
  gameDevLink,
  webDevLink,
  currentContent,
  portfolioLink,
  blogLink,
  isPortfolio,
}: Props) => {
  const currentYear = new Date();

  return (
    <div className='HomeViewFooter'>
      <div className='project-nav-ctr'>
        <div className='project-nav'>
          <span className='material-symbols-outlined'>chevron_left</span>
          <h2>{currentContent}</h2>
          <span className='material-symbols-outlined'>chevron_right</span>
        </div>

        <div className='project-nav-type-cat'>
          <NavLink
            to={portfolioLink}
            className={({ isActive }) => (isActive ? "highlighted-link" : "")}>
            <animated.p style={isPortfolio ? hueRotation : {}}>
              Portfolio
            </animated.p>
          </NavLink>
          <NavLink
            to={blogLink}
            className={({ isActive }) => (isActive ? "highlighted-link" : "")}>
            <animated.p style={isPortfolio ? {} : hueRotation}>Blog</animated.p>
          </NavLink>
          <NavLink
            to={blogLink}
            className={({ isActive }) => (isActive ? "highlighted-link" : "")}>
            <animated.p style={isPortfolio ? {} : hueRotation}>
              Intro
            </animated.p>
          </NavLink>
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
