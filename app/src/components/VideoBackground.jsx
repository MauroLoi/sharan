import { useEffect, useRef } from "react";
import videoClouds from "../assets/balance.mp4";

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; 
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoClouds} type="video/mp4" />
      </video>

      
    </div>
  );
};

export default VideoBackground;