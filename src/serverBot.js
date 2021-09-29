const { Telegraf } = require('telegraf')
require('dotenv').config()
const path = require('path')

const bot = new Telegraf(process.env.TOKEN_TELEGRAM)
const img = path.join(__dirname + '/images/naruto.jpg')
// console.log(`ruta es: ` , img);

//start
bot.start((ctx) => {
    ctx.reply('New? 😎 ')
    ctx.reply(`Welcome ${ctx.from.first_name} ${ctx.from.last_name}`)
    // console.log(ctx);
    // console.log(ctx.from);
    // console.log(ctx.chat);
    // console.log(ctx.message);
    // console.log(ctx.updateSubTypes);
})
//help
bot.help((ctx) => {
    ctx.reply('help') 
})
//settings
bot.settings((ctx) => {
    ctx.reply('settings ') 
})

//============================================================================

bot.command(['weather', 'Whather', 'clima', 'Clima'], (ctx) => {
    ctx.reply('weather is in maintenance')
})

bot.command(['naruto', 'Naruto'],  (ctx) => {
    ctx.reply('Your image here')
    ctx.replyWithPhoto({ source: img })
})

bot.hears('erik', (ctx) => {
    ctx.reply('is pro')
})

// =================================================================
//responder cualquier txt
bot.on('text', ctx => {
    ctx.reply('estas txt')
    console.log(ctx);
    // console.log(ctx.message.text);
})

// bot.on('sticker', ctx => {
//     ctx.reply('oh! you like this')
// })

// bot.mention('eriklarre_bot', (ctx) => {
//     ctx.reply('he is a bot account')
// })

// bot.hashtag('#hey', ctx => {
//     ctx.reply('is a hashtag')
// })



function MainServer(){
    console.log(' ----------------> bot is running');
    bot.launch()
}

MainServer();