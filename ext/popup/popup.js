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
    
  chrome.storage.sync.get(['chungus'], function(result) {
    console.log('Value currently is ' + result.chungus);
  });
}};

function createAlarm(time) {
  chrome.alarms.create('test alarm', {when: Date.now() + time});
  console.log(chrome.alarms.getAll(() => {console.log('pro gaming')}))
}

port.onMessage.addListener(function (msg) {
  console.log("we got a time: " + msg.execTime);
  execTime = msg.execTime;
  console.log("ok this is out execution time " + execTime);
  createAlarm(execTime);
});

chrome.alarms.onAlarm.addListener(function () {
  chrome.tabs.create({url: "https://reddit.com/r/memes"})
})

var value = 'amogus'
chrome.storage.sync.set({chungus: value}, function() {
  console.log('Value is set to ' + 'amogus');
});
