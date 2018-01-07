const POTS_AND_PANS = 'https://cdn.glitch.com/3df11894-b5a8-463f-92bc-845d06d8949a%2Fbanging_pots_and_pans.jpg?1515350684696';

function handlePotsAndPans(bot, msg) {
  if(msg.content.includes('@everyone')) { 
    bot.createMessage(msg.channel.id, POTS_AND_PANS);
  }
};

module.exports = handlePotsAndPans;