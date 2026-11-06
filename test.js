const fs = require('fs');
const { browser } = require('vibium/sync');

const bro = browser.start();
const vibe = bro.page();
vibe.go('https://google.com');

const png = vibe.screenshot();
fs.writeFileSync('screenshot.png', png);

bro.stop();