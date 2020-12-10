
const TabGroup = require("electron-tabs");

let tabGroup = new TabGroup({
    newTab: {
        title: 'New Tab',
    }
});

let tab1 = tabGroup.addTab({
    title: "React project",
    src: "http://aware-volcano.surge.sh/",
    visible: true
});

let tab2 = tabGroup.addTab({
    title: "Reddit",
    src: "https://reddit.com",
    visible: true,
    webviewAttributes: {
        nodeintegration: true
    }
});



tab2.webview.addEventListener('dom-ready', () => {
    tab2.webview.executeJavaScript(`var body = document.querySelector(".ListingLayout-outerContainer div");
    var secondBody = document.querySelector(".ListingLayout-outerContainer");
    var elementButtonScroll = document.querySelector(".wBtTDilkW_rtT2k5x3eie")
    body.style.cssText = "color: blue; border: 1px solid black !important; background-color: black !important;";
    secondBody.style.cssText = "color: blue; border: 1px solid black !important; background-color: black !important;";
    
    var div = document.createElement("button");
    div.className = "scrollButton";
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.style.position = "fixed";
    div.style.zIndex = "2000";
    div.innerHTML = "Scroll";


    document.querySelector(".wBtTDilkW_rtT2k5x3eie").appendChild(div);

    var myFancyFunction = function() {
      window.scrollTo( 0, 10000 );
    };

    document.querySelector(".scrollButton").addEventListener('click', myFancyFunction);

    console.log(scrollButton);

    console.log(elementButtonScroll);`);
});

