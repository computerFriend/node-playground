let fs = require('fs');

// user inputs
var filepath = '../testFiles/iSP-progs.json';

var vidList = fs.readFileSync(filepath);

// check obj Type
// if (!Array.isArray(vidList)) {
//   console.error('This script is for parsing arrays, ya psycho. Reformat. Input type is ' + typeof vidList);
//   return 1;
// }

// counters
var nonzeroClipIDs = 0,
  zeroClipIDs = 0;

vidList.forEach(function(obj) {
  // This part will change given the situation; put your search conditions here
  if (obj.pub_vod_id && obj.pub_vod_id != 0) {
    console.log('Found a non-zero pub_clip_id!\n > ProgID: ' + obj.progid + '\n > pub_clip_id' + obj.pub_vod_id);
   nonzeroClipIDs++;
 } else {
   zeroClipIDs++;
 }
});

console.log('nonzeroClipIDs: ' + nonzeroClipIDs + '\n > zeroClipIDs: ' + zeroClipIDs);
