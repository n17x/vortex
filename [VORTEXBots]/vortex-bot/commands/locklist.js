const resourcePath = global.GetResourcePath ?
    global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname
const settingsjson = require(resourcePath + '/settings.js')

exports.runcmd = (fivemexports, client, message, params) => {
    let embed = {
        "title": "VORTEX Lock List",
        "description": `https://docs.google.com/spreadsheets/d/1qzTP1D48HwzOaosSGmwpSWBZwzoitkFoxH_jECuMKes/edit#gid=0`,
        "color": settingsjson.settings.botColour,
        "footer": {
            "text": ""
        },
        "timestamp": new Date()
    }
    message.channel.send({ embed })
}

exports.conf = {
    name: "locklist",
    perm: 0,
    guild: "1139267987162025996"
}