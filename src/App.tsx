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
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoutes from "./utils/PrivateRoutes";

const App : React.FC = () => {

  const { isLoading,error } = useAuth0();

  if(isLoading) {
    return <>Loading...</>
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/" element={<PrivateRoutes/>}>
          <Route path="/Profiles" element={<Profiles />} />
          <Route path="/Browse" element={<Browse />} />
          <Route path="/Splash" element={<Splash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
