import ReactPlayer from "react-player";

export default function PTCVideo() {
  return (
    <>
      <div className="player-wrapper">
        {/* // <div> */}
        <ReactPlayer
          className="react-player"
          url="https://vimeo.com/703719897"
          width="100%"
          height="100%"
          controls="true"
          playing="true"
          muted="true"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />
      </div>

      <style jsx>{`
        .player-wrapper {
          position: relative;
          padding-bottom: 56.1%;
          height: 0;
          overflow: hidden;
          /* Player ratio: 100 / (1280 / 720) */
        }

        .react-player {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid green;
        }
      `}</style>
    </>
  );
}
