import ProjVideo from "./subComponents/ProjVideo";
import DeerfallVidAV1 from "../../img/Projects/Deerfall/DeerfallBanner_AV1.mp4";
import DeerfallVidH265 from "../../img/Projects/Deerfall/DeerfallBanner_H265.mp4";
import DeerfallVidH264 from "../../img/Projects/Deerfall/DeerfallBanner_H264.mp4";
import DeerfallPosterJPG from "../../img/Projects/Deerfall/DeerfallBannerPoster.jpg";
import { animated } from "react-spring";

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
    <animated.div className='Deerfall media-ctr'>
      <ProjVideo
        vidSrc={DeerfallVidH265}
        vidSrc_Fallback={DeerfallVidAV1}
        vidSrc_Fallback2={DeerfallVidH264}
        isPortfolio={isPortfolio}
        tech={technologies}
        skills={skills}
        title={"Deerfall"}
        desc={desc}
        vidPoster={DeerfallPosterJPG}
      />
    </animated.div>
  );
};

export default Deerfall;
