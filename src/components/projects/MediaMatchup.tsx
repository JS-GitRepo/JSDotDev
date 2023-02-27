import ProjImage from "./subComponents/ProjImage";
// import mediaMatchupMainAVIF from "../../img/Projects/MediaMatchup/MediaMatchupMain.avif";
// import mediaMatchupMainJPG from "../../img/Projects/MediaMatchup/MediaMatchupMain.jpg";
import matchupImg from "../../img/Projects/MediaMatchup/artVJediKnight.jpg";
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
  const about: string =
    "An 'apples to oranges' comparison app where various forms of media battle head-to-head for your vote. These comparisons pit various forms of media against one another such as film, musical albums, video games, artwork, and television. There is a social element to this game, including the ability to add friends and a feed of their matchup choices. More social features like comments and matchup sharing are planned.";
  const links = {
    github: "https://github.com/JS-GitRepo/MediaMatchup_FE",
    demo: "https://mediamatchup.app",
  };
  const techDesc: string =
    "MediaMatchup leverages 5 REST API's, 4 external and 1 internal, to generate a 'Matchup' on demand. Users are authenticated via Firebase Google Auth and have their Matchup choices saved to MongoDB Atlas Cloud. Users can add friends and view their feeds via MongoDB aggregation.";

  return (
    <>
      <Project
        mediaSrc={matchupImg}
        mediaSrc_Fallback={matchupImg}
        mediaSrc_Fallback2={undefined}
        mediaAltTxt={"media matchup react application"}
        vidPoster={undefined}
        isVideo={false}
        isPortfolio={isPortfolio}
        tech={technologies}
        skills={skills}
        title={"mediamatchup"}
        about={about}
        techDesc={techDesc}
        projLinks={links}
      />
    </>
  );
};

export default MediaMatchup;
