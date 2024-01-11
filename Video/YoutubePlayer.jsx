import React, { useState } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  const onReady = (event) => {
    // event.target burada video oynatıcıyı temsil eder
    setPlayer(event.target);
  };

  return (
    <div>
      <YouTube videoId={videoId} onReady={onReady} />
    </div>
  );
};

export default YouTubePlayer;
