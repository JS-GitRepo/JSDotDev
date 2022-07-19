import { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import "./HomeViewContent.css";
import Deerfall from "./projects/Deerfall";
import MediaMatchup from "./projects/MediaMatchup";

interface Props {
  pathname: string;
  isPortfolio: boolean;
  currentProject: string;
}

const HomeViewContent = ({ pathname, isPortfolio, currentProject }: Props) => {
  // - - - - States - - - -
  // toggleQueue false = projQueue1, toggleQueue true = projQueue2
  const [toggleQueue, setToggleQueue] = useState(false);
  // - - - - Projects - - - -
  const allProjList = {
    Deerfall: <Deerfall isPortfolio={isPortfolio} />,
    MediaMatchup: <MediaMatchup isPortfolio={isPortfolio} />,
  };
  const gameDevProjList = {
    Deerfall: <Deerfall isPortfolio={isPortfolio} />,
  };
  const webDevProjList = {
    MediaMatchup: <MediaMatchup isPortfolio={isPortfolio} />,
  };
  const [currProjArray, setCurrProjArray] = useState<JSX.Element[]>([]);
  // - - - - Transitions - - - -
  const transition = useTransition(currProjArray, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
    exitBeforeEnter: true,
  });

  useEffect(() => {
    setCurrProjArray([eval(`allProjList.${currentProject}`)]);
  }, [currentProject]);

  return (
    <div className='HomeViewContent'>
      {transition(
        (styles, item) =>
          item && <animated.div style={styles}>{item}</animated.div>
      )}
    </div>
  );
};

export default HomeViewContent;
