import axios from "axios";

export default {

  // bands routes
  getBands: function() {
    return axios.get("/api/bands");
  },
  getBand: function(id) {
    return axios.get("/api/bands/" + id);
  },
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

