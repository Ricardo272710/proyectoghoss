// TheMystic-Bot-MD@BrunoSobrino - _antiprivado.js

export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(` @${m.sender.split`@`[0]}, 𝘼𝙡 𝙌𝙪𝙚𝙧𝙚𝙧 𝙃𝙖𝙗𝙡𝙖𝙧 𝘼𝙡 𝙋𝙧𝙞𝙫𝙖𝙙𝙤 seras \n\n𝘽𝙡𝙤𝙦𝙪𝙚𝙖𝙙𝙤
   Hola🪄
Hablas con GHOSS BOT💗💗
Si quieres adquirir el bot puedes escribirle a mi dueña
`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
