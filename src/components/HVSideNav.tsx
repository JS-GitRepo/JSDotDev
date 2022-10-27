import "./styles/HVSideNav.css";
import mediaIcon from "../img/navIcons/media.png";
import techIcon from "../img/navIcons/tech.png";
import aboutIcon from "../img/navIcons/about.png";
import blogIcon from "../img/navIcons/blog.png";
import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";
import { ScrollRefs, HueRotation } from "../models/Models";

interface Props {
  scrollRefs: ScrollRefs;
  hueRotation: HueRotation;
  isPortfolio: boolean;
  allParams: string[];
  scrollToElement: (ref: React.MutableRefObject<any>) => void;
}

const HVSideNav = ({
  isPortfolio,
  allParams,
  scrollRefs,
  hueRotation,
  scrollToElement,
}: Props) => {
  const [hlNav, setHLNav] = useState("media");
  const navSizeChange = useSpring({
    from: { height: "150px" },
    to: { height: "110px" },
    config: { mass: 1, tension: 200, friction: 15 },
    reverse: isPortfolio,
  });

  const handleNavClick = (
    ref: React.MutableRefObject<any>,
    navName: string
  ) => {
    scrollToElement(ref);
    setHLNav(navName);
  };

  useEffect(() => {
    scrollRefs.media.current?.scrollIntoView({ behavior: "smooth" });
    setHLNav("media");
  }, [allParams[1]]);

  return (
    <animated.nav className='HVSideNav' style={navSizeChange}>
      {isPortfolio ? (
        <ul>
          <li>
            <animated.img
              onClick={() => handleNavClick(scrollRefs.media, "media")}
              className='nav-icon'
              style={hlNav === "media" ? hueRotation : {}}
              src={mediaIcon}
              alt='media navigation icon'
            />
          </li>
          <li>
            <animated.img
              onClick={() => handleNavClick(scrollRefs.tech, "tech")}
              className='nav-icon'
              style={hlNav === "tech" ? hueRotation : {}}
              src={techIcon}
              alt='technologies and skills navigation icon'
            />
          </li>
          <li>
            <animated.img
              onClick={() => handleNavClick(scrollRefs.about, "about")}
              className='nav-icon'
              style={hlNav === "about" ? hueRotation : {}}
              src={aboutIcon}
              alt='about project navigation icon'
            />
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <animated.img
              onClick={() => handleNavClick(scrollRefs.media, "media")}
              className='nav-icon'
              style={hlNav === "media" ? hueRotation : {}}
              src={mediaIcon}
              alt='media navigation icon'
            />
          </li>
          <li>
            <animated.img
              onClick={() => handleNavClick(scrollRefs.blog, "blog")}
              className='nav-icon'
              style={hlNav === "blog" ? hueRotation : {}}
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
