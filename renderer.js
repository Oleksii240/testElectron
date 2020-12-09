
const TabGroup = require("electron-tabs");

let tabGroup = new TabGroup({
    newTab: {
        title: 'New Tab',
    }
});

let tab1 = tabGroup.addTab({
    title: "Our Code World",
    src: "http://aware-volcano.surge.sh/",
    visible: true
});

let tab2 = tabGroup.addTab({
    title: "Local File",
    src: "https://reddit.com",
    visible: true,
    webviewAttributes: {
        nodeintegration: true
    }
});

tab2.webview.addEventListener('dom-ready', () => {
    tab2.webview.executeJavaScript(`var body = document.querySelector(".ListingLayout-outerContainer div");
    var secondBody = document.querySelector(".ListingLayout-outerContainer");
    body.style.cssText = "color: blue; border: 1px solid black !important; background-color: black !important;";
    secondBody.style.cssText = "color: blue; border: 1px solid black !important; background-color: black !important;"; 
  console.log("This loads no problem!");`);
});

