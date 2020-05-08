import React from 'react';

import Routes from './routes';
import { TaskProvider } from './context/TaskContext';
import { UserProvider } from './context/UserContext';
import GlobalStyle from './styles/global';

function App() {
  return (
    <TaskProvider>
      <UserProvider>
        <Routes />
        <GlobalStyle />
      </UserProvider>
    </TaskProvider>
  );
}

export default App;
