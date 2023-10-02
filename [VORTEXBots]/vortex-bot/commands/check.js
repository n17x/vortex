exports.runcmd = (fivemexports, client, message, params) => {
    if (!params[0]) {
        return message.reply('Invalid args! Correct term is: ' + process.env.PREFIX + 'check [reportid]')
    }
    let reportid = params[0]
    fivemexports.ghmattimysql.execute("SELECT * FROM cardev WHERE reportid = ?", [reportid], (result) => {
        if (result[0]) {
            if (result[0].completed == true) {
                let embed = {
                    "title": "Car Report",
                    "description": `Spawn Code: **${result[0].spawncode}**\n\nIssue: **${result[0].issue}**\n\nReporter: **<@${result[0].claimed}>**\n\nClaimed: **<@${result[0].reporter}>**\n\nNotes: **${result[0].notes}**\n\n`,
                    "color": 0x0099FF,
                    "footer": {
                        "text": ""
                    },
                    "timestamp": new Date()
                }
                message.channel.send({ embed })
            } else {
                if (result[0].claimed) {
                    let embed = {
                        "title": "Car Report",
                        "description": `Spawn Code: **${result[0].spawncode}**\n\nIssue: **${result[0].issue}**\n\nReporter: **<@${result[0].claimed}>**\n\nClaimed: **<@${result[0].reporter}>**\n\nCompleted: **False**\n\n`,
                        "color": 0x0099FF,
                        "footer": {
                            "text": ""
                        },
                        "timestamp": new Date()
                    }
                    message.channel.send({ embed })
                } else {
                    let embed = {
                        "title": "Car Report",
                        "description": `Spawn Code: **${result[0].spawncode}**\n\nIssue: **${result[0].issue}**\n\nReporter: **<@${result[0].reporter}>**\n\nClaimed: **False**\n\n`,
                        "color": 0x0099FF,
                        "footer": {
                            "text": ""
                        },
                        "timestamp": new Date()
                    }
                    message.channel.send({ embed })
                }
            }
        } else {
            let embed = {
                "title": "Car Report",
                "description": `Report Not Found. *If you think there is an issue, contact a developer.*\n\n`,
                "color": 0x0099FF,
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
    name: "check",
    perm: 0
}