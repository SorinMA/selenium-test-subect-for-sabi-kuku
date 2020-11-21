import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {AuthProvider} from "./context/AuthContext"
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <Router>
    <AuthProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);
