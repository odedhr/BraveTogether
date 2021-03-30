import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Main from './components/Main/Main';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <AppBar></AppBar>
      <Main></Main>
    </div>
  );
}

export default App;
