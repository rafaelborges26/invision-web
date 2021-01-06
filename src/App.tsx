import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import AppInvision from './hooks';

const App: React.FC = () => (
  <>
    <Router>
      <AppInvision>
        <Routes />
      </AppInvision>
      <GlobalStyle />
    </Router>
  </>
);

export default App;
