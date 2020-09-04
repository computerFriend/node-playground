// Go through all the variants for a job, and make sure they are accessible

let request = require('request'),
  async = require('async');

let base = 'https://hermes-dev.sandbox.cp.vubble.it/api/jobs/',
  headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };

var jobId = 1409; // hermes jobId you want to check
// TODO: add a way to check using Zeus Job ID
var unavailable = 0;

main(1412);

// checkAccess('https://zeus2-scratch-qa.s3.amazonaws.com/staging/92-variantfile-test01/mp4/variantfile-test01-92-416x234_200k.mp4?AWSAccessKeyId=ASIAUBJC5LQEGD2P7GRY&Signature=2FU2DAq2PLofm3nJ6X2Q5k%2Fc6HQ%3D&x-amz-security-token=FQoGZXIvYXdzEEYaDKIDV7uVRh6ziTWl%2FSKFAipXWLUopLUJCaSvQYNzckrLBGtr8388cKzWPighdh9j2S%2FqnuA4wJcN25elc0WlQF5UQp4qaBYejbMjQPsCULiNALWc%2B4dqioq%2BSTMmk%2BYZK%2FlErgHy%2F4S8w93jSAXugxeoxrfdgKTPEkhkYsmrwX8pGpkG23yvE0VmpS2W1148OkdEwk2Dbxs6qpoWdbzMtvUbwmdIcuXNWdq%2BrJ6tIHuHywkbigZgD98cTDA9bf1UFOXtXeLvDqkTDRbp0zZisEFfV1OqCfml3AT%2BzbMEEPYiRwVT2HwFTBJA32X1MeO9zq2a8Uz48EFjzwQBz9pw3dwZY2JxqLlnLaXGD1ZwXDcPVLkytyiButnsBQ%3D%3D&Expires=1570740323');

function main(id) {
  var options = {
    url: base + id,
    method: 'GET',
    headers: headers
  };
  var cantAccess = [];

  request(options, function(err, res, body) {
    var access=false;
    if (err) {
      console.error(err);
    } else {
      // Grab the variants & check them iteratively
      var variants = JSON.parse(body).variants; // TODO: add try-catch
      if (variants.length < 1) {
        console.log('No variants present yet.');
        return;
      }
      console.log('There are ' + variants.length + ' variants total.');
      variants.forEach(function(variant){
          access = checkAccess(variant);
          if (!access) {
            cantAccess.push(variant);
            unavailable++;
          }
      });
      if (unavailable < 1) {
        console.log('All variant files were available');
        return;
      }
    }

  });

}

function checkAccess(variantUrl) {
  console.log('Checking variant for access...');
  // TODO: find a way to set a timeout

  var options = {
    url: variantUrl,
    method: 'GET'
  };

  // console.log('Request options', options);

  request(options, function (err, res, body) {
    console.log('Requesting....');
    if (err) {
      console.log(err);
      console.log('Total unavailable: ' + unavailable);
      return false;
    } else if (res.statusCode !== 200) {
      console.error('Status Code ' + res.statusCode);
      console.error('Error in response: ', body);
      console.log('Total unavailable: ' + unavailable);

      return false;
    } else if (res.statusCode == 200) {
      console.log('Variant is available!');
      return true;
    } else {
      console.log('Unexpected result: ', body);
    }
  })
}
