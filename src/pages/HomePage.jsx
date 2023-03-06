import React, { useEffect, useState } from "react";
import axios from "axios";

import CampaignCard from "../components/CampaignCard";
import Header from "../components/Header";

import "./HomePage.css";

const FEED_URL = "https://www.plugco.in/public/take_home_sample_feed";

export default function HomePage() {
  const [campaignData, setCampaignData] = useState([]);
  console.log(campaignData);

  async function getCampaignData() {
    const response = await axios.get(FEED_URL);
    setCampaignData(response.data.campaigns);
  }

  useEffect(() => {
    getCampaignData();
  }, []);

  return (
    <div className="theplug-app-wrapper">
      <Header />
      {campaignData &&
        campaignData.map((eventitem) => {
          return <CampaignCard eventitem={eventitem} key={eventitem.id} />;
        })}
    </div>
  );
}
