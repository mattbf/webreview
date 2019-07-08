import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import WebContainer from './WebContainer.js';

const theme = createMuiTheme({
  primary: {
    main: '#00c676',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WebContainer/>
    </ThemeProvider >
  );
}

export default App;
