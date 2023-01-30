import React from 'react';
import {StatusBar} from 'react-native';
import {Home} from './src/screens/Home';

// import { Container } from './styles';

const App = () => (
  <>
    <StatusBar barStyle="light-content" />
    <Home />
  </>
);

export default App;
