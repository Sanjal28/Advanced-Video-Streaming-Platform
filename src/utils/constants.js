export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key="+process.env.REACT_APP_YOUTUBE_KEY
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="