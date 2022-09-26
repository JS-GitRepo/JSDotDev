import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import HomeView from "./components/HomeView";
import WIPDisclaimer from "./components/WIPDisclaimer";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/landing' element={<LandingPage />} />
          <Route path='/landing/:location' element={<LandingPage />} />
          <Route path='/landing/:category/:content' element={<LandingPage />} />
          <Route
            path='/landing/:category/:content/:project'
            element={<LandingPage />}
          />
          <Route path='/home' element={<HomeView />} />
          <Route path='/home/:category/:content' element={<HomeView />} />
          <Route
            path='/home/:category/:content/:project'
            element={<HomeView />}
          />
        </Routes>
      </Router>
      <WIPDisclaimer />
    </div>
  );
}

export default App;
