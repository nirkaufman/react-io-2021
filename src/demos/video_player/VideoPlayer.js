import React, { cloneElement, createContext, useContext, useRef, useState } from 'react';

const PlayerContext = createContext(null);

// VideoPlayer API
export function useVideo () {
  const ref = useRef();
  const [status, setStatus] = useState();

  const play = () => {
    ref.current.play();
    setStatus("Playing");
  }

  const stop = () => {
    ref.current.pause();
    setStatus("Stopped");
  }

  return {play, stop, ref, status};
}

// Context provide for videoPlayer API
const VideoPlayer = ({ children }) => {
  const playerApi = useVideo();

  return (
    <PlayerContext.Provider value={playerApi}>
      {children}
    </PlayerContext.Provider>
  );
};

// Wrappers for specific video player functionality
const Player = ({ src }) => {
  const {ref} = useContext(PlayerContext);
  return <video src={src} ref={ref} width={200}/>
}

const Play = ({ children }) => {
  const {play} = useContext(PlayerContext);
  return cloneElement(children, {onClick: play})
}

const Stop = ({ children}) => {
  const {stop} = useContext(PlayerContext);
  return cloneElement(children, {onClick: stop})
}

// Group everything together
VideoPlayer.Player = Player;
VideoPlayer.Stop = Stop;
VideoPlayer.Play = Play;

export default VideoPlayer;
