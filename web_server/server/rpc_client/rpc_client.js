var jayson = require('jayson');

var client = jayson.client.http({
  hostname: 'localhost',
  port: 4040
});

function add(num1, num2, callback) {
  client.request('add', [num1, num2], function(err, response) {
    if (err) throw err;
    console.log(response);
    callback(response.result);
   });
};

function getNewsSummariesForUser(user_id, page_num, callback) {
  client.request('getNewsSummariesForUser', [user_id, page_num], function(err, response) {
    if (err) throw err;
    console.log(response);
    callback(response.result);
  });
};

function logNewsClickForUser(user_id, news_id) {
  client.request('logNewsClickForUser', [user_id, news_id], function(err, response) {
    if(err) throw err;
    console.log(response);
  });
};

module.exports = {
  add : add,
  getNewsSummariesForUser : getNewsSummariesForUser,
  logNewsClickForUser : logNewsClickForUser
}