let handler = async (m, {conn, command}) => {
  let url = Purgatorio[Math.floor(Math.random() * Purgatorio.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 *Purgatorio*`.trim(), m)
};
handler.help = ["Purgatorio"];
handler.tags = ["internet"];
handler.command = /^(Purgatorio)$/i;
export default handler;

global.Purgatorio = [
  "https://qu.ax/JrOF.jpg`",
];

handler.limit = 1;
