const fs = require('fs')
const chalk = require('chalk')

///Gantinya Ngerti Kan Lu Kan dah Gede

global.domain = "-" // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.aipikey = ' ' //isi apikey Ai lu
global.owner = ['0856969865598']
global.nomerOwner = "085696986559"
global.namabotnya = 'KAL OFFICIAL'
global.namaownernya = 'PASKAL !!+'
global.packname = '© PASKAL||+62🇲🇨\nI`m From Indonesia'
global.author = 'Wa : 085696986559\nYT : KallOFC'
global.sessionName = 'session'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.group = '
global.anticall = true
global.wm = "Subscribe YT *KallOFC*"
global.mess = 
{
success: '```Success✅```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Fitur Khusus Owner Bot!!!```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
banned: '*Kamu Telah Dibanned Untuk Menggunakan Bot Ini Untuk Membuka Banned Chat Owner .Owner*',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Chat Owner Untuk Beli Premium Ketik .Owner',
error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./image/thumb.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})