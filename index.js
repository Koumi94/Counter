/** when click to 'test' button */
$("#buttonTest").on("click", function (event) {
  /** show success alert */
  alert("index.js is run 👌");
});

/** run countdown */
var statusButtonStart = true;
var second = 10;
/** when click to 'start' button */
$('#buttonStart').on("click", function (event) {
  /** if status of start button is active */
  if (statusButtonStart) {
    /** change status of start button */
    statusButtonStart = false;
    /** run countdown function */
    countdown();
    /** hide 'start' button */
    document.getElementById('buttonStart').setAttribute('style', 'visibility:hidden');
  }
});

function countdown() {
  /** if second not equal 0 */
  if (second != 0) {
    second -= 1;
    /** update to text of 'viewSecond' element */
    document.getElementById('viewSecond').innerHTML = second;
  }
  /** if second equal 0 */
  else {
    /** show complete alert */
    alert('countdown complete');
    /** update to text of 'viewSecond' element */
    document.getElementById('viewSecond').innerHTML = 10;
    /** change status of start button */
    statusButtonStart = true;
    /** show 'start' button */
    document.getElementById('buttonStart').setAttribute('style', 'visibility:visible');
    /** reset second */
    second = 10;
    return;
  }
  /** run  */
  setTimeout("countdown()", 1000);
}

/** run click counter */
var count = 0;
/** when click to 'run' button */
$('#butonClick').on("click", function (event) {
  countClick();
});
/** count clicks function */
function countClick() {
  count += 1;
  document.getElementById('viewClick').innerHTML = count;
}