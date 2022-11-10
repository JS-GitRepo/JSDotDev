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
    "UE Blueprints",
    "C++",
    "Blender",
  ];
  const skills: string[] = [
    "Level Design",
    "3D Modeling",
    "Textures and Materials",
    "Automatic Landscape Materials",
    "Inverse Kinematics and Locomotion",
    "Inventory Systems",
  ];
  const about: string =
    "Deerfall began with the idea of 'Rimworld meets Daggerfall'; emergent story generation experienced from the viewpoint of a lone traveller. World simulation is the centerpiece here, creating stories dynamically as characters live their daily lives (in a way very similar to Dwarf Fortress or Rimworld). Players find their place in the world entirely through their relationship with these NPC's.";
  const links = { github: "n/a", demo: "n/a" };
  const techDesc: string =
    "Built with Unreal Engine 5 from scratch. Most time up to this point spent learning materials fairly deeply, and reverse engineering IK / locomotion within the 'Advanced Locomotion v4' UE Plugin. Development is on pause while I have been pursuing a career in web development.";

  return (
    <>
      <Project
        mediaSrc={DeerfallVidH265}
        mediaSrc_Fallback={DeerfallVidAV1}
        mediaSrc_Fallback2={DeerfallVidH264}
        mediaAltTxt={"deerfall videogame project"}
        vidPoster={DeerfallPosterJPG}
        isVideo={true}
        isPortfolio={isPortfolio}
        tech={technologies}
        skills={skills}
        title={"deerfall"}
        about={about}
        techDesc={techDesc}
        projLinks={links}
      />
    </>
  );
};

export default Deerfall;
