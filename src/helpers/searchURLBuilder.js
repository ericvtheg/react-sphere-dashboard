export default function searchURLBuilder(tags, locationID, engagement, followerRange, emailBool, language, offset){
  let url = "http://localhost:3001/influencersearch/?"
  url += "tags=" + (tags ? tags : "") + "&";;
  url += "locationID=" + (locationID ? locationID : "") + "&";
  url += "minEngagement=" + (engagement ? engagement : 0) + "&";
  url += "followers=" + (followerRange ? followerRange : "0,100000000") + "&";
  url += "emailBool=" + (emailBool ? true : false) + "&";
  url += "language=" + (language ? language : "") + "&";
  url += "offset=" + (offset ? offset : 0);
  return url;
}