let media = './media/menus/Menuvid1.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `🔰 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙖𝙡 𝙡𝙖𝙨 𝙘𝙪𝙚𝙣𝙩𝙖𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘 (katzyBot-MD) 
🔰 * *wa.me/519106285817*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘 (BOT SUPREMO) 
🔰 *wa.me/519106285817*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *𝙂𝙞𝙩𝙝𝙪𝙗*
*$ no 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙧𝙪𝙥𝙤𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙙𝙚𝙡 𝙗𝙤𝙩
1) *$https://chat.whatsapp.com/FN13fCVaxAQ36VbtMD8akF
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
2) *$https://chat.whatsapp.com/FN13fCVaxAQ36VbtMD8akF
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *𝘾𝙖𝙣𝙖𝙡 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥 / 𝙐𝙥𝙙𝙖𝙩𝙚*
 *$https://whatsapp.com/channel/0029VaKOQlMEquiP5Rdbfy3M
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝘼𝙨𝙞𝙨𝙩𝙚𝙣𝙘𝙞𝙖
*${fb}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙧𝙪𝙥𝙤 𝙩𝙚𝙡𝙚𝙜𝙧𝙖𝙢
*https://t.me/+EcdN9fktnQQwY2Ex*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *𝙏𝙞𝙠𝙩𝙤𝙠*
 *$no ay todavía xd
 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *𝙔𝙤𝙪𝙏𝙪𝙗𝙚*
*$https://www.youtube.com/@katzyBot-MD
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ *𝙂𝙧𝙪𝙥𝙤 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠*
*$https://www.facebook.com/groups/906059277556384/?ref=share
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙎𝙞 𝙩𝙞𝙚𝙣𝙚𝙣 𝙙𝙪𝙙𝙖𝙨, 𝙨𝙪𝙜𝙚𝙧𝙚𝙣𝙘𝙞𝙖𝙨, 𝙤 𝙥𝙧𝙚𝙜𝙪𝙣𝙩𝙖𝙨 𝗲𝘀𝗰𝗿𝗶𝗯𝗶 𝗽𝗼𝗿 𝗲𝗹 𝗴𝗿𝘂𝗽𝗼`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
handler.command = /^cuentasoficiales|cuentas|cuentaofc$/i
handler.exp = 35
handler.register = true
export default handler
