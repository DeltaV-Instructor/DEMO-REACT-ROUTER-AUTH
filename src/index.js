import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";


ReactDOM.render(
  <Auth0Provider
    domain=""
    clientId=""
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);


