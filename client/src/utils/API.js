import axios from "axios";

export default {

  deleteGig: function(gigId){
    return axios.delete("/gig/"+ gigId, {withCredentials:true});
  },
  listGigs: function(uid){
    return axios.get("/api/listGigs/"+ uid, {withCredentials:true});
  },

  saveGig: function(data){
    return axios.post("/api/save/", data, {withCredentials:true});
  },

  getGigs: function(pnum){
    return axios.get("/api/reverbnation/"+ pnum, {withCredentials:true});
  },
  getTwitter:function(name){
    return axios.get("/api/twitter/band/" + name, {withCredentials:true});
  },

  getChart:function(name){
    return axios.get("/api/listener/band/" + name, {withCredentials:true});

  },
  getBand: function(name){
    return axios.get("/api/spotify/band/" + name, {withCredentials:true});
  },
  // bands routes
  getBands: function() {
    return axios.get("/api/bands");
  },

  getHelpWanted: function(help){
    return axios.post("/api/helpwanted", help);
  },
  
  saveHelpWanted: function(help){
    axios.post("/api/helpwanted", help)
    .then(function(data){
        console.log("saved Help Wanted ", data);
    });
  },

  // users routes
  login: function(creds) {
    console.log("login attempt", creds.username, creds.password);
    axios.post("/api/users", creds)
      .then(function(data) {
        console.log("login response", data);

        let returnObj = { message: "", success: false };
        let currentUsernames = [], currentPasswords = [];
        for (let i = 0; i < data.length; i++) {
          currentUsernames.push(data[i].username);
          currentPasswords.push(data[i].password);
        }
        if (currentUsernames.indexOf(creds.username) === -1) {
          returnObj.message = "Your Username does not exist.  Please try again.";
        }
        else if (creds.password !== currentPasswords[currentUsernames.indexOf(creds.username)]) {
          returnObj.message = "Your Password does not match.  Please try again";
        } else {
          returnObj.success = true;
          returnObj.message = "You have successfully logged in!";
        }
        return returnObj;
        // window.location.href = "/success/" + (currentUsernames.indexOf(creds.username) + 1);
    });
  },
  findUser: function(user) {
    return axios.get("/api/users", user);
  },
  logout: function(user) {
    return axios.put("/api/users" + user);
  },

  // T-E-S-S-S-S-S-S-S-S-T . . .
  getMsg: function() {
    return axios.get("/message");
  }

};

