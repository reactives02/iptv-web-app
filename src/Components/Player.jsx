import React, { useEffect, useState } from "react";
// import Hls from 'hls.js';
import { parse } from "iptv-playlist-parser";
import "./player.css";
import ReactPlayer from "react-player";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "./card/Card";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Player = () => {
  const history = useLocation();
  const navigate = useNavigate();

  const [channels, setChannels] = useState([]);
  const [channelNUM, setChannelNUM] = useState(0);
  const [viewPlayer, setViewPlayer] = useState("none");
  const [viewFlag, setViewFlag] = useState("flex");
  const url = history?.state;
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(
          `https://iptv-org.github.io/iptv/countries/${url.code.toLowerCase()}.m3u`
        );
        const playlistText = await response.text();
        const playlist = parse(playlistText);
        setChannels(playlist.items);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, []);
  //   console.log(playerRef.current)

  // useEffect(() => {

  //   if (Hls.isSupported() && channels.length) {
  //     const hls = new Hls();
  //   //   hls.loadSource(channels[channelNUM].url);
  //   //   hls.attachMedia(videoElement);
  //   }
  // });

  function handleChannel(idx) {
    setChannelNUM(idx);
    setViewPlayer("block");
    setViewFlag("none");
    // toast("Hello")
    // console.log(idx);
  }
  function handleReady() {
    
    toast.success("Video is Ready to Play...");
  }
  function handleError(channelName) {
    toast.error(`${channelName} is not Available....`);
  }
  function handleStart() {
    toast.info("Playing...")
  }

  return (
    <div className="playerContainer">
      <div className="wrap">
      <div className="btnWrap">

      <div onClick={() => navigate("/")} className="backbtn">
        <FaArrowLeftLong /> Go Back
      </div>
      </div>

      <div style={{ display: viewFlag }} className="countryimg">
        <img src={`countryFlags/${url.code}.png`} alt="" />
      </div>
      <div style={{ display: viewPlayer }} className="vid">
        <ReactPlayer
          onError={() => {
            handleError(channels[channelNUM]?.name);
          }}
          height={"100%"}
          width={"100%"}
          className="player"
          url={channels[channelNUM]?.url}
          controls
          onReady={handleReady}
          onStart={handleStart}
          volume={0.1}
          />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
          </div>
      </div>
      <div className="playerCardContainer">
        {channels.map((channelList, idx) => (
          <Card
            index={idx}
            handleChannel={handleChannel}
            d={channelList}
            type={"Player"}
          />
          // console.log(channelList)
        ))}

        {/* {channels.map((channel,idx) => (
            <div key={idx} className='ChannelList'>
                <img onClick={()=>handleChannel(idx)} className='logo' src={channel.tvg.logo} alt="" />
          <p onClick={()=>idx)}>{channel.name}</p>
            </div>handleChannel(
        ))} */}
      </div>
    </div>
  );
};

export default Player;
