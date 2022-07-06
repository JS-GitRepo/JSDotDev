import { useEffect, useState } from "react";
import { animated, config, useTransition } from "react-spring";
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
  const gameDevProjList = {
    Deerfall: <Deerfall isPortfolio={isPortfolio} />,
  };
  const webDevProjList = {
    MediaMatchup: <MediaMatchup isPortfolio={isPortfolio} />,
  };
  const [projQueue1, setProjQueue1] = useState<JSX.Element>(
    <Deerfall isPortfolio={isPortfolio} />
  );
  const [projQueue2, setProjQueue2] = useState<JSX.Element>(
    <Deerfall isPortfolio={isPortfolio} />
  );
  // - - - - Transitions - - - -
  const transitions = useTransition(toggleQueue, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
    exitBeforeEnter: true,
  });

  const checkQueue = (project: JSX.Element) => {
    if (toggleQueue === true) {
      setProjQueue2(project);
      setToggleQueue(!toggleQueue);
    } else {
      setProjQueue1(project);
      setToggleQueue(!toggleQueue);
    }
  };

  useEffect(() => {
    if (currentProject === "Deerfall") {
      checkQueue(gameDevProjList.Deerfall);
    } else if (currentProject === "MediaMatchup") {
      checkQueue(webDevProjList.MediaMatchup);
    }
  }, [currentProject]);

  return (
    <div className="HomeViewContent">
      {transitions((styles, item) =>
        item ? (
          <animated.div style={styles}>{projQueue1}</animated.div>
        ) : (
          <animated.div style={styles}>{projQueue2}</animated.div>
        )
      )}
    </div>
  );
};

export default HomeViewContent;
