const resourcePath = global.GetResourcePath ?
    global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname
const settingsjson = require(resourcePath + '/settings.js')

exports.runcmd = (fivemexports, client, message, params) => {
    message.reply('NHS -> ')
}

exports.conf = {
    name: "nhs",
    perm: 0,
    guild: "1139267987162025996",
}