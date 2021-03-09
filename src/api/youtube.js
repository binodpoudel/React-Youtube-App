
import axios from 'axios';


/// hear I use make request for  axios.create
// because that easy to use
//  I use axios.create instead of axios.get

const KEY = 'Type your YourTube API Key and run ';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
        maxResults: 8,
        key: KEY,
       
      },
});

