"use client";
import React from "react";
import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

interface Props {
  url: string;
}

const VideoPlayerComponent = ({ url }: Props) => {
  return (
    <ReactPlayer
      url={url}
      width={"100%"}
      height={"100%"}
      controls={true}
      style={{ borderRadius: "8px" }}
    />
  );
};

export default dynamic(() => Promise.resolve(VideoPlayerComponent), {
  ssr: false,
});
