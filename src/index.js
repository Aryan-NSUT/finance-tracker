import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { StylesProvider } from "@material-ui/core/styles" // <-- import this component, and wrap your App.
import { StyledEngineProvider } from '@mui/material/styles';
ReactDOM.render(
  <StyledEngineProvider injectFirst>
  <App />
  </StyledEngineProvider>,
  document.getElementById('root')
);