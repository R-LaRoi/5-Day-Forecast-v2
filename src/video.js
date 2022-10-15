import React from "react";
import "./video.css";

export default function Video() {
  return (
    <div>
      <video
        src="https://user-images.githubusercontent.com/114012059/195986283-0e150901-92f6-4a04-b457-63471a7152f0.mov"
        type="video/mp4"
        loop
        muted
        autoPlay
        poster=""
      ></video>
    </div>
  );
}
