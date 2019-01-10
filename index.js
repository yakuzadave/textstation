const fetch = require('node-fetch')
const request = require('request');


request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


fetch('https://ptb.discordapp.com/api/webhooks/528021933275480085/ECzbLFsIWMSzMxvBe8Siz7AHRlLbL5tibfyqn5vKy2FBozUp4te97aSbl9mLAn4k0R_J')
.then(res => res.json())
.then(json => console.log(body));