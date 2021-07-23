import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1>Lets build a FULL STACK MERN tik tok clone</h1>

      <div className="app__videos">
        <Video />
        <Video />
      </div>
      {/* app container */}
      {/* videos */}
    </div>
  );
}

export default App;
