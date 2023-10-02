const resourcePath = global.GetResourcePath ?
    global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname
const settingsjson = require(resourcePath + '/settings.js')

exports.runcmd = (fivemexports, client, message, params) => {
    fivemexports.ghmattimysql.execute("SELECT * FROM vortex_users WHERE banned = 1", (result) => {
        if (result) {
            for (i = 0; i < result.length; i++) { 
                let newval = fivemexports.vortex.vortexbot('setBanned', [parseInt(result[i].id), false])
            }
            let embed = {
                "title": "Ban Database Cleared",
                "description": `Number of Bans removed: ${result.length}\n\nAdmin: <@${message.author.id}>`,
                "color": settingsjson.settings.botColour,
                "footer": {
                    "text": ""
                },
                "timestamp": new Date()
            }
            message.channel.send({ embed })
        }
    })
}

exports.conf = {
    name: "clearbans",
    perm: 7,
    guild: "1139267987162025996"
}