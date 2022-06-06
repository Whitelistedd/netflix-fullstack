import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Splash } from './components/Splash/Splash';
import { Browse } from './pages/Browse';
import Home from './pages/Home';
import { Play } from './pages/Play';
import { Profiles } from './pages/Profiles';

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
        {/* <Route path="/" element={<PrivateRoutes/>}>  для реального входа и без анонимного входа */}
          <Route path="/Profiles" element={<Profiles />} />
          <Route path="/Browse" element={<Browse />} />
          <Route path="/Splash" element={<Splash />} />
          <Route path="/play" element={<Play />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
