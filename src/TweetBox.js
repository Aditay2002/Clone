import { Button } from '@mui/material';
import React, { useState } from 'react'
import {Avatar} from "@mui/material"
import db from './firebase';
import "./TweetBox.css";
function TweetBox() {
  const [tweetMessage,setTweetMessage]=useState("");
  const [tweetImage,setTweetImage]=useState("");
  const sendTweet= e=>{
    e.preventDefault();
 db.collection('posts').add({
  displayName: "Virat Kholi",
  username: "___aditay_",
  verified: true,
  text: tweetMessage,
  image: tweetImage,
  avatar:
    "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
});
setTweetMessage("");
setTweetImage("");
  }
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
<Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'/>
            <input 
            onChange={(e)=>setTweetMessage(e.target.value)}
             value={tweetMessage} placeholder='whats happening?' type="text"></input>
            </div>
            <input 
            onChange={(e)=>setTweetImage(e.target.value)}
            value={tweetImage}
            className='tweetBox__imageInput' placeholder='Optional:Enter image URL' type="text"></input>
            <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox