import React from "react";
import "./TweetBox.css";
import { Avatar, Button, Input } from "@mui/material";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <Input placeholder="What's happening?" type="text" />
        </div>
        <Button type="submit">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;