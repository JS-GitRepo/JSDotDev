import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LandingPage.css";
import LandingPageLink from "./LandingPageLink";
import { animated, useTransition } from "react-spring";
import HomeView from "./HomeView";
import AuthContext from "../contexts/AuthContext";

const LandingPage = () => {
  // - - - - - LINK FUNCTIONALITY - - - - -
  const [currentDisplay, setCurrentDisplay] = useState<string>("");
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [link1Text, setLink1Text] = useState<string>("");
  const [link1Path, setLink1Path] = useState<string>("");
  const [link2Text, setLink2Text] = useState<string>("");
  const [link2Path, setLink2Path] = useState<string>("");
  const { currentPathContext, setCurrentPathContext } = useContext(AuthContext);
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  // - - - - - BG TRANSITION - - - - -
  const [hideLP, setHideLP] = useState<string>("");
  const [hideHV, setHideHV] = useState<string>("hide");
  const [isActivePage, setIsActivePage] = useState<boolean>(true);
  const [bgImgClass, setBgImgClass] = useState<string>("static-bg");
  const transDuration = 200;
  const fadeOut = useTransition(isActivePage, {
    initial: {
      opacity: 1,
      config: { duration: transDuration },
    },
    from: {
      opacity: 1,
      config: { duration: transDuration },
    },
    leave: {
      opacity: 0,
      config: { duration: transDuration },
    },
  });

  useEffect(() => {
    setCurrentPathContext(currentPath);
    if (firstRender) {
      setFirstRender(false);
    } else if (
      currentPath.endsWith("/gamedev") ||
      currentPath.endsWith("/webdev")
    ) {
      setIsActivePage(false);
      setHideHV("");
      setTimeout(() => setBgImgClass("fade-bg"), 100);
      setTimeout(() => setHideLP("hide"), 2000);
    }
  }, [currentPath]);

  useEffect(() => {
    if (currentPath === "/") {
      navigate("/landing");
    } else if (currentPath === "/landing") {
      setCurrentDisplay("jakesnyder.dev");
      setLink1Text("Portfolio");
      setLink1Path("/landing/portfolio");
      setLink2Text("Blog");
      setLink2Path("/landing/blog");
    } else if (currentPath === "/landing/portfolio") {
      setCurrentDisplay("Portfolio");
      setLink1Text("Web Dev");
      setLink1Path("/landing/portfolio/webdev");
      setLink2Text("Game Dev");
      setLink2Path("/landing/portfolio/gamedev");
    } else if (currentPath === "/landing/blog") {
      setCurrentDisplay("Blog");
      setLink1Text("Web Dev");
      setLink1Path("/landing/blog/webdev");
      setLink2Text("Game Dev");
      setLink2Path("/landing/blog/gamedev");
    }
  }, [currentPath]);

  return (
    <div className="LandingPage">
      <div className={`LandingPage-container ${bgImgClass} ${hideLP}`}>
        {fadeOut((style, item) =>
          item ? (
            <animated.div className={"header-container"} style={style}>
              <LandingPageLink
                currentDisplay={currentDisplay}
                linkText={currentDisplay}
                pathName={"/"}
                className={"lp-link"}
                isH1={true}
              />
            </animated.div>
          ) : (
            ""
          )
        )}
        {fadeOut((style, item) =>
          item ? (
            <div className="link-container">
              <LandingPageLink
                currentDisplay={currentDisplay}
                linkText={link1Text}
                pathName={link1Path}
                className={"lp-link"}
                isH1={false}
              />
              <LandingPageLink
                currentDisplay={currentDisplay}
                linkText={link2Text}
                pathName={link2Path}
                className={"lp-link"}
                isH1={false}
              />
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className={`HomeView-container ${hideHV}`}>
        <HomeView />
      </div>
    </div>
  );
};

export default LandingPage;
