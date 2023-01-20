import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/header';
import Page from './components/page/Page';
import store from '../src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Page />
      </Provider>
    </>
  );
  // return <div>Hello, React!</div>;
};

export default App;
