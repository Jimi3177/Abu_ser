const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: 'command help menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `

*Oᴡɴᴇʀ number Aʙᴜ* :https://wa.me/917025994178.
            

*Oᴡɴᴇʀ number Sᴀɴᴀ* :https://wa.me/917025994178.


*Wʜᴀᴛsᴀᴘᴘ Gʀᴏᴜᴘ Sᴀɴᴀ Mᴡᴏʟ* :https://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk_.


*Gɪᴛ Lɪɴᴋs* : https://github.com/Ajx-Abu/Abu_ser.


*Gɪᴛ Lɪɴᴋs* : https://github.com/Ajx-Abu/Sana-Mwol.


*Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅs* :https://github.com/Ajx-Abu/sana-media/tree/main/bgm.


*sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs* :https://github.com/Ajx-Abu/sana-media/tree/main/stickers.

◄━⦁💝 𝐒𝐀𝐍𝐀 𝐌𝐖𝐎𝐋💝⦁━►
■□ ~💙 𝐀𝐁𝐔 ❤️I💙 𝐒𝐀𝐍𝐀 ❤️~■□ 

`}) 

}));
