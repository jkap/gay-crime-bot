const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token

const handlers = [
  require("./handlers/pots-and-pans")
];
 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
  handlers.forEach((handler) => handler(bot, msg));
});
 
bot.connect();                                         // Get the bot to connect to Discord