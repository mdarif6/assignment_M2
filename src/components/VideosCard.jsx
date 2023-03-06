import { useState } from "react";
import "./VideosCard.css";

export default function VideosCard({ video }) {
  const [copiedText, setCopiedText] = useState("");
  function copyToClipBoard() {
    setCopiedText(video.tracking_link);
    alert(`you have copied ${copiedText}`);
  }
  console.log(copiedText);
  return (
    <div>
      <div className="videos-and-footicons">
        <div className="video">
          <a href={video.download_url}>
            <div className="play-btn">
              <img src={video.cover_photo_url} alt="" />
            </div>
            {/* <div>
              <i class="fa-solid fa-play"></i>
            </div> */}
          </a>
        </div>
        {/* <div className="footicons">
          <button className="primary-btn" onClick={() => copyToClipBoard()}>
            <i class="fa-solid fa-link"></i>
          </button>

          <a href={video.download_url}>
            <button className="primary-btn">
              <i class="fa-solid fa-arrow-down"></i>
            </button>
          </a>
        </div> */}

        <div className="footicons">
          <div className="left">
            <button className="primary-btn" onClick={() => copyToClipBoard()}>
              <i class="fa-solid fa-link"></i>
            </button>
          </div>
          <div className="right">
            <a href={video.download_url}>
              <button className="primary-btn">
                <i class="fa-solid fa-arrow-down"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
