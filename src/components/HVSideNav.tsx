import "./styles/HVSideNav.css";
import mediaIcon from "../img/navIcons/media.png";
import techIcon from "../img/navIcons/tech.png";
import aboutIcon from "../img/navIcons/about.png";
import blogIcon from "../img/navIcons/blog.png";
import { animated, useSpring } from "react-spring";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

interface Props {
  isPortfolio: boolean;
}

const HVSideNav = ({ isPortfolio }: Props) => {
  const { scrollRefs } = useContext(AppContext);
  const navSizeChange = useSpring({
    from: { height: "150px" },
    to: { height: "110px" },
    config: { mass: 1, tension: 200, friction: 15 },
    reverse: isPortfolio,
  });

  const handleScroll = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <animated.nav className='HVSideNav' style={navSizeChange}>
      {isPortfolio ? (
        <ul>
          <li>
            <img
              onClick={() => handleScroll(scrollRefs.media)}
              className='nav-icon'
              src={mediaIcon}
              alt='media navigation icon'
            />
          </li>
          <li>
            <img
              onClick={() => handleScroll(scrollRefs.tech)}
              className='nav-icon'
              src={techIcon}
              alt='technologies and skills navigation icon'
            />
          </li>
          <li>
            <img
              onClick={() => handleScroll(scrollRefs.about)}
              className='nav-icon'
              src={aboutIcon}
              alt='about project navigation icon'
            />
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <img
              onClick={() => handleScroll(scrollRefs.media)}
              className='nav-icon'
              src={mediaIcon}
              alt='media navigation icon'
            />
          </li>
          <li>
            <img
              onClick={() => handleScroll(scrollRefs.blog)}
              className='nav-icon'
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
