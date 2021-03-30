import React from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Main from './components/Main/Main';
import GlobalStyle from './globalStyles';
import { Provider } from 'react-redux'
import store from './store/store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <GlobalStyle/>
      <AppBar></AppBar>
      <Main></Main>
      </Provider>
    </div>
  );
}

export default App;
