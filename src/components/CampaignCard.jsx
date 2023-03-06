import VideosCard from "./VideosCard";

import "./CampaignCard.css";
export default function CampaignCard({ eventitem }) {
  return (
    <div>
      <div className="event-card-wrapper">
        <div className="event-card-iconetc">
          <div className="icon">
            <img src={eventitem.campaign_icon_url} alt="" />
          </div>
          <div className="details">
            <p className="event-name">{eventitem.campaign_name}</p>
            <p className="event-install">
              {eventitem.pay_per_install} per install
            </p>
          </div>
        </div>
        <div className="videos-card">
          {eventitem.medias.map((video) => {
            return <VideosCard video={video} />;
          })}
        </div>
      </div>
    </div>
  );
}
