import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://assets.mixkit.co/videos/preview/mixkit-little-girl-and-her-father-playing-with-toys-at-christmas-39754-large.mp4"
          channel="gunner"
          description="MERN stack learner"
          song="You Raise me up"
          likes={123}
          messages={21}
          shares={42}
        />
        <Video
          url="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4"
          channel="Stellar"
          description="Swimming is so good"
          song="Sunglass"
          likes={13454}
          messages={1400}
          shares={6047}
        />
      </div>
    </div>
  );
}

export default App;
