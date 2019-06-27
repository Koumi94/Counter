$("#buttonTest").on("click", function (event) {
  alert("index.js is run 👌");
});

$('#buttonStart').on("click", function (event) {
  countdown();
});

var second = 10;
function countdown() {
  if (second != 0) {
    second -= 1;
    document.getElementById('viewSecond').innerHTML = second;
  }
  else {
    alert('countdown complete');
    document.getElementById('viewSecond').innerHTML = 10;
    second = 10;
    return;
  }
  setTimeout("countdown()", 1000);
}

var count = 0;
$('#butonClick').on("click", function (event) {
  count += 1;
  document.getElementById('viewClick').innerHTML = count;
});