var execTime = null;
B = document.getElementById("test");
B.addEventListener("click", post);

console.log("about to connect for content");
var port = chrome.runtime.connect({name: "popup"});
console.log("connected from content");

function post() {
  var t = document.getElementById("textEntry").value;
  if (t != '') {
    port.postMessage({time: t});
    console.log("posted content");
}};

port.onMessage.addListener(function (msg) {
  console.log("we got a time: " + msg.execTime);
  execTime = msg.execTime;
  console.log("ok this is out execution time " + execTime);
});