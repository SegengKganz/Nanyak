global.owner = ['6283846677065']  
global.mods = ['6283846677065'] 
global.prems = ['6283846677065']
global.nameowner = 'Geng Store'
global.numberowner = '6283846677065' 
global.mail = 'segengelek@gmail.com' 
global.gc = 'https://chat.whatsapp.com/CO4USbDLEte2GzCN2GH7aJ'
global.instagram = 'https://instagram.com/geng_store12'
global.wm = '©Geng Store'
global.wait = '_*Tunggu Tod sedang di proses...*_'
global.eror = '_*Server Error njir owner bokek*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'GengBotzzTumru'

//INI WAJIB DI ISI!//
global.btc = 'kilAcgE6' 
//Daftar terlebih dahulu https://api.botcahx.live

global.lann = 'UEGidY88'
//Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'kilAcgE6' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
