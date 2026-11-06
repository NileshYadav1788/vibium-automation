console.log("Hello, World!!!");

const fs = require('fs/promises')
const { browser } = require('vibium')
const assert = require('node:assert').strict;

async function testScript() {
    const bro = await browser.start()
    const vibe = await bro.page()

    await vibe.go('https://www.facebook.com/')

    await new Promise(r => setTimeout(r, 3000)); // brief pause to let UI react

    // const title = await vibe.title()
    // console.log("===>> ", title)

    //locators below
    const element = await vibe.find({ role: 'link', text: 'Forgotten password?' })
    console.log(await element.text())
    // const element = await vibe.find({ xpath: '//div[@aria-label="Log in"]' })
    // const element = await vibe.find({ role: 'link', text: 'Log in' })
    // const element = await vibe.find({ text: 'Log in' })

    // console.log('Text-only locator resolved to:', await element.getAttribute('class'));
    // console.log(await element.text())
    // await new Promise(r => setTimeout(r, 3000)); // brief pause to let UI react
    // const visible = await element.waitUntil("visible", {timeout: 5000})
    // await console.log("===>> ", visible) 
    // await element.click({timeout: 5000})

    // const elements = await vibe.findAll("a");
    // for (const el of elements) {
    //     console.log(await el.text());
    // }

    // assert.ok(await element.isHidden(), 'Element is hidden')
    await bro.stop()
}
testScript()
