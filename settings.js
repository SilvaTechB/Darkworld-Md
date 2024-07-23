
const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: SilvaTechB" //ur github or insta name
global.location = "Africa, Kenya, Nairobi" //ur location

//new
global.botname = 'DARKWORLD MD' //ur bot name
global.ownernumber = '254743706010' //ur owner number
global.ownername = 'Xilva Tech 2024' //ur owner name
global.websitex = "https://silvatech.vercel.app"
global.wagc = "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v"
global.themeemoji = '😈'
global.wm = "Xilva Bot Inc."
global.botscript = 'https://github.com/SilvaTechB/Darkworld-Md' //script link
global.packname = "Sticker By"
global.author = "🦄XILVA\n\n+254743706010"
global.creator = "254743706010@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254743706010"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
