import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';

import {BrowserRouter} from 'react-router-dom'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <GoogleOAuthProvider clientId="57734265022-t1b1qtep48kpn39b5rka7tq5ju2ahhsq.apps.googleusercontent.com">
     <App />
     </GoogleOAuthProvider>;
     </BrowserRouter>
  </React.StrictMode>
);


