import React from "react";
import "./Tweet.css";
import ItemTweetJetBrain from "./ItemTweet";
import ItemTweetGoogleDev from "./ItemTweetGoogleDev";

const Tweet = () => {
  return (
    <div className="sectionTweets">
      <h1 className="title">Menciones</h1>
      <div className="containerTweets">
        <ItemTweetJetBrain />
        <ItemTweetGoogleDev />
      </div>
    </div>
  );
};

export default Tweet;
