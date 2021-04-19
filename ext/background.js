importScripts("/schedule.js")

const t = new Time();
t.convert('15:00');

console.log("about to connect");
chrome.tabs.connect(0, {name: "background"})
console.log("connected for bg");
chrome.runtime.onConnect.addListener(function(port) {
    console.log("got a msg");
    port.onMessage.addListener(function() {
      port.postMessage({execTime: t.convert('15:00')});
      console.log("amogus");
    });
  });