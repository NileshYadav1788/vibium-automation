const fs = require('fs');
const { browserSync } = require('vibium');

const vibe = browserSync.launch();
vibe.go('https://google.com');

const png = vibe.screenshot();
fs.writeFileSync('screenshot.png', png);

vibe.quit();