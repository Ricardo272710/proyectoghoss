let handler = async (m, {conn, command}) => {
  let url = Purgatorio[Math.floor(Math.random() * Purgatorio.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpge", 
     ` 
 *Purgatorio*`.trim(), m)
};
handler.help = ["Purgatorio"];
handler.tags = ["internet"];
handler.command = /^(Purgatorio)$/i;
export default handler;

global.Purgatorio = [
  "https://telegra.ph/file/09edd89c06631a6671658.jpg`",
];

handler.limit = 1;
