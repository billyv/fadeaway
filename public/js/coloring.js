
function colorFriend() {
  var friends = document.getElementsByClassName("fadefriend");

  // time in milliseconds
  now = new Date().getTime();

  var difference;
  var i;
  for (i = 0; i < friends.length; i++) {
    var lastContact = friends[i].attributes['data-last-contacted'].value;
    if (lastContact == null) {
      friends[i].style.backgroundColor = "white";
      friends[i].style.color = "black";
      continue;
    }
    difference = now - lastContact;
    // convert the difference in time to hex
    difference = difference.toString(16);
    friends[i].style.backgroundColor = "#" + difference;
  }

}

// take time in ms, and what colors you want to fade through
function d3ColorFriend() {
  var friends = document.getElementsByClassName("fadefriend");

  // time in ms
  now = new Date().getTime();

                                              //1min
  var bgScale = d3.scale.linear().domain([0,30000,60000]).range(['red','purple','black']);
  var txtScale = d3.scale.linear().domain([0,30000,60000]).range(['orange','yellow','white']);

  var difference;
  var i;
  for (i = 0; i < friends.length; i++) {

    var lastContact = friends[i].attributes['data-last-contacted'].value;
    if (lastContact == "") {
      friends[i].style.backgroundColor = "black";
      friends[i].style.color = "white";
      continue;
    }

    difference = now - lastContact;
    bgColor = d3.hsl(bgScale(difference)).toString();
    txtColor = d3.hsl(txtScale(difference)).toString();

    friends[i].style.backgroundColor = bgColor;
    friends[i].style.color = txtColor;
  }
}

window.onload = d3ColorFriend();

window.setInterval(d3ColorFriend, 500);
