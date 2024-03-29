import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeView from "./components/HomeView";
import ErrorNotFound from "./components/ErrorNotFound";

// 9-28-22
// Refactoring routes, and general way this 'web app' works. Making HomeView the default route, with a 'modal' over it which will be Landing Page. Instead of all this weird routing form Landing Page to Homeview, landing page will be an overlay that exists within HomeView, that is only present when the user is at /landing. Thinking of actually making the LandingPage an option for "HVContent" that steels the entire viewport, so that HomeView is always there behind it.

// This would effectively make "App" into what is currently HomeView, and turn HomeView into HVContent which can then be routed between

// jakesnyder.dev/:landingOrHome/:category1/:gameOrWeb/:project
// jakesnyder.dev/:landingOrHome/:category1/introduction
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomeView />}>
          <Route path='/:landingOrHome' element={<HomeView />}>
            <Route path=':category1' element={<HomeView />}>
              <Route path=':gameOrWeb' element={<HomeView />}>
                <Route path=':project' element={<HomeView />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path='404NotFound' element={<ErrorNotFound />} />
        <Route path='*' element={<ErrorNotFound />} />
      </Routes>
    </div>
  );
}

// <Route path='/' element={<LandingPage />} />
// <Route path='/landing' element={<LandingPage />}>
//   <Route path='/landing/:category' element={<LandingPage />} />
//   <Route
//     path='/landing/:category/:content'
//     element={<LandingPage />}
//   />
//   <Route
//     path='/landing/:category/:content/:project'
//     element={<LandingPage />}
//   />
// </Route>
// <Route path='/home' element={<HomeView />}>
//   <Route path='/home/:category/:content' element={<HomeView />} />
//   <Route
//     path='/home/:category/:content/:project'
//     element={<HomeView />}
//   />
// </Route>

export default App;
