import { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import "./styles/HVContent.css";
import Deerfall from "./projects/Deerfall";
import MediaMatchup from "./projects/MediaMatchup";
import Introduction from "./Introduction";
import mediaIcon from "../img/navIcons/media.png";
import techIcon from "../img/navIcons/tech.png";
import aboutIcon from "../img/navIcons/about.png";
import blogIcon from "../img/navIcons/blog.png";
import HVSideNav from "./HVSideNav";

interface Props {
  project: string;
  isIntro: boolean;
  allParams: string[];
}

const HVContent = ({ project, isIntro, allParams }: Props) => {
  // - - - - STATES - - - -
  const [isPortfolio, setIsPortfolio] = useState<boolean>(true);
  // - - - - PROJECTS - - - -
  const allProjList = {
    intro: <Introduction />,
    deerfall: <Deerfall isPortfolio={isPortfolio} />,
    mediamatchup: <MediaMatchup isPortfolio={isPortfolio} />,
  };
  const gameDevProjList = {
    deerfall: <Deerfall isPortfolio={isPortfolio} />,
  };
  const webDevProjList = {
    mediamatchup: <MediaMatchup isPortfolio={isPortfolio} />,
  };
  const [localProject, setLocalProject] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);
  // - - - - TRANSITIONS - - - -
  const transitionFade = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
    // exitBeforeEnter: true,
  });

  const checkAndSetProjComp = () => {
    if (isIntro) {
      setLocalProject("intro");
    } else {
      setLocalProject(project);
    }
  };

  // - - - - - USE EFFECTS - - - - -
  // Hide Project when it is Changed, then set the new project once hidden
  useEffect(() => {
    setShow(false);
    setTimeout(() => checkAndSetProjComp(), 310);
  }, [project, isIntro]);

  // Once the new project is set, fade back in to display it
  useEffect(() => {
    setShow(true);
  }, [localProject]);

  // Check and set isPortfolio whenever params change
  useEffect(() => {
    if (allParams[1] === "portfolio") {
      setIsPortfolio(true);
    } else {
      setIsPortfolio(false);
    }
  }, [allParams]);

  return (
    <main className='HVContent'>
      {isIntro ? "" : <HVSideNav isPortfolio={isPortfolio} />}

      {transitionFade(
        (styles, item) =>
          item && (
            <animated.div className={`media-ctr`} style={styles}>
              {allProjList[localProject as keyof typeof allProjList]}
            </animated.div>
          )
      )}
    </main>
  );
};

export default HVContent;
