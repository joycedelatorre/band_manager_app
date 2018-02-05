


// var http = require("http");
// var fs = require("fs");
// var PORT = 3000;
// var server = http.createServer(handleRequest);



// function handleRequest(req, res){
//   var path = req.url;
//       return fs.readFile(__dirname + "/analytics_codelab.html", function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end(data);
//       });
// };

// function contentType(relPath) {
//   var ext = 
//     relPath.split(".").pop().toLowerCase();
//   switch (ext) {
//     //case "htm": case "html":
//     //  ext = "text/html";
//     //  break;
//     case "css":
//       ext = "text/css";
//       break;
//     case "js": case "json":
//       ext = "text/javascript";
//       break;
//     case "jpg": case "png": case "gif":
//       ext = "image/jpeg";
//       break;
//     default:
//       ext = "text/html";
//       //ext = "text/plain";
//   }
//   return ext;
// };
// The client ID is obtained from the {{ Google Cloud Console }}
// at {{ https://cloud.google.com/console }}.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.
var OAUTH2_CLIENT_ID = '464160877344-mb9dk09ok7oeog869u6b4baditinldmp.apps.googleusercontent.com';
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

// Upon loading, the Google APIs JS client automatically invokes this callback.
googleApiClientReady = function() {
  gapi.auth.init(function() {
    window.setTimeout(checkAuth, 1);
  });
}

// Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
// If the currently logged-in Google Account has previously authorized
// the client specified as the OAUTH2_CLIENT_ID, then the authorization
// succeeds with no user intervention. Otherwise, it fails and the
// user interface that prompts for authorization needs to display.
function checkAuth() {
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

// Handle the result of a gapi.auth.authorize() call.
function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.
    $('.pre-auth').hide();
    $('.post-auth').show();
    loadAPIClientInterfaces();
  } else {
    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    $('#login-link').click(function() {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
        }, handleAuthResult);
    });
  }
}

// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// https://developers.google.com/api-client-library/javascript/dev/dev_jscript#loading-the-client-library-and-the-api
function loadAPIClientInterfaces() {
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}



// Starts our server.
// server.listen(PORT, function() {
//   console.log("Server is listening on PORT: " + PORT);
// });