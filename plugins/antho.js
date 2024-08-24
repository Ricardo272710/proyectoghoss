const handler = async (m, {conn}) => {
  m.reply(global.anthony);
};
handler.command = /^(anthony|antho)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.scrimfem = `
Anthony legitimo hijo de lucho en el free fire 
`;
