import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/LandingPage.css";
import LandingPageLink from "./LandingPageLink";
import { animated, useTransition } from "react-spring";
import AuthContext from "../contexts/AuthContext";
import pixelBG from "../img/pixelBG_LowRes.png";
import pixelFadeBG from "../img/animated-14fps.png";
import AppContext from "../contexts/AppContext";
import AppConfig from "../AppConfig.json";

interface Props {
  setIsLanding: React.Dispatch<React.SetStateAction<boolean>>;
  setParamsArray: React.Dispatch<React.SetStateAction<string>>[];
}

const LandingPage = ({ setIsLanding, setParamsArray }: Props) => {
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
  const { setCurrentPathContext } = useContext(AuthContext);
  const { hueRotation, setHueDuration } = useContext(AppContext);

  // - - - - - BG TRANSITION - - - - -
  const [hideLP, setHideLP] = useState<string>("");
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
      currentPath.endsWith("/gamedev") ||
      currentPath.endsWith("/webdev")
    ) {
      setCurrBG(pixelFadeBG);
      setIsActivePage(false);
      setTimeout(() => setIsLanding(false), 1500);
      setParamsArray[0]("home");
      setHueDuration(AppConfig.hueAnimDuration_Slow);
    }

    if (currentPath === "/") {
      navigate("/landing");
      setCurrBG(pixelBG);
      setIsActivePage(true);
      setHideLP("");
      setHueDuration(4000);
    } else if (currentPath === "/landing") {
      setCurrentDisplay("jakesnyder.dev");
      setParamsArray[0]("landing");
      setLink1Text("Portfolio");
      setLink1Path("/landing/portfolio");
      setLink2Text("Blog");
      setLink2Path("/landing/blog");
      setHueDuration(AppConfig.hueAnimDuration);
    } else if (currentPath === "/landing/portfolio") {
      setParamsArray[1]("portfolio");
      setCurrentDisplay("Portfolio");
      setLink1Text("Web Dev");
      setLink1Path("/home/portfolio/webdev");
      setLink2Text("Game Dev");
      setLink2Path("/home/portfolio/gamedev");
      setHueDuration(AppConfig.hueAnimDuration);
    } else if (currentPath === "/landing/blog") {
      setParamsArray[1]("blog");
      setCurrentDisplay("Blog");
      setLink1Text("Web Dev");
      setLink1Path("/home/blog/webdev");
      setLink2Text("Game Dev");
      setLink2Path("/home/blog/gamedev");
      setHueDuration(AppConfig.hueAnimDuration);
    } else if (currentPath.endsWith("/gamedev")) {
      setParamsArray[2]("gamedev");
    } else if (currentPath.endsWith("/webdev")) {
      setParamsArray[2]("webdev");
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
    </div>
  );
};

export default LandingPage;
