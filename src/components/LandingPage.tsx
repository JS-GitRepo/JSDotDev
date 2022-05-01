import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LandingPage.css";
import LandingPageLink from "./LandingPageLink";
import { animated } from "react-spring";

const LandingPage = () => {
  // - - - - - STATES / FUNCTIONALITY - - - - -
  const [currentDisplay, setCurrentDisplay] = useState<string>("");
  const [isActivePage, setIsActivePage] = useState<boolean>(true);
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [link1Text, setLink1Text] = useState<string>("");
  const [link1Path, setLink1Path] = useState<string>("");
  const [link2Text, setLink2Text] = useState<string>("");
  const [link2Path, setLink2Path] = useState<string>("");
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  // const transitionUp = useTransition(isActivePage, {
  //   initial: {},
  //   // from: { opacity: 1, transform: "translate(0,0)" },
  //   // leave: { opacity: 1, transform: "translate(0,100%)" },
  // });

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      setIsActivePage(false);
    }
  }, []);

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
      setLink1Path("/home/portfolio/webdev");
      setLink2Text("Game Dev");
      setLink2Path("/home/portfolio/gamedev");
    } else if (currentPath === "/landing/blog") {
      setCurrentDisplay("Blog");
      setLink1Text("Web Dev");
      setLink1Path("/home/blog/webdev");
      setLink2Text("Game Dev");
      setLink2Path("/home/blog/gamedev");
    }
  }, [currentPath]);

  return (
    <div className="LandingPage">
      <animated.div className={"header-container"}>
        <LandingPageLink
          currentDisplay={currentDisplay}
          linkText={currentDisplay}
          pathName={"/"}
          className={"lp-link"}
          isH1={true}
        />
      </animated.div>
      <animated.div className="link-container">
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
    </div>
  );
};

export default LandingPage;
