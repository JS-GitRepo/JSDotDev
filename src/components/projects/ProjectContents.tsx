import ProjectBlogDesc from "./ProjectBlogDesc";
import ProjectPortfolioDesc from "./ProjectPortfolioDesc";
import "./ProjectContents.css";

interface Props {
  vidSrc: string;
  isPortfolio: boolean;
  tech: string[];
  skills: string[];
}

const ProjectVideo = ({ vidSrc, isPortfolio, tech, skills }: Props) => {
  return (
    <div className="ProjectVideo">
      <div className="video-ctr">
        <video autoPlay loop muted playsInline>
          <source src={vidSrc} type="video/mp4" />
        </video>
      </div>
      <div className="desc-ctr">
        {isPortfolio ? <ProjectPortfolioDesc /> : <ProjectBlogDesc />}
      </div>
    </div>
  );
};

export default ProjectVideo;
