import "./styles/HVSideNav.css";
import mediaIcon from "../img/navIcons/media.png";
import techIcon from "../img/navIcons/tech.png";
import aboutIcon from "../img/navIcons/about.png";
import blogIcon from "../img/navIcons/blog.png";
import { animated, useSpring } from "react-spring";
import { useContext, useEffect } from "react";
import { HueRotation } from "../models/Models";
import { useLocation, useNavigate } from "react-router-dom";
import AppContext from "../contexts/AppContext";

interface Props {
  hueRotation: HueRotation;
  isPortfolio: boolean;
  allParams: string[];
  currentNav: string;
  setCurrentNav: React.Dispatch<React.SetStateAction<string>>;
  setScrollIsBuffering: React.Dispatch<React.SetStateAction<boolean>>;
}

const HVSideNav = ({
  isPortfolio,
  allParams,
  hueRotation,
  currentNav,
  setCurrentNav,
  setScrollIsBuffering,
}: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useContext(AppContext);
  const navSizeChange = useSpring({
    from: { height: isMobile ? "130px" : "170px" },
    to: { height: isMobile ? "100px" : "125px" },
    config: { mass: 1, tension: 200, friction: 15 },
    reverse: isPortfolio,
  });
  const { hueRotation_Inv } = useContext(AppContext);

  const navigateToSection = (navName: string) => {
    setScrollIsBuffering(true);
    navigate(`${location.pathname}#${navName}`);
    setCurrentNav(navName);
  };

  useEffect(() => {
    navigateToSection("media");
  }, [allParams[1], allParams[2]]);

  return (
    <animated.nav className='HVSideNav' style={navSizeChange}>
      {isPortfolio ? (
        <ul>
          <li>
            <animated.img
              onClick={() => navigateToSection("media")}
              className={`nav-icon`}
              style={currentNav === "media" ? hueRotation : {}}
              src={mediaIcon}
              alt='media navigation icon'
            />
          </li>
          <li>
            <animated.img
              onClick={() => navigateToSection("tech")}
              className={`nav-icon`}
              style={currentNav === "tech" ? hueRotation : {}}
              src={techIcon}
              alt='technologies and skills navigation icon'
            />
          </li>
          <li>
            <animated.img
              onClick={() => navigateToSection("about")}
              className={`nav-icon`}
              style={currentNav === "about" ? hueRotation : {}}
              src={aboutIcon}
              alt='about project navigation icon'
            />
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <animated.img
              onClick={() => navigateToSection("media")}
              className={`nav-icon`}
              style={currentNav === "media" ? hueRotation : {}}
              src={mediaIcon}
              alt='media navigation icon'
            />
          </li>
          <li>
            <animated.img
              onClick={() => navigateToSection("blog")}
              className={`nav-icon`}
              style={currentNav === "blog" ? hueRotation : {}}
              src={blogIcon}
              alt='media navigation icon'
            />
          </li>
        </ul>
      )}
    </animated.nav>
  );
};

export default HVSideNav;
