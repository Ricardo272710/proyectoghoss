let handler = async (m, {conn, command}) => {
  let url = TrendTikTok[Math.floor(Math.random() * TrendTikTok.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 𝗧𝗥𝗘𝗡𝗗 𝗗𝗘 𝗧𝗜𝗞 𝗧𝗢𝗞`.trim(), m)
};
handler.help = ["TrendTikTok"];
handler.tags = ["internet"];
handler.command = /^(TrendTikTok)$/i;
export default handler;

global.TrendTikTok = [
  "https://qu.ax/Ylk.mp4",
  "https://qu.ax/gjAe.mp4",
  "https://qu.ax/LJqP.mp4",
  "https://qu.ax/sdTz.mp4",
  "https://qu.ax/sUeO.mp4",
  "https://qu.ax/EzVe.mp4",
  "https://qu.ax/uQjN.mp4",
  "https://qu.ax/FLJU.mp4",
  "https://qu.ax/GZQe.mp4",
  "https://qu.ax/qPnf.mp4",
  "https://qu.ax/sMgs.mp4",
];

handler.limit = 11;
