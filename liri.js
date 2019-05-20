require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");


var spotifycall = new spotifycall();

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");
var divider = "\n------------------------------------------------------------\n\n";



if (!search) {
    search = "spotify-this-song";
  }
  
  // By default, if no search term is provided, search for "Andy Griffith"
  if (!term) {
    term = "Andy Griffith";
  }
  
  // Print whether searching for a spotify-this-song or actor, print the term as well
  if (search === "spotify-this-song") {
    console.log("Searching Spotify");
    spotifycall.info(term);
  } else {
    console.log("Searching for spotifycall Actor");
    spotifycall.bandsintown(term);
  }
  

