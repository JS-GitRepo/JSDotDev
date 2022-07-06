import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomeView from "./components/HomeView";
import { useSpring } from "react-spring";
import { useState } from "react";

function App() {
  const [hueFlip, setHueFlip] = useState<boolean>(false);
  const [bgAnimOff, setBgAnimOff] = useState<boolean>(false);
  const [hueDuration, setHueDuration] = useState<number>(4000);
  const hueRotation = useSpring({
    to: {
      filter: "hue-rotate(130deg) saturate(80%) sepia(30%)",
    },
    from: {
      filter: "hue-rotate(0deg) saturate(100%) sepia(0%)",
    },
    reset: false,
    cancel: bgAnimOff,
    reverse: hueFlip,
    delay: 2000,
    config: { duration: hueDuration, tension: 280, friction: 60 },
    onRest: () => setHueFlip(!hueFlip),
  });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                hueRotation={hueRotation}
                setHueDuration={setHueDuration}
              />
            }
          />
          <Route
            path="/landing"
            element={
              <LandingPage
                hueRotation={hueRotation}
                setHueDuration={setHueDuration}
              />
            }
          />
          <Route
            path="/landing/:location"
            element={
              <LandingPage
                hueRotation={hueRotation}
                setHueDuration={setHueDuration}
              />
            }
          />
          <Route
            path="/landing/:category/:content"
            element={
              <LandingPage
                hueRotation={hueRotation}
                setHueDuration={setHueDuration}
              />
            }
          />
          <Route
            path="/landing/:category/:content/:project"
            element={
              <LandingPage
                hueRotation={hueRotation}
                setHueDuration={setHueDuration}
              />
            }
          />
          <Route
            path="/home"
            element={
              <HomeView
                hueRotation={hueRotation}
                setHueDuration={setHueDuration}
              />
            }
          />
          <Route
            path="/home/:category/:content"
            element={
              <HomeView
                hueRotation={hueRotation}
                setHueDuration={setHueDuration}
              />
            }
          />
          <Route
            path="/home/:category/:content/:project"
            element={
              <HomeView
                hueRotation={hueRotation}
                setHueDuration={setHueDuration}
              />
            }
          />
        </Routes>
      </Router>
      <div className={"wip-disclaimer"}>
        <p>{`[Website Under Construction / Active Development]`}</p>
        <p>{`At the moment, some features may be incomplete, buggy, or site-breaking. Please re-visit when able to see how things change and how far they have come since last time!`}</p>
      </div>
    </div>
  );
}

export default App;
