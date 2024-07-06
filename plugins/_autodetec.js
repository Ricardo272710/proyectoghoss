let WAMessageStubType = (await import(global.baileys)).default
export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `🐉 𝘽𝙊𝙈𝘽𝙊𝙉 𝘽𝙊𝙏 𝐀𝐍𝐔𝐍𝐂𝐈𝐀 𝐍𝐔𝐄𝐕𝐎 𝐍𝐎𝐌𝐁𝐑𝐄 🐉\n\n❏ 𝐀𝐃𝐌𝐈𝐍 : ${usuario}\n❏ 𝐍𝐎𝐌𝐁𝐑𝐄 : ${m.messageStubParameters[0]}`, mentions: [m.sender]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak }) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `🐉\n\n» ${usuario} 𝗛𝗮 𝗖𝗮𝗺𝗯𝗶𝗮𝗱𝗼 𝗟𝗮 𝗜𝗺𝗮𝗴𝗲𝗻 𝗗𝗲𝗹 𝗚𝗿𝘂𝗽𝗼 ♡\n𝗘𝘀𝘁𝗮 𝗘𝘀 𝗟𝗮 𝗡𝘂𝗲𝘃𝗮 𝗙𝗼𝘁𝗼 : ${groupMetadata.subject}`, mentions: [m.sender] }, { quoted: fkontak }) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `🐉\n\n» ${usuario} 𝗛𝗮 𝗖𝗮𝗺𝗯𝗶𝗮𝗱𝗼 𝗟𝗮 𝗜𝗻𝗳𝗼 𝗗𝗲𝗹 𝗚𝗿𝘂𝗽𝗼 ♡\n𝗔𝗵𝗼𝗿𝗮 𝗟𝗮 𝗜𝗻𝗳𝗼 𝗘𝘀 :\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `🔒 𝘼𝙃𝙊𝙍𝘼 *${m.messageStubParameters[0] == 'on' ? '𝙎𝙊𝙇𝙊 𝘼𝘿𝙈𝙄𝙉𝙎' : '𝙏𝙊𝘿𝙊𝙎'}* 𝙋𝙐𝙀𝘿𝙀 𝙀𝘿𝙄𝙏𝘼𝙍 𝙇𝘼 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 *${m.messageStubParameters[0] == 'on' ? '𝙀𝙎𝙏𝘼 𝘾𝙀𝙍𝙍𝘼𝘿𝙊 🔒' : '𝙀𝙎𝙏𝘼 𝘼𝘽𝙄𝙀𝙍𝙏𝙊 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? '𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍' : '𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙏𝙊𝘿𝙊𝙎'} 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `🐉 𝘽𝙊𝙈𝘽𝙊𝙉 𝘽𝙊𝙏 𝐀𝐍𝐔𝐍𝐂𝐈𝐀 𝐍𝐔𝐄𝐕𝐎 𝐀𝐃𝐌𝐈𝐍 🐉 \n\n❏ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 : @${m.messageStubParameters[0].split`@`[0]}\n❏ 𝐀𝐃𝐌𝐈𝐍 :${usuario}\n\n𝐅𝐄𝐋𝐈𝐂𝐈𝐃𝐀𝐃𝐄𝐒 𝐄𝐑𝐄𝐒 𝐍𝐔𝐄𝐕𝐎 𝐀𝐃𝐌𝐈𝐍 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 ღ`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak })
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `🐉 𝘽𝙊𝙈𝘽𝙊𝙉 𝘽𝙊𝙏 𝐀𝐍𝐔𝐍𝐂𝐈𝐀 𝐀𝐃𝐌𝐈𝐍 𝐌𝐄𝐍𝐎𝐒 🐉 \n\n❏ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 : @${m.messageStubParameters[0].split`@`[0]}\n❏ 𝐀𝐃𝐌𝐈𝐍 :${usuario}\n\n𝐋𝐎 𝐒𝐄𝐍𝐓𝐈𝐌𝐎𝐒 𝐘𝐀 𝐍𝐎 𝐄𝐑𝐄𝐒 𝐀𝐃𝐌𝐈𝐍 ღ`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak })
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} 𝘾𝘼𝙈𝘽𝙄𝙊 𝙇𝘼𝙎 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙇𝙊𝙎 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇𝙀𝙎 𝘼 *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} *𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝙊́* 𝙇𝙊𝙎 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇.`, mentions: [m.sender] }, { quoted: fkontak })
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}
