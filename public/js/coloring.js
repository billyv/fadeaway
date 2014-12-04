var rpb = ['red', 'purple', 'black'];
var oyw = ['orange', 'yellow', 'white'];

// returns an array of int x split into roughly equal intervals
// anything that does not fit in evenly is added into the first intervals one by one
function split(x, numIntervals) {
  var xIntervals = [0]; // initialize array
  x = Math.floor(x); // convert decimal to int
  var extra = x % numIntervals;
  var interval = Math.floor(x/numIntervals);

  var i;
  var j = 0;
  var currentInterval = 0;
  for (i = 0; i < numIntervals; i++) {
    currentInterval += interval;
    if (j < extra) {
      currentInterval++; // add extra pieces on
      j++;
    }
    xIntervals.push(currentInterval);
  }
  return xIntervals;
}

// take max time in ms, and what colors (as list) you want to fade through for bg and for txt.
// these arrays must be same length.
function d3ColorFriend(time, bgColors, txtColors) {

  var friends = document.getElementsByClassName("fadefriend");
  var now = new Date().getTime(); //time in ms
  var intervals = bgColors.length - 1;

  timeIntervals = split(time, intervals);

                                              //1min
  var bgScale = d3.scale.linear().domain(timeIntervals).range(bgColors);
  var txtScale = d3.scale.linear().domain(timeIntervals).range(txtColors);

  var difference;
  var i;
  for (i = 0; i < friends.length; i++) {

    var lastContact = friends[i].attributes['data-last-contacted'].value;
    if (lastContact == "" || now-lastContact > time) {
      friends[i].style.backgroundColor = bgColors[bgColors.length - 1];
      friends[i].style.color = txtColors[txtColors.length - 1];
      continue;
    }

    difference = now - lastContact;
    bgColor = d3.hsl(bgScale(difference)).toString();
    txtColor = d3.hsl(txtScale(difference)).toString();

    friends[i].style.backgroundColor = bgColor;
    friends[i].style.color = txtColor;
  }
}


window.onload = d3ColorFriend(30000,rpb,oyw);

window.setInterval(function() { d3ColorFriend(30000,rpb,oyw); }, 250);
