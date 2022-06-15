import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LandingPage.css";
import LandingPageLink from "./LandingPageLink";
import { animated, useSpring, useTransition } from "react-spring";
import HomeView from "./HomeView";
import AuthContext from "../contexts/AuthContext";
import pixelBG from "../img/pixelBG_LowRes.png";
import pixelFadeBG from "../img/animated-14fps.png";

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
  const [currBG, setCurrBG] = useState<string>(pixelBG);
  const [hueFlip, setHueFlip] = useState<boolean>(false);
  const [bgAnimOff, setBgAnimOff] = useState<boolean>(false);

  // - - - - - BG TRANSITION - - - - -
  const transDuration = 500;
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
  const bgHueRotation = useSpring({
    to: {
      filter: "hue-rotate(130deg) saturate(80%) sepia(30%)",
    },
    from: {
      filter: "hue-rotate(0deg) saturate(100%) sepia(0%)",
    },
    reset: false,
    cancel: bgAnimOff,
    reverse: hueFlip,
    delay: 2000,
    config: { duration: 4000, tension: 280, friction: 60 },
    onRest: () => setHueFlip(!hueFlip),
  });

  // - - - - - useEffects - - - - -
  useEffect(() => {
    setCurrentPathContext(currentPath);
    if (firstRender) {
      setFirstRender(false);
    } else if (
      currentPath.endsWith("/portfolio") ||
      currentPath.endsWith("/blog")
    ) {
      setCurrBG(pixelFadeBG);
      setIsActivePage(false);
      setHideHV("");
      setTimeout(() => setHideLP("hide"), 2000);
      setTimeout(() => setBgAnimOff(true), 2000);
    }
  }, [currentPath]);

  useEffect(() => {
    if (currentPath === "/") {
      navigate("/landing");
    } else if (currentPath === "/landing") {
      setCurrentDisplay("jakesnyder.dev");
      setLink1Text("Web Dev");
      setLink1Path("/landing/webdev");
      setLink2Text("Game Dev");
      setLink2Path("/landing/gamedev");
    } else if (currentPath === "/landing/webdev") {
      setCurrentDisplay("Web Development");
      setLink1Text("Portfolio");
      setLink1Path("/landing/webdev/portfolio");
      setLink2Text("Blog");
      setLink2Path("/landing/webdev/blog");
    } else if (currentPath === "/landing/gamedev") {
      setCurrentDisplay("Game Development");
      setLink1Text("Portfolio");
      setLink1Path("/landing/webdev/portfolio");
      setLink2Text("Blog");
      setLink2Path("/landing/gamedev/blog");
    }
  }, [currentPath]);

  return (
    <div className={`LandingPage`}>
      <div className={`LandingPage-container ${hideLP}`}>
        {fadeOut((style: any, item: any) =>
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
        {fadeOut((style: any, item: any) =>
          item ? (
            <animated.div className="link-container" style={style}>
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
            </animated.div>
          ) : (
            ""
          )
        )}
        <div className="bg-img-container">
          <animated.img
            style={bgHueRotation}
            className={`bg-img`}
            src={currBG}
            alt=""
          />
        </div>
      </div>
      <div className={`HomeView-container ${hideHV}`}>
        <HomeView />
      </div>
    </div>
  );
};

export default LandingPage;
