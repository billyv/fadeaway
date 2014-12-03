
function colorFriend() {
  var friends = document.getElementsByClassName("fadefriend");

  // time in milliseconds
  now = new Date().getTime();

  // alert(friends[0].value);

  var difference;
  var i;
  for (i = 0; i < friends.length; i++) {
    if (friends[i].name == null) {
      friends[i].style.backgroundColor = "white";
      friends[i].style.color = "black";
      continue;
    }
    difference = now - friends[i].name; // .value is the time last contacted in ms
    // convert the difference in time to hex
    difference = difference.toString(16);
    friends[i].style.backgroundColor = "#" + difference;
  }

}


window.setInterval(colorFriend, 2000);
