fx_version 'cerulean'
games { 'gta5' }
author 'fxid'
description 'This is a discord bot made by fxid. Give credit where credit is due!'

server_only 'yes'

dependency 'yarn'
--dependency 'vortex'

server_scripts {
    "@vortex/lib/utils.lua",
    "bot.js"
}

server_exports {
    'dmUser',
}