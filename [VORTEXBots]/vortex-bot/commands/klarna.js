const resourcePath = global.GetResourcePath ?
    global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname
const settingsjson = require(resourcePath + '/settings.js')

exports.runcmd = (fivemexports, client, message, params) => {
    message.channel.send('discord.gg/vortexklarna')
}

exports.conf = {
    name: "klarna",
    perm: 0,
    guild: "1139267987162025996"
}