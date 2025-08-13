const chalk = require('chalk');
const fs = require('fs');

global.ownerMenu = (p) => {
return`
┏一一 
┃ ➣  ${p}backup
┃ ➣  ${p}addbadword
┃ ➣  ${p}delbadword
┃ ➣  ${p}listbadword
┃ ➣  ${p}resetdbuser
┃ ➣  ${p}resethit
┃ ➣  ${p}setmenu
┃ ➣  ${p}setreply
┃ ➣  ${p}statustext
┃ ➣  ${p}statusvideo
┃ ➣  ${p}statusimage
┃ ➣  ${p}statusaudio
┃ ➣  ${p}upsaluran
┃ ➣  ${p}setimgmenu
┃ ➣  ${p}setvidmenu
┃ ➣  ${p}addtitle
┃ ➣  ${p}deltitle
┃ ➣  ${p}addlimit
┃ ➣  ${p}dellimit
┃ ➣  ${p}resetlimit
┃ ➣  ${p}resetdblimit
┃ ➣  ${p}adduang
┃ ➣  ${p}deluang
┃ ➣  ${p}resetuang
┃ ➣  ${p}resetdbmoney
┃ ➣  ${p}addpremium
┃ ➣  ${p}delpremium
┃ ➣  ${p}listpremium
┃ ➣  ${p}addowner
┃ ➣  ${p}delowner
┃ ➣  ${p}clearsession
┃ ➣  ${p}clearmedia
┃ ➣  ${p}joingroup
┃ ➣  ${p}outgroup
┃ ➣  ${p}joinchannel
┃ ➣  ${p}outchannel
┃ ➣  ${p}getsession
┃ ➣  ${p}myip
┃ ➣  ${p}shutdown
┃ ➣  ${p}restart
┃ ➣  ${p}kill
┃ ➣  ${p}autoread
┃ ➣  ${p}unavailable
┃ ➣  ${p}autorecordtype
┃ ➣  ${p}autorecord
┃ ➣  ${p}autotype
┃ ➣  ${p}autobio
┃ ➣  ${p}autosticker
┃ ➣  ${p}safesearch
┃ ➣  ${p}autodownload
┃ ➣  ${p}autoblock
┃ ➣  ${p}onlygc
┃ ➣  ${p}onlypc
┃ ➣  ${p}self
┃ ➣  ${p}public
┃ ➣  ${p}setexif
┃ ➣  ${p}setprefix
┃ ➣  ${p}setautoblock
┃ ➣  ${p}setantiforeign
┃ ➣  ${p}pushcontact
┃ ➣  ${p}savecontact
┃ ➣  ${p}sendcontact
┃ ➣  ${p}getcontact
┃ ➣  ${p}contacttag
┃ ➣  ${p}ban
┃ ➣  ${p}unban
┃ ➣  ${p}getcase
┃ ➣  ${p}setppbot
┃ ➣  ${p}deleteppbot
┃ ➣  ${p}setbiobot
┃ ➣  ${p}listpc
┃ ➣  ${p}listgc
┃ ➣  ${p}creategc
┃ ➣  ${p}autoswview
┃ ➣  ${p}anticall
┃ ➣  ${p}addvideo
┃ ➣  ${p}delvideo
┃ ➣  ${p}listvideo
┃ ➣  ${p}addimage
┃ ➣  ${p}delimage
┃ ➣  ${p}listimage
┃ ➣  ${p}addsticker
┃ ➣  ${p}delsticker
┃ ➣  ${p}liststicker
┃ ➣  ${p}addaudio
┃ ➣  ${p}delaudio
┃ ➣  ${p}listaudio
┃ ➣  ${p}addlist
┃ ➣  ${p}dellist
┃ ➣  ${p}ceklist
┗一一
`}

global.groupMenu = (p) => {
return`
┏一一 group menu 
┃ ➣  ${p}pushcontact
┃ ➣  ${p}savecontact
┃ ➣  ${p}sendcontact
┃ ➣  ${p}getcontact
┃ ➣  ${p}contacttag
┃ ➣  ${p}antibadword
┃ ➣  ${p}nsfw
┃ ➣  ${p}antiaudio
┃ ➣  ${p}antiforeign
┃ ➣  ${p}antisticker
┃ ➣  ${p}antiimage
┃ ➣  ${p}antivideo
┃ ➣  ${p}antiviewonce
┃ ➣  ${p}antispam
┃ ➣  ${p}antimedia
┃ ➣  ${p}antidocument
┃ ➣  ${p}anticontact
┃ ➣  ${p}antilocation
┃ ➣  ${p}antilocation
┃ ➣  ${p}antilink
┃ ➣  ${p}antilinkgc
┃ ➣  ${p}groupinfo
┃ ➣  ${p}mute
┃ ➣  ${p}welcome
┃ ➣  ${p}left
┃ ➣  ${p}adminevent
┃ ➣  ${p}groupevent
┃ ➣  ${p}kick
┃ ➣  ${p}add
┃ ➣  ${p}promote
┃ ➣  ${p}demote
┃ ➣  ${p}setnamegc
┃ ➣  ${p}setppgc
┃ ➣  ${p}deleteppgc
┃ ➣  ${p}setdesk
┃ ➣  ${p}hidetag
┃ ➣  ${p}tagall
┃ ➣  ${p}listonline
┃ ➣  ${p}group
┃ ➣  ${p}editinfo
┃ ➣  ${p}linkgc
┃ ➣  ${p}resetlink
┃ ➣  ${p}afk
┃ ➣  ${p}addlist
┃ ➣  ${p}dellist
┃ ➣  ${p}ceklist
┗一一
`}

global.downloadMenu = (p) => {
return`
┏一一 download menu
┃ ➣  ${p}tiktokmp4
┃ ➣  ${p}tiktokmp3
┃ ➣  ${p}tiktokslide
┃ ➣  ${p}instagram
┃ ➣  ${p}facebook
┃ ➣  ${p}gitclone
┃ ➣  ${p}gdrive
┃ ➣  ${p}savepin
┗一一
`}

global.convertMenu = (p) => {
return`
┏一一 coverter menu 
┃ ➣  ${p}ssweb
┃ ➣  ${p}qc
┃ ➣  ${p}s
┃ ➣  ${p}swm
┃ ➣  ${p}tourl
┃ ➣  ${p}toimage
┃ ➣  ${p}remini
┃ ➣  ${p}toaudio
┗一一
`}


global.gameMenu = (p) => {
return`
┏一一 game menu 
┃ ➣  ${p}tebakkabupaten
┃ ➣  ${p}tebakhewan
┃ ➣  ${p}tebakml
┃ ➣  ${p}tebakchara
┃ ➣  ${p}tebaklogo
┃ ➣  ${p}tebakaplikasi
┃ ➣  ${p}tebakhero
┃ ➣  ${p}tebakgame
┃ ➣  ${p}tebakgambar
┃ ➣  ${p}tebakbendera
┃ ➣  ${p}lengkapikalimat
┃ ➣  ${p}asahotak
┃ ➣  ${p}tebakkata
┃ ➣  ${p}tebaktebakan
┃ ➣  ${p}tebaklirik
┃ ➣  ${p}tebakkimia
┃ ➣  ${p}tebaksiapa
┃ ➣  ${p}tebakkalimat
┗一一
`}

global.funMenu = (p) => {
return`
┏一一 fun menu
┃ ➣  ${p}checkme
┃ ➣  ${p}mitos
┃ ➣  ${p}faktaunik
┃ ➣  ${p}faktakucing
┃ ➣  ${p}joke
┃ ➣  ${p}suit
┃ ➣  ${p}cekganteng
┃ ➣  ${p}cekcantik
┃ ➣  ${p}cekimut
┃ ➣  ${p}cekjomok
┃ ➣  ${p}cekwaifu
┃ ➣  ${p}cekkpribadian
┃ ➣  ${p}cekmasadepan
┃ ➣  ${p}quotesgalau
┃ ➣  ${p}truth
┃ ➣  ${p}dare
┃ ➣  ${p}apakah
┃ ➣  ${p}bisakah
┃ ➣  ${p}kapankah
┃ ➣  ${p}dimana
┃ ➣  ${p}bagaimana
┃ ➣  ${p}rate
┃ ➣  ${p}soulmate
┃ ➣  ${p}couple
┗一一
`}


global.bugMenu = (p) => {
return`
┏一一 bug menu 
┃ ➣  ${p}xandroid
┃ ➣  ${p}xandroid2
┃ ➣  ${p}xios
┃ ➣  ${p}xios2
┃ ➣  ${p}xgc
┃ ➣  ${p}systemuicrash
┃ ➣  ${p}xsysui
┗一一
`}

global.rpgMenu = (p) => {
return`
┏一一 rpg menu
┃ ➣  ${p}daily
┃ ➣  ${p}crafting
┃ ➣  ${p}heal
┃ ➣  ${p}joinrpg
┃ ➣  ${p}kerja
┃ ➣  ${p}merampok
┃ ➣  ${p}memancing
┃ ➣  ${p}repair
┃ ➣  ${p}adventure
┃ ➣  ${p}mining
┃ ➣  ${p}jual
┃ ➣  ${p}beli
┃ ➣  ${p}berburu
┃ ➣  ${p}nebang
┃ ➣  ${p}berlayar
┃ ➣  ${p}inventory
┃ ➣  ${p}redeemdel
┃ ➣  ${p}redeemset
┃ ➣  ${p}redeem
┗一一
`}

global.privacyMenu = (p) => {
return`
┏一一 privacy menu
┃ ➣  ${p}setcallprivacy
┃ ➣  ${p}setlastprivacy
┃ ➣  ${p}setonlineprivacy
┃ ➣  ${p}setprofileprivacy
┃ ➣  ${p}setstatusprivacy
┃ ➣  ${p}setreadreceiptsprivacy
┃ ➣  ${p}setreactionmode
┗一一
`}

global.newsletterMenu = (p) => {
return`
┏一一 channel menu
┃ ➣  ${p}setnewsletterdesc
┃ ➣  ${p}setnewslettername
┃ ➣  ${p}setnewsletterpic
┃ ➣  ${p}follownewsletter
┃ ➣  ${p}unfollownewsletter
┃ ➣  ${p}mutenewsletter
┃ ➣  ${p}unmutenewsletter
┃ ➣  ${p}createnewsletter
┃ ➣  ${p}newsletterinfo
┗一一
`}

global.aiMenu = (p) => {
return`
┏一一 ai menu 
┃ ➣  ${p}deepseek
┃ ➣  ${p}gemini
┃ ➣  ${p}gpt3
┃ ➣  ${p}muslimai
┗一一
`}

global.otherMenu = (p) => {
return`
┏一一 other menu
┃ ➣  ${p}daftar
┃ ➣  ${p}unreg
┃ ➣  ${p}ping
┃ ➣  ${p}ipwhois
┃ ➣  ${p}country
┃ ➣  ${p}dns
┃ ➣  ${p}speedtest
┃ ➣  ${p}otakudesu
┃ ➣  ${p}kusonimeinfo
┃ ➣  ${p}kusonimesearch
┃ ➣  ${p}quotesanime
┃ ➣  ${p}gempa
┃ ➣  ${p}githubstalk
┃ ➣  ${p}npmstalk
┃ ➣  ${p}mlstalk
┃ ➣  ${p}runtime
┃ ➣  ${p}donate
┃ ➣  ${p}script
┃ ➣  ${p}repository
┃ ➣  ${p}infobot
┃ ➣  ${p}owner
┃ ➣  ${p}addsubdo
┃ ➣  ${p}delsubdo
┃ ➣  ${p}listsubdo
┃ ➣  ${p}jadibot
┃ ➣  ${p}stopjadibot
┃ ➣  ${p}listjadibot
┗一一
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})