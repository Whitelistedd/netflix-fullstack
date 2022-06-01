import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain="dev-1g-dpise.us.auth0.com"
        clientId="zyrO0UIZOgGiFahn48tjlWS1VJfAEbH6"
        redirectUri={process.env.REACT_APP_redirectUri}
    >
    <App />
    </Auth0Provider>
);