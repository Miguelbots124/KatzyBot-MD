/*Créditos a https://github.com/Azami19*/
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => gataImg.getRandom())
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇* ⊱❗️⊱╮\n\n𝙍𝙀𝙋𝙊𝙉𝘿𝘼 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝙊 𝙑𝙄𝘿𝙀𝙊'
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let caption = ` *📊 𝐄𝐍𝐋𝐀𝐂𝐄:*\n${link}\n*🎁 𝐓𝐀𝐌𝐀𝐍̃𝐎:*\n${media.length} 𝐛𝐲𝐭𝐞𝐬\n*🚀 𝐄𝐗𝐏𝐈𝐑𝐀𝐂𝐈𝐎𝐍:*\n ${isTele ? '✅ 𝐍𝐎 𝐄𝐗𝐏𝐈𝐑𝐀' : '⚠️ 𝐃𝐄𝐒𝐂𝐎𝐍𝐎𝐂𝐈𝐃𝐎'}\n*🔰 𝐀𝐂𝐎𝐑𝐓𝐀𝐃𝐎:*\n${await shortUrl(link)}`
conn.reply(m.chat, caption, m, { contextInfo: {externalAdReply :{mediaUrl: md, mediaType: 2, title: wm, body: botdate, thumbnail: await(await fetch(link)).buffer(), sourceUrl: link }}})}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.command = /^(tourl|upload)$/i
handler.register = true
export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()}
