import React from 'react';
import './App.css';
import VideoPlayer from './player';

function App() {
  const samples = [
    {
      id: 1,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 2,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 3,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 4,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 5,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 6,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 7,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 8,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 9,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 10,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 11,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 12,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 13,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 14,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 15,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 16,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 17,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 18,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 19,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    },
    {
      id: 20,
      webm: 'http://techslides.com/demos/sample-videos/small.webm',
      ogg: 'http://techslides.com/demos/sample-videos/small.ogv',
      mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
      three_gp: 'http://techslides.com/demos/sample-videos/small.3gp'
    }
  ];
  
  return (
    <div className="App">
      <VideoPlayer numPerScreen={8} items={samples}/>
    </div>
  );
}

export default App;
