

console.log("Gapi");

// Client ID and API key from the Developer Console
      var CLIENT_ID = '464160877344-rcofnvom883b6v6jvm1smr0tq7nkd36t.apps.googleusercontent.com';

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

      // Authorization scopes required by the API. If using multiple scopes,
      // separated them with spaces.
      var SCOPES = 'https://www.googleapis.com/auth/yt-analytics.readonly';

      var authorizeButton = document.getElementById('authorize-button');
      var signoutButton = document.getElementById('signout-button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          discoveryDocs: DISCOVERY_DOCS,
          clientId: CLIENT_ID,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        });
      }
// ===================================================
      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          authorizeButton.style.display = 'none';
          signoutButton.style.display = 'block';
          // getChannel();
          getGeneral();
          getGeo();
        } else {
          authorizeButton.style.display = 'block';
          signoutButton.style.display = 'none';
        }
      }
// ====================================================
      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

      /**
       * Append text to a pre element in the body, adding the given message
       * to a text node in that element. Used to display info from API response.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

      /**
       * Print files.
       */
      function getChannel() {
        gapi.client.youtube.channels.list({
          'part': 'snippet,contentDetails,statistics',
          'forUsername': 'JonWhyte '
        }).then(function(response) {
          console.log(response.result.items);
        });   
      }

     function getGeneral(){
      gapi.client.request({
        'method': 'GET',
          'path': '/youtube/analytics/v1/reports',
          'params': {'ids': 'channel==mine', 'start-date': '2018-01-01', 'end-date': '2018-01-30', 'metrics': 'views,likes'}
}).then(function(response){
        console.log(response.result);
      });
      }

      function getGeo(){
      gapi.client.request({
        'method': 'GET',
        'path': '/youtube/analytics/v1/reports',
        'params': {'ids': 'channel==mine', 'start-date': '2018-01-01', 'end-date': '2018-01-30','metrics': 'views,estimatedMinutesWatched,averageViewDuration', 'demensions':'province','filters':'country==US','sorts':'province'}
}).then(function(response){
        console.log(response.result);
      });
      }



 