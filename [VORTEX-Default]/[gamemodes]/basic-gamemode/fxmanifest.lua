-- This resource is part of the default Cfx.re asset pack (cfx-server-data)
-- Altering or recreating for local use only is strongly discouraged.

version '1.0.0'
author 'Cfx.re <root@cfx.re>'
description 'A basic freeroam gametype that uses the default spawn logic from spawnmanager.'
repository 'https://github.com/citizenfx/cfx-server-data'

resource_type 'gametype' { name = 'Freeroam' }

client_script 'basic_client.lua'
client_script 'rconlog_client.lua'
client_script 'cl_hardcap.lua'
client_script 'deathevents.lua'
client_script 'vehiclechecker.lua'
server_script 'server.lua'
server_script 'sv_hardcap.lua'
server_script 'sv_baseevents.lua'
server_script 'rconlog_server.lua'

game 'common'
fx_version 'adamant'
