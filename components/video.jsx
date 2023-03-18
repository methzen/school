import React from "react";
import ReactPlayer from "react-player";


const Video = () => {
    return (
      <div className="player-wrapper mt-5">
            <ReactPlayer
              className="react-player"
              controls
              url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              width="100%"
              height="100%"
            />
      </div>

    );
}
export default Video;
