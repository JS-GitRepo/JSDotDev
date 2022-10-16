import { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import "./styles/HomeViewContent.css";
import Deerfall from "./projects/Deerfall";
import MediaMatchup from "./projects/MediaMatchup";
import { useNavigate } from "react-router-dom";
import PersonalIntro from "./projects/PersonalIntro";

interface Props {
  currentContent: string | undefined;
  isIntro: boolean;
}

const HomeViewContent = ({ currentContent, isIntro }: Props) => {
  // - - - - States - - - -
  // toggleQueue false = projQueue1, toggleQueue true = projQueue2
  const [toggleQueue, setToggleQueue] = useState(false);
  const navigate = useNavigate();
  // - - - - Projects - - - -
  const allProjList = {
    intro: <PersonalIntro />,
    deerfall: <Deerfall isPortfolio={true} />,
    mediamatchup: <MediaMatchup isPortfolio={true} />,
  };
  const gameDevProjList = {
    deerfall: <Deerfall isPortfolio={true} />,
  };
  const webDevProjList = {
    mediamatchup: <MediaMatchup isPortfolio={true} />,
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
    if (currentContent && !isIntro) {
      setCurrProjArray([eval(`allProjList.${currentContent}`)]);
    } else if (isIntro) {
      setCurrProjArray([eval("allProjList.intro")]);
    }
  }, [currentContent, isIntro]);

  return (
    <div className='HomeViewContent'>
      {transition(
        (styles, item) =>
          item && (
            <animated.div className={`media-ctr`} style={styles}>
              {item}
            </animated.div>
          )
      )}
    </div>
  );
};

export default HomeViewContent;
