import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
import { MuiThemeProvider } from "@material-ui/core/styles";
import { AuthProvider } from './components/AuthContext/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>,
    </AuthProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
