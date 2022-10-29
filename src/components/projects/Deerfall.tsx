import ProjVideo from "./subComponents/ProjVideo";
import DeerfallVidAV1 from "../../img/Projects/Deerfall/DeerfallBanner_AV1.mp4";
import DeerfallVidH265 from "../../img/Projects/Deerfall/DeerfallBanner_H265.mp4";
import DeerfallVidH264 from "../../img/Projects/Deerfall/DeerfallBanner_H264.mp4";
import DeerfallPosterJPG from "../../img/Projects/Deerfall/DeerfallBannerPoster.jpg";
import Project from "./subComponents/Project";

interface Props {
  isPortfolio: boolean;
}

const Deerfall = ({ isPortfolio }: Props) => {
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
  const desc: string = "";

  return (
    <>
      <Project
        mediaSrc={DeerfallVidH265}
        mediaSrc_Fallback={DeerfallVidAV1}
        mediaSrc_Fallback2={DeerfallVidH264}
        mediaAltTxt={"deerfall videogame project"}
        vidPoster={DeerfallPosterJPG}
        isPortfolio={isPortfolio}
        tech={[]}
        skills={[]}
        title={"deerfall"}
        desc={desc}
        isVideo={true}
      />
    </>
  );
};

export default Deerfall;
