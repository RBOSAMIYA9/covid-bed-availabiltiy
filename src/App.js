import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import HospitalForm from './components/HospitalForm'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

// import Header from './components/Header'

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          {/* <Header /> */}
          <Switch>
            <Route path="/hospitalForm">
              <HospitalForm />
            </Route>

            <Route path="/admin" exact>
              <Dashboard />
            </Route>

            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
