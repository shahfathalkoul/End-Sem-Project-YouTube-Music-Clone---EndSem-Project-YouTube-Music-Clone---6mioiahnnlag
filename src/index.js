import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {AudioProvider} from './context/AudioContext'
// import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AudioProvider>
      {/*<GoogleOAuthProvider clientId="13870001096-r71e1mbam2rkj293i7pedshlg4g5i68j.apps.googleusercontent.com">*/}
          <App />
      </AudioProvider>
      {/*</GoogleOAuthProvider>;*/}

  </React.StrictMode>
);
