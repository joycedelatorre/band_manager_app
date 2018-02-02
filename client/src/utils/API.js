import axios from "axios";
import Twitter from "twitter";
  

const client = new Twitter({
  consumer_key:'Ay0w8bJBkdWgTjy7mtXvbPzT8',
  consumer_secret:'mKegADFO1DxM1Fsalw4NQOBZZhWJelPLLrYdLQMczZTTNSYyjy',
  access_token_key:'940763629342941185-4RbW7RG3y8J6PslQBu2n4OnzpuqYOnm',
  access_token_secret:'Ka7XzeIXgblWld1B9Kmqp7LZLrokqeBzp7uj7ci7J8r4b'
    });



export default {

  getChart:function(name){
    return axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + name + "&api_key=257b3ccab678d3242a9df1d72c677454&format=json");
  },
  getBand: function(name){
    return axios.get("/api/spotify/band/" + name, {withCredentials:true});
  },
  // bands routes
  getBands: function() {
    return axios.get("/api/bands");
  },
  // getBand: function(id) {
  //   return axios.get("/api/bands/" + id);
  // },
  deleteBand: function(id) {
    return axios.delete("/api/bands/" + id);
  },
  saveBand: function(bandData) {
    return axios.post("/api/bands", bandData);
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

