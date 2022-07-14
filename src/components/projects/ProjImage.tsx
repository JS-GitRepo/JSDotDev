import ProjDescBlog from "./ProjDescBlog";
import "./ProjImage.css";
import ProjDescPortfolio from "./ProjDescPortfolio";

interface Props {
  imgSrc: string;
  imgSrc_Fallback: string;
  isPortfolio: boolean;
  imgAltTxt: string;
  tech: string[];
  skills: string[];
  title: string;
  desc: string;
}

const ProjImage = ({
  imgSrc,
  imgSrc_Fallback,
  isPortfolio,
  imgAltTxt,
  tech,
  skills,
  title,
  desc,
}: Props) => {
  return (
    <div className="ProjImage">
      <div className="img-ctr">
        <picture>
          <source srcSet={imgSrc} />
          <img src={imgSrc_Fallback} alt={imgAltTxt} />
        </picture>
      </div>
      <div className="desc-ctr">
        {isPortfolio ? (
          <ProjDescPortfolio title={title} desc={desc} />
        ) : (
          <ProjDescBlog title={title} desc={desc} />
        )}
      </div>
    </div>
  );
};

export default ProjImage;
