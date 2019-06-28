$("#buttonTest").on("click", function (event) {
  alert("index.js is run 👌");
});

var statusButtonStart = true;
var second = 10;
$('#buttonStart').on("click", function (event) {
  if (statusButtonStart) {
    statusButtonStart = false;
    countdown();
    document.getElementById('buttonStart').setAttribute('style', 'visibility:hidden');
  }
});

function countdown() {
  if (second != 0) {
    second -= 1;
    document.getElementById('viewSecond').innerHTML = second;
  }
  else {
    alert('countdown complete');
    document.getElementById('viewSecond').innerHTML = 10;
    statusButtonStart = true;
    document.getElementById('buttonStart').setAttribute('style', 'visibility:visible');
    second = 10;
    return;
  }
  setTimeout("countdown()", 1000);
}

var count = 0;
$('#butonClick').on("click", function (event) {
  countClick();
});
function countClick() {
  count += 1;
  document.getElementById('viewClick').innerHTML = count;
}