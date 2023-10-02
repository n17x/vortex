const resourcePath = global.GetResourcePath ? global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname;
const settingsjson = require(resourcePath + '/settings.js');

exports.runcmd = (fivemexports, client, message, params) => {
    if (params.length === 1) {
        let discordId = params[0];
        let regex = /^\d+$/; 

        if (discordId.match(regex)) {
            fivemexports.ghmattimysql.execute("SELECT user_id FROM `vortex_verification` WHERE discord_id = ?", [discordId], (result) => {
                if (result.length > 0) {
                    let embed = {
                        "title": "Discord ID to Perm ID",
                        "description": `\n**Perm ID: **${result[0].user_id}**\nDiscord: **${discordId}`,
                        "color": settingsjson.settings.botColour,
                        "footer": {
                            "text": ""
                        },
                        "timestamp": new Date()
                    }
                    message.channel.send({ embed });
                } else {
                    message.channel.send('No account is linked for this user.');
                }
            });
        } else {
            message.channel.send('Invalid Discord ID format. Please provide a valid Discord ID (numbers only).');
        }
    } else {
        message.channel.send('Invalid command format. Use !did2p <Discord ID>');
    }
}

exports.conf = {
    name: "did2p",
    perm: 1,
    guild: "1133382216974618644",
    support: true,
}
