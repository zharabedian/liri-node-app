require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var Spotify = require('node-spotify-api');


var spotify = new spotify(keys.spotify);

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
  

  this.findShow = function(show) {
    var URL = "https://www.npmjs.com/package/node-spotify-api" + show;

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;

      // showData ends up being the string containing the show data we will print to the console
      var showData = [
        "Artist Name " + data[0].artists[0].name,
        "Song Name:  " + data[0].name,
        "Preview URL " + data[0].preview_url,
        "Song Album " + data[0].album.name,
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, function(err) {
        if (err) throw err;
        console.log(showData);
      });
    });
  };


run(spotifySong);
  function spotifySong() {
    if( !userPick ){
        userPick = "the sign by ace of base"
   };

    spotify.search({ type: 'track', query: userPick }, function(err, data) {
        if ( err ) {
            log.info('Error occurred: ' + err);
            return;
        };

        var data = data.tracks.items

        log.info("========================")
        log.info("The Artist is: " + data[0].artists[0].name);
        log.info("The song title is: " + data[0].name);
        log.info("Preview Link: " + data[0].preview_url);
        log.info("The album title is: " +data[0].album.name);          
    });
 };