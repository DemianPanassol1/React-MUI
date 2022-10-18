import { AnimatePresence } from 'framer-motion';
import { CssBaseline } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import React, { useEffect } from 'react';

import Home from '../Home';

import theme from '../../themes/global';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.getElementById('root').style.overflowX = 'hidden';
  }, []);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AnimatePresence initial={false} mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
