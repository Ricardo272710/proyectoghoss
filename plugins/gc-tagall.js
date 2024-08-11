const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join``;
  const oi = `${pesan}`;
  let teks = `╭─────────\n│▌│█║▌║𝐆𝐇𝐎𝐒𝐒 𝐁𝐎𝐓║▌║█│▌\n││↫↫📛𝘼𝘾𝙏Í𝙑𝘼𝙏𝙀 𝘾𝙍𝘼𝘾𝙆📛↬↬*${participants.length}* ${oi}\n││💮ꜱʜᴏᴘᴇ ɢʜᴏꜱꜱ ꜱᴏᴍᴏꜱ ᴛᴜ ᴍᴇᴊᴏʀ ᴇʟᴇᴄᴄɪÓɴ💮
│📲 +52 5658847374
│📲 +52 5658859551\n│\n`;
  
  for (const mem of participants) {
    teks += `│ 👑 @${mem.id.split('@')[0]}\n`;
  }
  teks += `│\n╰▌│█║▌║𝐆𝐇𝐎𝐒𝐒 𝐁𝐎𝐓║▌║█│▌`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;

