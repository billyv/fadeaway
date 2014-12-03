
document.onload = colorFriend;

function colorFriend() {
  var friends = document.getEelementsByClassname("fade");

  var test = document.getElementById("test");
  test.style.color = "blue";
  test.innerHTML = "testing";

  // time in milliseconds
  now = new Date().getTime();

  var difference;
  var i;
  for (i = 0; i < friends.length; i++) {
    difference = now - friends[i].value;
    // convert the difference in time
    difference = difference.toString(16);
    friends[i].style.color = "#" + difference;
  }

}
