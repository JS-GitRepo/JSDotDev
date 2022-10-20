import { config, useTransition } from "react-spring";
import ProjDescBlog from "./ProjDescBlog";
import ProjDescPortfolio from "./ProjDescPortfolio";
import "./ProjVideo.css";

interface Props {
  vidSrc: string;
  vidSrc_Fallback: string;
  vidSrc_Fallback2: string;
  vidPoster: string;
  isPortfolio: boolean;
  tech: string[];
  skills: string[];
  title: string;
  desc: string;
}

const ProjVideo = ({
  vidSrc,
  vidSrc_Fallback,
  vidSrc_Fallback2,
  vidPoster,
  isPortfolio,
  tech,
  skills,
  title,
  desc,
}: Props) => {
  const fadeTransition = useTransition(isPortfolio, {
    from: { opacity: 0, backdropFilter: "blur(1px)" },
    enter: { opacity: 1, backdropFilter: "blur(6px)" },
    leave: { opacity: 0, backdropFilter: "blur(1px)" },
    reverse: isPortfolio,
    config: config.default,
  });

  return (
    <div className='ProjVideo'>
      <div className='video-ctr'>
        <video autoPlay loop muted playsInline poster={vidPoster}>
          <source src={vidSrc} type='video/mp4' />
          <source src={vidSrc_Fallback} type='video/mp4' />
          <source src={vidSrc_Fallback2} type='video/mp4' />
        </video>
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

export default ProjVideo;
