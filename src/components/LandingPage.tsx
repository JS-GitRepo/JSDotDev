import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/LandingPage.css";
import LandingPageLink from "./LandingPageLink";
import { animated, useTransition } from "react-spring";
import HomeView from "./HomeView";
import AuthContext from "../contexts/AuthContext";
import pixelBG from "../img/pixelBG_LowRes.png";
import pixelFadeBG from "../img/animated-14fps.png";
import AppContext from "../contexts/AppContext";
import AppConfig from "../AppConfig.json";

interface Props {}

const LandingPage = ({}: Props) => {
  // - - - - - LINK FUNCTIONALITY - - - - -
  const [currentDisplay, setCurrentDisplay] = useState<string>("");
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [link1Text, setLink1Text] = useState<string>("");
  const [link1Path, setLink1Path] = useState<string>("");
  const [link2Text, setLink2Text] = useState<string>("");
  const [link2Path, setLink2Path] = useState<string>("");
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  // - - - - - CONTEXT - - - - -
  const { currentPathContext, setCurrentPathContext } = useContext(AuthContext);
  const { hueRotation, setHueDuration } = useContext(AppContext);

  // - - - - - BG TRANSITION - - - - -
  const [hideLP, setHideLP] = useState<string>("");
  const [hideHV, setHideHV] = useState<string>("hide");
  const [isActivePage, setIsActivePage] = useState<boolean>(true);
  const [currBG, setCurrBG] = useState<string>(pixelBG);

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

  // - - - - - useEffects - - - - -

  useEffect(() => {
    setCurrentPathContext(currentPath);
    if (firstRender) {
      setFirstRender(false);
    } else if (
      // If current path is 'complete', transition to HomeView
      currentPath.endsWith("/portfolio") ||
      currentPath.endsWith("/blog")
    ) {
      setCurrBG(pixelFadeBG);
      setIsActivePage(false);
      setHideHV("");
      setTimeout(() => setHideLP("hide"), 2000);
      setHueDuration(AppConfig.hueAnimDuration_Slow);
    }

    if (currentPath === "/") {
      navigate("/landing");
      setCurrBG(pixelBG);
      setIsActivePage(true);
      setHideHV("hide");
      setHideLP("");
      setHueDuration(4000);
    } else if (currentPath === "/landing") {
      setCurrentDisplay("jakesnyder.dev");
      setLink1Text("Web Dev");
      setLink1Path("/landing/webdev");
      setLink2Text("Game Dev");
      setLink2Path("/landing/gamedev");
      setHueDuration(AppConfig.hueAnimDuration);
    } else if (currentPath === "/landing/webdev") {
      setCurrentDisplay("Web Development");
      setLink1Text("Portfolio");
      setLink1Path("/landing/webdev/portfolio");
      setLink2Text("Blog");
      setLink2Path("/landing/webdev/blog");
      setHueDuration(AppConfig.hueAnimDuration);
    } else if (currentPath === "/landing/gamedev") {
      setCurrentDisplay("Game Development");
      setLink1Text("Portfolio");
      setLink1Path("/landing/webdev/portfolio");
      setLink2Text("Blog");
      setLink2Path("/landing/gamedev/blog");
      setHueDuration(AppConfig.hueAnimDuration);
    }
  }, [currentPath]);

  return (
    <div className={`LandingPage`}>
      <div className={`lp-content-ctr ${hideLP}`}>
        {fadeOut((style: any, item: any) =>
          item ? (
            <animated.div className={"header-ctr"} style={style}>
              <LandingPageLink
                currentDisplay={currentDisplay}
                linkText={currentDisplay}
                pathName={"/"}
                isH1={true}
              />
            </animated.div>
          ) : (
            ""
          )
        )}
        {/* <PersonalIntro /> */}
        {fadeOut((style: any, item: any) =>
          item ? (
            <animated.div className='nav-ctr' style={style}>
              <LandingPageLink
                currentDisplay={currentDisplay}
                linkText={link1Text}
                pathName={link1Path}
                isH1={false}
              />
              <LandingPageLink
                currentDisplay={currentDisplay}
                linkText={link2Text}
                pathName={link2Path}
                isH1={false}
              />
            </animated.div>
          ) : (
            ""
          )
        )}
        <div className='bg-img-ctr'>
          <animated.img
            style={hueRotation}
            className={`bg-img`}
            src={currBG}
            alt='pixelart background image'
          />
        </div>
      </div>
      <div className={`HomeView-ctr ${hideHV}`}>
        <HomeView />
      </div>
    </div>
  );
};

export default LandingPage;
