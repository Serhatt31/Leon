let Bot = require('../events');
let {MessageType,Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let ffmpeg = require('fluent-ffmpeg');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('unvoice');

if (Config.WORKTYPE == 'private') {

    Bot.addCommand({pattern: 'unvoice', fromMe: true, desc: Lang.UV_DESC}, (async (message, match) => {    

   function _0x2d80(){var _0x588177=['data','27144HRPlTw','output.mp3','72bKcYlf','jid','99yCOCcJ','7983645aRxPtb','reply_message','readFileSync','mp3','client','downloadAndSaveMediaMessage','format','86sxJsWz','840322arKVHf','quotedMessage','16071810SJUMgo','34406tLiEUf','200589JWRgFt','42aDHTZg','5031708TGVMUp','sendReply','save','783nDARfP'];_0x2d80=function(){return _0x588177;};return _0x2d80();}var _0x17f17c=_0x18de;(function(_0x151d11,_0xe4064){var _0x3aab5d=_0x18de,_0xfeaca4=_0x151d11();while(!![]){try{var _0x5cbedb=-parseInt(_0x3aab5d(0xc2))/0x1*(parseInt(_0x3aab5d(0xbe))/0x2)+-parseInt(_0x3aab5d(0xc3))/0x3*(-parseInt(_0x3aab5d(0xcc))/0x4)+-parseInt(_0x3aab5d(0xcf))/0x5+-parseInt(_0x3aab5d(0xc4))/0x6*(-parseInt(_0x3aab5d(0xbf))/0x7)+-parseInt(_0x3aab5d(0xca))/0x8*(parseInt(_0x3aab5d(0xc8))/0x9)+-parseInt(_0x3aab5d(0xc1))/0xa+parseInt(_0x3aab5d(0xce))/0xb*(parseInt(_0x3aab5d(0xc5))/0xc);if(_0x5cbedb===_0xe4064)break;else _0xfeaca4['push'](_0xfeaca4['shift']());}catch(_0x5e5a22){_0xfeaca4['push'](_0xfeaca4['shift']());}}}(_0x2d80,0xccda6));if(message[_0x17f17c(0xd0)]===![])return await message[_0x17f17c(0xc6)](Lang['UV_REPLY']);var location=await message[_0x17f17c(0xbb)][_0x17f17c(0xbc)]({'key':{'remoteJid':message[_0x17f17c(0xd0)][_0x17f17c(0xcd)],'id':message[_0x17f17c(0xd0)]['id']},'message':message[_0x17f17c(0xd0)][_0x17f17c(0xc9)][_0x17f17c(0xc0)]});function _0x18de(_0x5d7e62,_0x4ccfef){var _0x2d80d5=_0x2d80();return _0x18de=function(_0x18dee2,_0x5f49cc){_0x18dee2=_0x18dee2-0xbb;var _0xaeaea5=_0x2d80d5[_0x18dee2];return _0xaeaea5;},_0x18de(_0x5d7e62,_0x4ccfef);}ffmpeg(location)[_0x17f17c(0xbd)](_0x17f17c(0xd2))[_0x17f17c(0xc7)](_0x17f17c(0xcb))['on']('end',async()=>{var _0x48dff9=_0x17f17c;await message['sendAudioAsVoice'](fs[_0x48dff9(0xd1)](_0x48dff9(0xcb)));});return;
   }));
    
    Bot.addCommand({pattern: 'unaudio', fromMe: true, desc: Lang.UA_DESC}, (async (message, match) => {    

    function _0xec8f(_0x4d01aa,_0x29e51d){var _0x4f2d6a=_0x4f2d();return _0xec8f=function(_0xec8f35,_0x19383b){_0xec8f35=_0xec8f35-0x1bf;var _0x5afb69=_0x4f2d6a[_0xec8f35];return _0x5afb69;},_0xec8f(_0x4d01aa,_0x29e51d);}var _0x308c16=_0xec8f;(function(_0x3b3800,_0x3ab34d){var _0x503661=_0xec8f,_0x3dad59=_0x3b3800();while(!![]){try{var _0x563864=parseInt(_0x503661(0x1c6))/0x1*(parseInt(_0x503661(0x1c0))/0x2)+-parseInt(_0x503661(0x1d5))/0x3*(-parseInt(_0x503661(0x1cc))/0x4)+parseInt(_0x503661(0x1c9))/0x5+parseInt(_0x503661(0x1cb))/0x6*(parseInt(_0x503661(0x1ca))/0x7)+-parseInt(_0x503661(0x1c8))/0x8*(parseInt(_0x503661(0x1c3))/0x9)+parseInt(_0x503661(0x1c4))/0xa*(-parseInt(_0x503661(0x1d1))/0xb)+-parseInt(_0x503661(0x1ce))/0xc;if(_0x563864===_0x3ab34d)break;else _0x3dad59['push'](_0x3dad59['shift']());}catch(_0x1fb783){_0x3dad59['push'](_0x3dad59['shift']());}}}(_0x4f2d,0x60aad));function _0x4f2d(){var _0x290377=['data','12BVambB','save','3866FJhilr','client','quotedMessage','36zIymQt','2206490grfsjK','withNoVideo','202pBAKeP','sendReply','1407304EAFiMl','1499430gdNUJj','4809pjBubl','1596UbyeED','584488xXXOnm','UA_REPLY','1647984JlzHGn','jid','downloadAndSaveMediaMessage','11CqPbvX','output.mp3','reply_message'];_0x4f2d=function(){return _0x290377;};return _0x4f2d();}if(message[_0x308c16(0x1d3)]===![])return await message[_0x308c16(0x1c7)](Lang[_0x308c16(0x1cd)]);var location=await message[_0x308c16(0x1c1)][_0x308c16(0x1d0)]({'key':{'remoteJid':message[_0x308c16(0x1d3)][_0x308c16(0x1cf)],'id':message[_0x308c16(0x1d3)]['id']},'message':message[_0x308c16(0x1d3)][_0x308c16(0x1d4)][_0x308c16(0x1c2)]});ffmpeg(location)[_0x308c16(0x1c5)]()[_0x308c16(0x1bf)](_0x308c16(0x1d2))['on']('end',async()=>{await message['sendAudio'](fs['readFileSync']('output.mp3'));});return;
    }));
}
else if (Config.WORKTYPE == 'public') {

    Bot.addCommand({pattern: 'unvoice', fromMe: false, desc: Lang.UV_DESC}, (async (message, match) => {    

    function _0x2d80(){var _0x588177=['data','27144HRPlTw','output.mp3','72bKcYlf','jid','99yCOCcJ','7983645aRxPtb','reply_message','readFileSync','mp3','client','downloadAndSaveMediaMessage','format','86sxJsWz','840322arKVHf','quotedMessage','16071810SJUMgo','34406tLiEUf','200589JWRgFt','42aDHTZg','5031708TGVMUp','sendReply','save','783nDARfP'];_0x2d80=function(){return _0x588177;};return _0x2d80();}var _0x17f17c=_0x18de;(function(_0x151d11,_0xe4064){var _0x3aab5d=_0x18de,_0xfeaca4=_0x151d11();while(!![]){try{var _0x5cbedb=-parseInt(_0x3aab5d(0xc2))/0x1*(parseInt(_0x3aab5d(0xbe))/0x2)+-parseInt(_0x3aab5d(0xc3))/0x3*(-parseInt(_0x3aab5d(0xcc))/0x4)+-parseInt(_0x3aab5d(0xcf))/0x5+-parseInt(_0x3aab5d(0xc4))/0x6*(-parseInt(_0x3aab5d(0xbf))/0x7)+-parseInt(_0x3aab5d(0xca))/0x8*(parseInt(_0x3aab5d(0xc8))/0x9)+-parseInt(_0x3aab5d(0xc1))/0xa+parseInt(_0x3aab5d(0xce))/0xb*(parseInt(_0x3aab5d(0xc5))/0xc);if(_0x5cbedb===_0xe4064)break;else _0xfeaca4['push'](_0xfeaca4['shift']());}catch(_0x5e5a22){_0xfeaca4['push'](_0xfeaca4['shift']());}}}(_0x2d80,0xccda6));if(message[_0x17f17c(0xd0)]===![])return await message[_0x17f17c(0xc6)](Lang['UV_REPLY']);var location=await message[_0x17f17c(0xbb)][_0x17f17c(0xbc)]({'key':{'remoteJid':message[_0x17f17c(0xd0)][_0x17f17c(0xcd)],'id':message[_0x17f17c(0xd0)]['id']},'message':message[_0x17f17c(0xd0)][_0x17f17c(0xc9)][_0x17f17c(0xc0)]});function _0x18de(_0x5d7e62,_0x4ccfef){var _0x2d80d5=_0x2d80();return _0x18de=function(_0x18dee2,_0x5f49cc){_0x18dee2=_0x18dee2-0xbb;var _0xaeaea5=_0x2d80d5[_0x18dee2];return _0xaeaea5;},_0x18de(_0x5d7e62,_0x4ccfef);}ffmpeg(location)[_0x17f17c(0xbd)](_0x17f17c(0xd2))[_0x17f17c(0xc7)](_0x17f17c(0xcb))['on']('end',async()=>{var _0x48dff9=_0x17f17c;await message['sendAudioAsVoice'](fs[_0x48dff9(0xd1)](_0x48dff9(0xcb)));});return;
    }));
    
    Bot.addCommand({pattern: 'unaudio', fromMe: false, desc: Lang.UA_DESC}, (async (message, match) => {    

    function _0xec8f(_0x4d01aa,_0x29e51d){var _0x4f2d6a=_0x4f2d();return _0xec8f=function(_0xec8f35,_0x19383b){_0xec8f35=_0xec8f35-0x1bf;var _0x5afb69=_0x4f2d6a[_0xec8f35];return _0x5afb69;},_0xec8f(_0x4d01aa,_0x29e51d);}var _0x308c16=_0xec8f;(function(_0x3b3800,_0x3ab34d){var _0x503661=_0xec8f,_0x3dad59=_0x3b3800();while(!![]){try{var _0x563864=parseInt(_0x503661(0x1c6))/0x1*(parseInt(_0x503661(0x1c0))/0x2)+-parseInt(_0x503661(0x1d5))/0x3*(-parseInt(_0x503661(0x1cc))/0x4)+parseInt(_0x503661(0x1c9))/0x5+parseInt(_0x503661(0x1cb))/0x6*(parseInt(_0x503661(0x1ca))/0x7)+-parseInt(_0x503661(0x1c8))/0x8*(parseInt(_0x503661(0x1c3))/0x9)+parseInt(_0x503661(0x1c4))/0xa*(-parseInt(_0x503661(0x1d1))/0xb)+-parseInt(_0x503661(0x1ce))/0xc;if(_0x563864===_0x3ab34d)break;else _0x3dad59['push'](_0x3dad59['shift']());}catch(_0x1fb783){_0x3dad59['push'](_0x3dad59['shift']());}}}(_0x4f2d,0x60aad));function _0x4f2d(){var _0x290377=['data','12BVambB','save','3866FJhilr','client','quotedMessage','36zIymQt','2206490grfsjK','withNoVideo','202pBAKeP','sendReply','1407304EAFiMl','1499430gdNUJj','4809pjBubl','1596UbyeED','584488xXXOnm','UA_REPLY','1647984JlzHGn','jid','downloadAndSaveMediaMessage','11CqPbvX','output.mp3','reply_message'];_0x4f2d=function(){return _0x290377;};return _0x4f2d();}if(message[_0x308c16(0x1d3)]===![])return await message[_0x308c16(0x1c7)](Lang[_0x308c16(0x1cd)]);var location=await message[_0x308c16(0x1c1)][_0x308c16(0x1d0)]({'key':{'remoteJid':message[_0x308c16(0x1d3)][_0x308c16(0x1cf)],'id':message[_0x308c16(0x1d3)]['id']},'message':message[_0x308c16(0x1d3)][_0x308c16(0x1d4)][_0x308c16(0x1c2)]});ffmpeg(location)[_0x308c16(0x1c5)]()[_0x308c16(0x1bf)](_0x308c16(0x1d2))['on']('end',async()=>{await message['sendAudio'](fs['readFileSync']('output.mp3'));});return;
    }));
}
