import { useContext, useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import "./styles/HVContent.css";
import Deerfall from "./projects/Deerfall";
import MediaMatchup from "./projects/MediaMatchup";
import Introduction from "./Introduction";
import HVSideNav from "./HVSideNav";
import AppContext from "../contexts/AppContext";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  project: string;
  isIntro: boolean;
  allParams: string[];
}

const HVContent = ({ project, isIntro, allParams }: Props) => {
  // = = = = = NAVIGATION = = = = =
  const [isPortfolio, setIsPortfolio] = useState<boolean>(true);
  const [currentNav, setCurrentNav] = useState<string>("media");
  const [scrollIsBuffering, setScrollIsBuffering] = useState(false);
  const { scrollRefs, hueRotation } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.5,
    root: null,
    rootMargin: "0px",
  };
  const mediaScrollObserver = useIntersectionObserver(
    scrollRefs.media,
    observerOptions,
    false
  );
  const techScrollObserver = useIntersectionObserver(
    scrollRefs.tech,
    observerOptions,
    false
  );
  const blogScrollObserver = useIntersectionObserver(
    scrollRefs.blog,
    observerOptions,
    false
  );
  const aboutScrollObserver = useIntersectionObserver(
    scrollRefs.about,
    observerOptions,
    false
  );

  // = = = = = PROJECTS = = = = =
  const allProjList = {
    intro: <Introduction />,
    deerfall: <Deerfall isPortfolio={isPortfolio} />,
    mediamatchup: <MediaMatchup isPortfolio={isPortfolio} />,
  };
  const gameDevProjList = {
    deerfall: <Deerfall isPortfolio={isPortfolio} />,
  };
  const webDevProjList = {
    mediamatchup: <MediaMatchup isPortfolio={isPortfolio} />,
  };
  const [localProject, setLocalProject] = useState<string>("");
  const [show, setShow] = useState<boolean>(true);
  // = = = = = TRANSITIONS = = = = =
  const transitionFade = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
    // exitBeforeEnter: true,
  });

  // = = = = = FUNCTIONS = = = = =

  const checkAndSetProjComp = () => {
    if (isIntro) {
      setLocalProject("intro");
    } else {
      setLocalProject(project);
    }
  };

  const scrollToElement = (ref: React.MutableRefObject<any>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // = = = = = USE EFFECTS = = = = =
  // Hide Project when it is Changed, then set the new project once hidden
  useEffect(() => {
    setShow(false);
    setTimeout(() => checkAndSetProjComp(), 310);
  }, [project, isIntro]);

  // Once the new project is set, fade back in to display it
  useEffect(() => {
    setShow(true);
  }, [localProject]);

  // Check and set isPortfolio whenever params change
  useEffect(() => {
    if (allParams[1] === "portfolio") {
      setIsPortfolio(true);
    } else {
      setIsPortfolio(false);
    }
  }, [allParams]);

  useEffect(() => {
    if (mediaScrollObserver?.isIntersecting && !scrollIsBuffering) {
      navigate(`${location.pathname}#media`);
    } else if (techScrollObserver?.isIntersecting && !scrollIsBuffering) {
      navigate(`${location.pathname}#tech`);
    } else if (blogScrollObserver?.isIntersecting && !scrollIsBuffering) {
      navigate(`${location.pathname}#blog`);
    } else if (aboutScrollObserver?.isIntersecting && !scrollIsBuffering) {
      navigate(`${location.pathname}#about`);
    }
  }, [
    mediaScrollObserver?.isIntersecting,
    techScrollObserver?.isIntersecting,
    blogScrollObserver?.isIntersecting,
    aboutScrollObserver?.isIntersecting,
  ]);

  useEffect(() => {
    setScrollIsBuffering(true);
    if (location.hash === "#media") {
      scrollToElement(scrollRefs.media);
      setCurrentNav("media");
    } else if (location.hash === "#tech") {
      scrollToElement(scrollRefs.tech);
      setCurrentNav("tech");
    } else if (location.hash === "#about") {
      scrollToElement(scrollRefs.about);
      setCurrentNav("about");
    } else if (location.hash === "#blog") {
      scrollToElement(scrollRefs.blog);
      setCurrentNav("blog");
    }
  }, [location.hash]);

  useEffect(() => {
    if (scrollIsBuffering) {
      setTimeout(() => setScrollIsBuffering(false), 500);
    }
  }, [scrollIsBuffering]);

  return (
    <main className='HVContent'>
      {isIntro ? (
        ""
      ) : (
        <HVSideNav
          isPortfolio={isPortfolio}
          allParams={allParams}
          hueRotation={hueRotation}
          currentNav={currentNav}
          setCurrentNav={setCurrentNav}
          setScrollIsBuffering={setScrollIsBuffering}
        />
      )}

      {transitionFade(
        (styles, item) =>
          item && (
            <animated.div className={`media-ctr`} style={styles}>
              {allProjList[localProject as keyof typeof allProjList]}
            </animated.div>
          )
      )}
    </main>
  );
};

export default HVContent;
