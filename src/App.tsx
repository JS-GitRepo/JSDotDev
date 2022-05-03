import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomeView from "./components/HomeView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/landing/:location" element={<LandingPage />} />
          <Route path="/landing/:location/:content" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/home/:location/:content" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
