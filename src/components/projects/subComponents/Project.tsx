import ProjDescBlog from "./ProjDescBlog";
import "./Project.css";
import ProjDescPortfolio from "./ProjDescPortfolio";
import { useTransition, config, animated } from "react-spring";
import ProjImage from "./ProjImage";
import ProjVideo from "./ProjVideo";
import { useContext } from "react";
import AppContext from "../../../contexts/AppContext";

interface Props {
  mediaSrc: string;
  mediaSrc_Fallback: string;
  mediaSrc_Fallback2: string | undefined;
  mediaAltTxt: string;
  vidPoster: string | undefined;
  isPortfolio: boolean;
  tech: string[];
  skills: string[];
  title: string;
  desc: string;
  isVideo: boolean;
}

const Project = ({
  mediaSrc,
  mediaSrc_Fallback,
  mediaSrc_Fallback2,
  mediaAltTxt,
  vidPoster,
  isPortfolio,
  tech,
  skills,
  title,
  desc,
  isVideo,
}: Props) => {
  const { scrollRefs } = useContext(AppContext);
  const fadeTransition = useTransition(isPortfolio, {
    from: { opacity: 0, backdropFilter: "blur(1px)" },
    enter: { opacity: 1, backdropFilter: "blur(8px)" },
    leave: { opacity: 0, backdropFilter: "blur(1px)" },
    reverse: isPortfolio,
    config: config.default,
    exitBeforeEnter: true,
  });

  return (
    <animated.div className='Project'>
      {isVideo ? (
        <ProjVideo
          vidSrc={mediaSrc}
          vidSrc_Fallback={mediaSrc_Fallback}
          vidSrc_Fallback2={mediaSrc_Fallback2!}
          vidPoster={vidPoster!}
          media_ScrollRef={scrollRefs.media}
        />
      ) : (
        <ProjImage
          imgSrc={mediaSrc}
          imgSrc_Fallback={mediaSrc_Fallback}
          imgAltTxt={mediaAltTxt}
          media_ScrollRef={scrollRefs.media}
        />
      )}
      {fadeTransition((styles, item) =>
        item ? (
          <ProjDescPortfolio
            title={title}
            desc={desc}
            transStyle={styles}
            tech_ScrollRef={scrollRefs.tech}
            about_ScrollRef={scrollRefs.about}
          />
        ) : (
          <ProjDescBlog
            title={title}
            desc={desc}
            transStyle={styles}
            blog_ScrollRef={scrollRefs.blog}
          />
        )
      )}
    </animated.div>
  );
};

export default Project;
