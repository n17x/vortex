var AsciiTable = require('ascii-table');
const resourcePath = global.GetResourcePath ?
    global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname
const settingsjson = require(resourcePath + '/settings.js')

exports.runcmd = (fivemexports, client, message, params) => {
    fivemexports.ghmattimysql.execute("SELECT * FROM vortex_user_moneys ORDER BY bank DESC", [], (result) => {
        if (result) {
            var table = new AsciiTable('Top 10 Richest')
            table.setHeading('UserID', 'Credits')
            for (i = 0; i < result.length; i++) {
                if (i < 10) {
                    table.addRow(result[i].user_id, result[i].bank)
                }
            }
            message.channel.send('```ascii\n' + table.toString() + '```')
        }
    })
}

exports.conf = {
    name: "top10",
    perm: 0,
    guild: "1139267987162025996"
}