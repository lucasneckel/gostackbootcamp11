import React from 'react';

import Header from './components/Header';


function App() {
  return (
    <>
      <Header title="Home page"> 
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Adicioar">
      <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;