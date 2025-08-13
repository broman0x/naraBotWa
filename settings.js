
const fs = require('fs');
const chalk = require('chalk');

global.botName = 'naraBot'; // Nama Bot Kamu
global.ownerNumber = ''; // Nomor Kamu
global.ownerName = 'broman prjkt'; // Nama Kamu
global.website = 'https://emanpedia.my.id'; // Web Kamu
global.wagc = 'https://whatsapp.com/channel/0029VatfiHB3bbVAlPQptz0G'; // Web Kamu

global.packname = botName; // Nama Pack
global.author = ownerName; // Nama Author
global.footer = '© broman prjkt';
global.creator = '62812345678@s.whatsapp.net'; // Nomor Creator
global.premium = ['']; // User Premium
global.prefa = '/'; // Prefix
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = '120363355261996250@newsletter'; // ID Saluran Kamu
global.saluranName = 'broman || prjkt'; // Nama Saluran Kamu
global.sessionName = 'session'; // Nama Folder Sesi Bot Kamu

global.panel = 'https://control.optikservers.com'; // Link Panel Kamu
global.cred = 'ptla_aPkBJgJLb5Af29zPTI6FwicgPV8Bw9kuuiTLxp6WEq5'; // API PTLA Kamu
global.apiuser = 'ptlc_XZ8jqmbIbeNLmY8GS3DLdgBmErMlj4Cb36OWno0SAuT'; // API PTLC Kamu
global.eggs = '15'; // Eggs Number (Recommended)
global.nets = '5'; // Nets Number (Recommended)
global.location = '1'; // Location Number (Recommended)

global.CF_API_KEY = "KGGRRGbLDNT7N-jDi7JUW4hHregvHQvm8o4ORYZ_"; // Apikey CF Kamu
global.CF_ZONE_ID = "b9883610d0c1ecf9c83f002897822971"; // Zone ID CF Kamu
global.CF_DOMAIN = "optikservers.com"; // Nama Domain Kamu di CF

global.typemenu = 'v5'; // Gaya Menu v1-v5
global.typereply = 'v1'; // Gaya Reply v1-v4
global.autoblocknumber = '62'; // Auto Block Number
global.antiforeignnumber = '62'; // Anti Foreign Number
global.welcome = false // Auto Welcome Msg
global.anticall = false // Anti Call
global.autoswview = false // Auto View Status
global.adminevent = false // Admin Event Msg
global.groupevent = false // Group Event Msg
global.notifRegister = false // Notif Register
global.onlyRegister = false // Hanya Pendaftar
global.autoJoinNewsletter = true // 

global.payment = {
	dana: "",
	shopeePay: "",
	seabank: ""
};

global.limit = {
	free: 20, // Limit User Non-premium
	premium: 1000, // Limit User Premium
	vip: "VIP" // Limit User VIP 👑
};

global.uang = {
	free: 1000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 1000000 // Uang User VIP 👑
};

global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: "Fitur ini khusus buat admin aja ya, Kontol! ",
	botAdmin: "jadikan aku admin dulu biar bisa jalanin ini bangsat! 😭",
	done: "nih woi 😈",
	error: "Eh, ada yang salah nih... coba lagi ya, Ler!",
	group: "Eits, fitur ini cuma bisa dipakai di grup~ 🫡",
	limit: "Yah, limit penggunaan lu udah habis... 😢\n\nCoba ketik .buy untuk membeli dan menambah limit, atau upgrade ke premium untuk mendapat limit banyak dan akses ke fitur spesial! ✨",
	nsfw: "Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣",
	owner: "Hanya pemilik yang bisa akses fitur ini, Pler! 👑",
	premium: "Fitur ini cuma buat pengguna premium, Puqi! 🌟",
	private: "Fitur ini cuma bisa dipakai di chat pribadi,Bang! 💌",
	wait: "Tunggu sebentar bangsat,... aku lagi proses nih! ⏳🤗"
};

global.imageDonasi = "https://raw.githubusercontent.com/bromanprjkt/botnara/refs/heads/main/3733746f-f520-40f1-9e88-b7330caf1c07.jpeg"; // Url Image Donasi (dana, qris etc..)
global.imageUrl = "https://raw.githubusercontent.com/bromanprjkt/botnara/refs/heads/main/3733746f-f520-40f1-9e88-b7330caf1c07.jpeg"; // Url Image
global.imageBuffer = fs.readFileSync("./media/imageBuffer.png"); // Buffer Image
global.videoBuffer = fs.readFileSync("./media/videoBuffer.mp4"); // Buffer Video
global.audioBuffer = fs.readFileSync("./media/audioBuffer.mp3"); // Buffer Audio

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
