
const TabGroup = require("electron-tabs");

let tabGroup = new TabGroup({
    newTab: {
        title: 'New Tab',
    }
});

let tab1 = tabGroup.addTab({
    title: "Our Code World",
    src: "https://ourcodeworld.com",
    visible: true
});

let tab2 = tabGroup.addTab({
    title: "Local File",
    src: "https://ourcodeworld.com",
    visible: true,
    webviewAttributes: {
        nodeintegration: true
    }
});