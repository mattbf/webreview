import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ModeWrapper from './ModeWrapper.js';

const theme = createMuiTheme({
  primary: {
    main: '#00c676',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModeWrapper/>
    </ThemeProvider >
  );
}

export default App;
