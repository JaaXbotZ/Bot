const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6283838077485@s.whatsapp.net"] // ISI NOMOR MU
global.nomerOwner = "6283838077485"//ISI NOMOR MU
global.nomorOwner = ['6283838077485']//ISI NOMOR MU
global.namaDeveloper = "JaaXBotZ"
global.namaBot = "Test Botz"
global.packname = ""
global.author = "Sticker By Jaa"
global.thumb = fs.readFileSync("./thumb.jpg")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})