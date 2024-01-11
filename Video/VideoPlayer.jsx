import React, { useRef } from 'react';

const VideoPlayer = ({ videoSource }) => {
  const videoRef = useRef(null);

  return (
    <div>
      <video ref={videoRef} width="600" height="400" controls>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
