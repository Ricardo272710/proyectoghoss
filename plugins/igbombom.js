const handler = async (m, {conn}) => {
  m.reply(global.igbombon);
};
handler.command = /^(igbombóm|igbombon)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.igbombon = ` 
https://www.instagram.com/y.u.l.i.4?igsh=MWRhN2s1dXY3eXV6aA==
`;
