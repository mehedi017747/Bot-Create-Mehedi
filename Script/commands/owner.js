module.exports.config = {
 name: "owner",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
 description: "Owner information command with styled box",
 commandCategory: "Information",
 usages: "",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
 const ownerInfo = 
`╔═════════════════════╗
║ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 
╠═════════════════════╣
║ 👤 𝗡𝗮𝗺𝗲 : 𝐌𝐄𝐇𝐄𝐃𝐈
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝐀𝐇𝐀𝐌𝐄𝐃
║ 🎂 𝗔𝗴𝗲 : 𝟐𝟏+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : 𝐒𝐒𝐂 𝐁𝐀𝐓𝐂𝐇 𝟐𝟎𝟐𝟏
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝐍𝐚𝐫𝐬𝐢𝐧𝐠𝐝𝐢
╠═════════════════════╣
║ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦 
╠═════════════════════╣
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 
║https://www.facebook.com/100035088489972
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 : 
║ m.me/100035088489972
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 : 
║ https://wa.me/01603566588
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 : 
║ t.me/Mehedi_Ahamed_2004
╚═════════════════════╝`;

 return api.sendMessage(ownerInfo, event.threadID, event.messageID);
};
