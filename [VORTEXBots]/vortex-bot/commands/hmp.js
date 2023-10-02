const resourcePath = global.GetResourcePath ?
    global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname
const settingsjson = require(resourcePath + '/settings.js')

exports.runcmd = (fivemexports, client, message, params) => {
    message.channel.send('https://discord.gg/A5hVhU4pv4')
}

exports.conf = {
    name: "hmp",
    perm: 0,
    guild: "1139267987162025996"
}