import React from 'react';
import Advertisement from './Components/Advertisement';
import Header from './Components/Header';
import Main from './Components/Main';
import SubContest from './Components/SubContest';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main>
        <SubContest />
        <Advertisement />
      </Main> 
    </div>
  );
}
                
export default App;