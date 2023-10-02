const resourcePath = global.GetResourcePath ?
    global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname
const settingsjson = require(resourcePath + '/settings.js')

exports.runcmd = (fivemexports, client, message, params) => {
    let embed = {
        "title": "Server Boost Rewards",
        "description": `Boosting the vortex discord server allows you to use \`/redeem\` in game. With this, you will receive 7 days of Platinum subscription and £500,000`,
        "color": settingsjson.settings.botColour,
        "footer": {
            "text": ""
        },
        "timestamp": new Date()
    }
    message.channel.send({ embed })
}

exports.conf = {
    name: "boost",
    perm: 0,
    guild: "1139267987162025996"
}
