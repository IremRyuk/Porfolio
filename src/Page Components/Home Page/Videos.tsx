import { useState } from "react";
import '../../Styles/Videos/videos.css'
import { useSelector } from "react-redux";
import First from '../../Videos/1.mp4'
import FF from '../../Videos/first.png'
import SS from '../../Videos/second.png'
import TT from '../../Videos/third.png'
import Second from '../../Videos/2.mp4'
import Third from '../../Videos/3.mp4'

export default function Videos() {
  const [loadVideo1, setLoadVideo1] = useState(false);
  const [loadVideo2, setLoadVideo2] = useState(false);
  const [loadVideo3, setLoadVideo3] = useState(false);
  const flag = useSelector((res:any)=>res.flag)
  return (
    <div className="video-box">
    <p className="Video-title">
         {
          flag === 'pl'
          ?<p>Moje utworzone filmy</p>
          :<p>My Created Videos</p>
         }
</p>
    <div className="mainVideos">

      {/* First */}
    <div className="videos">
      {!loadVideo1 ? (
        <div
          onClick={() => setLoadVideo1(true)}
          className="videosLoad"
          style={{backgroundImage:`url(${FF})`,backgroundSize:'cover'}}
        >
          {
          flag === 'pl'
          ?<p>▶ Odtwórz wideo</p>
          :<p>▶ Play Video</p>
         }
        </div>
      ) : (
        <video
          className="videoW"
          controls
          autoPlay
        >
          <source src={First} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
    </div>


    {/* Second */}
        <div className="videos">
      {!loadVideo2 ? (
        <div
          onClick={() => setLoadVideo2(true)}
          className="videosLoad"
          style={{backgroundImage:`url(${SS})`,backgroundSize:'cover'}}
        >
          {
          flag === 'pl'
          ?<p>▶ Odtwórz wideo</p>
          :<p>▶ Play Video</p>
         }
        </div>
      ) : (
        <video
          className="videoW"
          controls
          autoPlay
        >
          <source src={Second} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
    </div>
    

    {/* Third */}
        <div className="videos">
      {!loadVideo3 ? (
        <div
          onClick={() => setLoadVideo3(true)}
          className="videosLoad"
           style={{backgroundImage:`url(${TT})`,backgroundSize:'cover'}}
        >
          {
          flag === 'pl'
          ?<p>▶ Odtwórz wideo</p>
          :<p>▶ Play Video</p>
         }
        </div>
      ) : (
        <video
          className="videoW"
          controls
          autoPlay
        >
          <source src={Third} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
    </div>
  </div>
  </div>
  );
}
