import ProjectBlogDesc from "./ProjectBlogDesc";
import "./ProjectImage.css";
import ProjectPortfolioDesc from "./ProjectPortfolioDesc";

interface Props {
  imgSrc: string;
  isPortfolio: boolean;
  imgAltTxt: string;
  tech: string[];
  skills: string[];
}

const ProjectImage = ({
  imgSrc,
  isPortfolio,
  imgAltTxt,
  tech,
  skills,
}: Props) => {
  return (
    <div className="ProjectImage">
      <div className="img-ctr">
        <img src={imgSrc} alt={imgAltTxt} />
      </div>
      <div className="desc-ctr">
        {isPortfolio ? <ProjectPortfolioDesc /> : <ProjectBlogDesc />}
      </div>
    </div>
  );
};

export default ProjectImage;
