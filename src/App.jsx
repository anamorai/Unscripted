import Header from './components/Header';
import Grid from './components/Grid';
import { useState } from 'react';
import { Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode);
  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });
  const handleChange = () => {
    if (mode) {
      setMode(false);
    } else {
      setMode(true);
    }
  };

  return (
    <>
      <ThemeProvider theme={ appTheme }>
        <Paper elevation={ 0 } sx={ { height: "100vh" } } square>
          <Header mode={ mode } handleChange={ handleChange } />
          <div style={ { marginBottom: '50px' } }>
            {/* Other content */ }
          </div>
          <div>
            <Grid />
          </div>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default App;