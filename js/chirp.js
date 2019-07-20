function chirp(n) {
  if (n === 0) {
    return "";
  }
  return chirp(--n) + "chirp ";
}

$(document).ready(function() {
  $("#result").html(chirp(3));
});
