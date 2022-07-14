import ProjImage from "./ProjImage";
import mediaMatchupMainAVIF from "../../img/Projects/MediaMatchup/MediaMatchupMain.avif";
import mediaMatchupMainJPG from "../../img/Projects/MediaMatchup/MediaMatchupMain.jpg";
import { animated } from "react-spring";

interface Props {
  isPortfolio: boolean;
}

const MediaMatchup = ({ isPortfolio }: Props) => {
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
  const desc: string = "";

  return (
    <animated.div className="MediaMatchup">
      <ProjImage
        imgSrc={mediaMatchupMainAVIF}
        imgSrc_Fallback={mediaMatchupMainJPG}
        isPortfolio={isPortfolio}
        imgAltTxt={"MediaMatchup Demo"}
        tech={technologies}
        skills={skills}
        title={"Media Matchup"}
        desc={desc}
      />
    </animated.div>
  );
};

export default MediaMatchup;
