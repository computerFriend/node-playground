// Do a mass update on Hermes jobs
let request = require('request'),
  async = require('async');

var base = 'https://hermes-dev.sandbox.cp.vubble.it/api/jobs',
  headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };

var targetState = 'Queued', // State that you want changed
  pageSize = 50;


// Get the jobs to be updated
var searchUrl = base + '?state=' + targetState + '&size=' + pageSize + '&paginate=true'; // TODO: parameterize

// Send multiple PUT requests to update them
fetchAndUpdate(searchUrl);

function fetchAndUpdate(url) {
  var fetchOptions = {
    method: 'GET',
    url: url,
    headers: headers
  };
  request(fetchOptions, function(err, res, body) {
    if (err) {
      console.err(err);
      throw err;
    } else {
      console.log('Found jobs: ',body);
      var allJobs = JSON.parse(body).jobs;
      // Search & Destroy
      allJobs.forEach(function(job) {
        // Include any extra conditions here, if you want them. Otherwise, remove the conditional.
        if (job.maxRetries) {
          updateState(job._id, 'Canceled');
        }

      })
    }
  });
}




function updateState(id, newState) {
  console.log('Updating state of job ' + id + ' to ' + newState);
  var reqBodyObj = {
    "state": newState
  };
  var updateStateReq = {
    method: 'PUT',
    url: base + '/' + id + '/state',
    headers: headers,
    body: JSON.stringify(reqBodyObj)
  }
  request(updateStateReq, function(err, res, body) {
    if (err) {
      console.err(err);
      throw err;
    } else {
      console.log(res.statusCode);
    }
  });

}
