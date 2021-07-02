import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';

import FormPasswordReset from './FormPasswordReset';
import './styles.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function forgotPass() {
  return (
    <div className="App">
      <Typography variant="title" style={{ margin: '16px 0' }}>
        React Password Reset
      </Typography>
      <FormPasswordReset />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </MuiThemeProvider>,
  rootElement
);
