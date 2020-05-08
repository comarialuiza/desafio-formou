import React from 'react';

import Routes from './routes';
import { TaskProvider } from './context/TaskContext';
import GlobalStyle from './styles/global';

function App() {
  return (
    <TaskProvider>
      <Routes />
      <GlobalStyle />
    </TaskProvider>
  );
}

export default App;
