// Deletes all player inventories, used at the start/end of each month after the purge when that's implemented.
const resourcePath = global.GetResourcePath ?
    global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname
const settingsjson = require(resourcePath + '/settings.js')

let bootsCleared = 0

exports.runcmd = (fivemexports, client, message, params) => {
    message.delete()

    // This is going to check the time and date to make sure it's the first day of the month at 10 AM
    const now = new Date()
    const isFirstDayOfMonth = now.getDate() === 1
    const isTenAM = now.getHours() === 10

    if (isFirstDayOfMonth && isTenAM) {
        fivemexports.ghmattimysql.execute("SELECT * FROM vortex_srv_data", (result) => {
            bootsCleared = result.length
            let embed = {
                "title": "Bootwipe Complete",
                "description": `Number of Boots Cleared: ${bootsCleared}\n\nAdmin: <@${message.author.id}>`,
                "color": settingsjson.settings.botColour,
                "footer": {
                    "text": ""
                },
                "timestamp": new Date()
            }
            message.channel.send({ embed })

            // Additional things for the wipe
            // Remove 2 points from F10s
            // Remove the monthly stats
        })
        fivemexports.ghmattimysql.execute("DELETE FROM vortex_srv_data") 
    } else {
        message.channel.send("Bootwipe can only be performed on the first day of the month at 10 AM.")
    }
}

exports.conf = {
    name: "bootwipe",
    perm: 6,
    guild: "1139267987162025996"
}