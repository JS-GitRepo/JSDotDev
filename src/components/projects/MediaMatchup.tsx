import ProjectImage from "./ProjectImage";
import mediaMatchupMain from "../../img/Projects/MediaMatchup/MediaMatchupMain.png";
import { animated, config, useTransition } from "react-spring";
import { useEffect, useState } from "react";

interface Props {
  isPortfolio: boolean;
}

const MediaMatchup = ({ isPortfolio }: Props) => {
  // - - - - Transitions - - - -
  // const transitions = useTransition(transition, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   reverse: transition,
  //   config: config.molasses,
  // });
  // - - - - Tech and Skills - - - -
  const technologies: string[] = [
    "JavaScript",
    "Mongo DB",
    "Express JS",
    "React JS",
    "Node JS",
    "REST API",
    "Firebase",
  ];
  const skills: string[] = [
    "Web Development",
    "Web Design",
    "Software Engineering",
    "Hosting",
  ];

  return (
    <animated.div className="MediaMatchup">
      <ProjectImage
        imgSrc={mediaMatchupMain}
        isPortfolio={isPortfolio}
        imgAltTxt={"MediaMatchup Demo"}
        tech={technologies}
        skills={skills}
      />
    </animated.div>
  );
};

export default MediaMatchup;
