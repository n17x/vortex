const resourcePath = global.GetResourcePath ?
    global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname
const settingsjson = require(resourcePath + '/settings.js')

exports.runcmd = async(fivemexports, client, message, params) => {
    message.delete()
    if (!params[0] && !parseInt(params[0])) {
        let embed = {
            "title": "Verify",
            "description": `:x: Invalid command usage \`${process.env.PREFIX}verify [code]\``,
            "color": settingsjson.settings.botColour,
            "footer": {
                "text": ""
            },
            "timestamp": new Date()
        }
        message.channel.send({ embed }).then(msg => {
            msg.delete(10000)
        })
    }
    fivemexports.ghmattimysql.execute("SELECT * FROM `vortex_verification` WHERE code = ?", [params[0]], (code) => {
        if (code.length > 0) {
           if (code[0].discord_id === null ){
            fivemexports.ghmattimysql.execute("UPDATE `vortex_verification` SET discord_id = ?, verified = 1 WHERE code = ?", [message.author.id, params[0]], async (result) => {
                if (result) {
                    let embed = {
                        "title": "Verify",
                        "description": `:white_check_mark: Great you're verified, head back in game and press connect.`,
                        "color": settingsjson.settings.botColour,
                        "footer": {
                            "text": ""
                        },
                        "timestamp": new Date()
                    }
                    message.channel.send({ embed }).then(msg => {
                        msg.delete(10000)
                    })
                    await message.member.addRole("1157918513709727795").then().catch(console.error);
                }
            });
           }
           else{
            let embed = {
                "title": "Verify",
                "description": `:x: A discord account is already linked to this Perm ID, please contact Management to reverify.`,
                "color": settingsjson.settings.botColour,
                "footer": {
                    "text": ""
                },
                "timestamp": new Date()
            }
            message.channel.send({ embed }).then(msg => {
                msg.delete(10000)
            })
           }
        }
        else {
            let embed = {
                "title": "Verify",
                "description": `:x: That code was invalid make sure you have a valid code.`,
                "color": settingsjson.settings.botColour,
                "footer": {
                    "text": ""
                },
                "timestamp": new Date()
            }
            message.channel.send({ embed }).then(msg => {
                msg.delete(10000)
            })
        }
    })
}

exports.conf = {
    name: "verify",
    perm: 0,
    guild: "1139267987162025996"
}