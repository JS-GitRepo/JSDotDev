import ProjectContents from "./ProjectContents";
import DeerfallVid from "../../img/MainBanner-H264.mp4";
import { useEffect, useState } from "react";
import { animated, config, useTransition } from "react-spring";

interface Props {
  isPortfolio: boolean;
}

const Deerfall = ({ isPortfolio }: Props) => {
  // - - - - Transition - - - -
  // const transitions = useTransition(transition, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   update: { opacity: 0 },
  //   leave: { opacity: 0 },
  //   config: config.molasses,
  // });

  // - - - - Tech and Skills - - - -
  const technologies: string[] = [
    "Unreal Engine",
    "C++",
    "Blueprints",
    "Blender",
  ];
  const skills: string[] = [
    "Level Design",
    "3D Modeling",
    "Textures and Materials",
    "Automatic Landscape Materials",
    "Locomotion",
    "Inventory Systems",
  ];

  return (
    <animated.div className="Deerfall">
      <ProjectContents
        vidSrc={DeerfallVid}
        isPortfolio={isPortfolio}
        tech={technologies}
        skills={skills}
      />
    </animated.div>
  );
};

export default Deerfall;
