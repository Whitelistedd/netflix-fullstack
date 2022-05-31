import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from "react"
import Home from './pages/Home'
import { Profiles } from "./pages/Profiles";
import { Browse } from "./pages/Browse";
import { Splash } from "./components/Splash/Splash";

const App : React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profiles" element={<Profiles />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/Splash" element={<Splash />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
