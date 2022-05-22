//                     zimbot.inc.pressents 
//                     2022 production
//                     Thanks to dikArdnt
                                                                                        //drips


const fs = require('fs')
const chalk = require('chalk')

//global api
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94782575993']
global.pemilik = ['94782575993'] //pemilik nomor
global.premium = ['94782575993'] //premium number
global.pengguna = 'ZERO/pengguna
global.botnma = 'ZEROT INC' //botnama,botname
global.ownernma = 'ZERO' //ownernama,ownername
global.packname = 'ZERO' // packname
global.author = 'By ZERO TEAM'
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
global.mess = {
    success: 'We went to Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'zero  පරිපාලක විය යුතුය !',
    owner: 'මෙම cmd zero මිකරු සඳහා පමණි',
    group: 'සමාවෙන්න, මෙම විධානය කණ්ඩායම් සඳහා පමණි!',
    private: 'goossssh එය භාවිතා කළ හැක්කේ dms වල පමණි!',
    bot: 'මෙම cmd එය bot host සඳහා පමණි',
    wait: 'ZERO bot processing ඉන්න ',
    endLimit: 'ඔබගේ දෛනික සීමාව කල් ඉකුත් වී ඇත, සීමාව සෑම පැය 12 කට වරක් නැවත සකසනු ලැබේ',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/drips.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
