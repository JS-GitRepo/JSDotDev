import ProjDescBlog from "./ProjDescBlog";
import "./ProjImage.css";
import ProjDescPortfolio from "./ProjDescPortfolio";
import { useTransition, config, animated } from "react-spring";

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
  const fadeTransition = useTransition(isPortfolio, {
    from: { opacity: 0, backdropFilter: "blur(1px)" },
    enter: { opacity: 1, backdropFilter: "blur(8px)" },
    leave: { opacity: 0, backdropFilter: "blur(1px)" },
    reverse: isPortfolio,
    config: config.default,
    // exitBeforeEnter: true,
  });

  return (
    <div className='ProjImage'>
      <div className='img-ctr'>
        <picture>
          <source srcSet={imgSrc} />
          <img src={imgSrc_Fallback} alt={imgAltTxt} />
        </picture>
      </div>
      <div className='desc-ctr'>
        {fadeTransition((styles, item) =>
          item ? (
            <ProjDescPortfolio title={title} desc={desc} transStyle={styles} />
          ) : (
            <ProjDescBlog title={title} desc={desc} transStyle={styles} />
          )
        )}
      </div>
    </div>
  );
};

export default ProjImage;
