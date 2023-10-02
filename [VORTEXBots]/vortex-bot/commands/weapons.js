var AsciiTable = require('ascii-table');
const Discord = require('discord.js');
const fs = require('fs');
const resourcePath = global.GetResourcePath ?
    global.GetResourcePath(global.GetCurrentResourceName()) : global.__dirname
const settingsjson = require(resourcePath + '/settings.js')
let owners = ''
exports.runcmd = (fivemexports, client, message, params) => {
  
    fivemexports.ghmattimysql.execute("SELECT * FROM `vortex_weapon_whitelists` WHERE user_id = ?", [params[0]], (result) => {
        var table = new AsciiTable(`ID ${[params[0]]}'s Weapon`)
        table.setHeading('Weapon Name', 'Weapon Hash ', 'Weapon Price', 'Weapon Category')
        for (i = 0; i < result.length; i++) {

            table.addRow(result[i].name, result[i].gunhash, result[i].price, result[i].category)
        }
        if (result.length == 0){
            return message.reply(`${params[0]} has no weapons!`)
        }
        message.channel.send('```ascii\n' + table.toString() + '```').catch(err => {
                message.channel.send(`Perm ID ${params[0]}'s weapons is to big!, ${message.author}`, { files: [`${client.path}/weapons_${params[0]}.txt`] }).then(ss => {
                    fs.unlinkSync(`${client.path}/weapons_${params[0]}.txt`)
                })
        
        })
    });
}

exports.conf = {
    name: "weapons",
    perm: 7,
    guild: "1139267987162025996"
}