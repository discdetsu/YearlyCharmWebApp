import React from 'react';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Mansonry from './components/Mansonry';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Mansonry />
    </div>
  );
}

export default App;
