const resourcePath = global.GetResourcePath ?
    global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname
const settingsjson = require(resourcePath + '/settings.js')

exports.runcmd = (fivemexports, client, message, params) => {
    if (message.mentions.members.first()) {
        let user = message.mentions.members.first()
        fivemexports.ghmattimysql.execute("SELECT user_id FROM `vortex_verification` WHERE discord_id = ?", [user.id], (result) => {
            if (result.length > 0) {
                let embed = {
                    "title": "Discord to Perm ID",
                    "description": `\n**Perm ID: **${result[0].user_id}**\nDiscord: **${[params[0]]}`,
                    "color": settingsjson.settings.botColour,
                    "footer": {
                        "text": ""
                    },
                    "timestamp": new Date()
                }
                message.channel.send({ embed })
            } else {
                message.reply('No account is linked for this user.')
            }
        });
    } else {
        message.reply('You need to mention someone!')
    }
}

exports.conf = {
    name: "d2p",
    perm: 1,
    guild: "1139267987162025996",
    support: true,
}