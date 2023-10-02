const resourcePath = global.GetResourcePath ?
    global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname
const settingsjson = require(resourcePath + '/settings.js')

exports.runcmd = (fivemexports, client, message, params) => {
    message.channel.send('https://docs.vortexstudios.uk/gun-guide')
}

exports.conf = {
    name: "gunguide",
    perm: 0,
    guild: "1139267987162025996"
}