import VideoPlayer from "./VideoPlayer";

function PageWithVideo () {
  return (
    <div>
      <VideoPlayer>

        <VideoPlayer.Player src={"sample.mp4"}/>

        <VideoPlayer.Play>
          <button>Play</button>
        </VideoPlayer.Play>


        <VideoPlayer.Stop>
          <button>Stop</button>
        </VideoPlayer.Stop>


      </VideoPlayer>
    </div>
  )
}


export default PageWithVideo;
