import ProjImage from "./subComponents/ProjImage";
// import mediaMatchupMainAVIF from "../../img/Projects/MediaMatchup/MediaMatchupMain.avif";
// import mediaMatchupMainJPG from "../../img/Projects/MediaMatchup/MediaMatchupMain.jpg";
import matchupImg from "../../img/Projects/MediaMatchup/ST4vsArt.jpg";
import Project from "./subComponents/Project";

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
  const desc: string = "A multi-media comparison app with a social twist. ";

  return (
    <>
      <Project
        mediaSrc={matchupImg}
        mediaSrc_Fallback={matchupImg}
        mediaSrc_Fallback2={undefined}
        mediaAltTxt={"media matchup web application"}
        vidPoster={undefined}
        isPortfolio={isPortfolio}
        tech={technologies}
        skills={skills}
        title={"mediamatchup"}
        desc={desc}
        isVideo={false}
      />
    </>
  );
};

export default MediaMatchup;
