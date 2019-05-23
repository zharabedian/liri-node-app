require("dotenv").config();
var keys = require("./key.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");


var spotify = new Spotify(keys.spotify);
//var spotify = new spotify(keys.spotify);

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");
var divider = "\n------------------------------------------------------------\n\n";

if (!search) {
  search = "spotify-this-song";
}





function findmovie(userPick) {
  if (!userPick) {
    userPick = "How to lose a guy in 10 days"
  };
  var search = userPick.split(" ")
  console.log(search)
  var newsearch = search.join("+")
  console.log(newsearch)

  axios.get("http://www.omdbapi.com/?t=" + newsearch + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
      console.log(response.data);
    }
  );

}

var findShow = function (show) {
  var URL = "https://www.npmjs.com/package/node-spotify-api" + show;

  axios.get(URL).then(function (response) {
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
    fs.appendFile("log.txt", showData + divider, function (err) {
      if (err) throw err;
      console.log(showData);
    });
  });
};


function getMyBands(userPick) {
  if (!userPick) {
    userPick = "Lady gaga"
  };

  var search = userPick.split(" ")
  console.log(search)
  var newsearch = search.join("+")
  console.log(newsearch)

  axios.get("https://rest.bandsintown.com/artists/" + newsearch + "/events?app_id=codingbootcamp")
    .then(function (response) {
      console.log(response.data[0].venue.name);
    })
    .catch(function(error){
      console.log("error")
    })
}


function spotifySong(userPick) {
  if (!userPick) {
    userPick = "the sign by ace of base"
  };

  spotify.search({ type: 'track', query: userPick }, function (err, data) {
    if (err) {
      log.info('Error occurred: ' + err);
      return;
    };

    var data = data.tracks.items
    console.log(divider)
    console.log("The Artist is: " + data[0].artists[0].name)
    console.log("The song title is: " + data[0].name)
    console.log("Preview Link: " + data[0].preview_url)
    console.log("The album title is: " + data[0].album.name)
  });
};


//Print whether searching for a spotify-this-song or actor, print the term as well
// if (search === "spotify-this-song") {
//   console.log("Searching Spotify");
//   spotifySong(term);
// } 
// else if (search === "movie-this") {
//   console.log("Searching for your movie")
//   findmovie(term);
// }


var pick = function (caseData, functionData) {
  switch (caseData) {
    case "concert-this":
      getMyBands(functionData);
      break;
    case "spotify-this-song":
      spotifySong(functionData);
      break;
    case "movie-this":
      findmovie(functionData);
      break;
  }
}
pick(search, term);