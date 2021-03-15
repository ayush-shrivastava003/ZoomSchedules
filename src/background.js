chrome.runtime.onInstalled.addListener(async () => {
    let url = chrome.runtime.getURL("welcome.html")
    chrome.tabs.create({url});
    console.log('opened new tab')
});

// chrome.runtime.onMessage.addListener
//for when a schedule is created in the popup
var Name = ""
chrome.alarms.create(Name, {periodInMinutes:0.1, delayInMinutes: 0.001});
chrome.alarms.onAlarm.addListener(async () => {
    console.log('Ten seconds have passed')
});