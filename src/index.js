import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain="dev-1g-dpise.us.auth0.com"
        clientId="9qhmKJ6qlqnyqTrhKPhYQ1InEN96WGBl"
        redirectUri={"http://localhost:3000/splash"}
    >
    <App />
    </Auth0Provider>
);