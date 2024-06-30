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
  let teks = `╭─────────\n│❏ 𝗗𝗿𝗮𝗴𝗼𝗻 𝗕𝗼𝘁 🐉\n│❏ 𝗠𝗶𝗲𝗺𝗯𝗿𝗼𝘀 : *${participants.length}* ${oi}\n│❏ 𝗩𝗲𝗻𝘁𝗮 𝗗𝗲 𝗕𝗼𝘁 𝗔𝗹 +51 926 933 818\n│\n`;
  for (const mem of participants) {
    teks += `│🐉 @${mem.id.split('@')[0]}\n`;
  }
  teks += `│\n╰@𝗖𝗿𝗶𝘀𝘁𝗵𝗼𝗳𝗲𝗿_𝗬𝗮𝗹𝗹𝗶𝗰𝗼`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;
export default handler;

