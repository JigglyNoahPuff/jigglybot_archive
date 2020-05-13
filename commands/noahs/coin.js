const { Command } = require('discord.js-commando');

module.exports = class CoinCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'coin',
      aliases: ['coin'],
      group: 'noahs',
      memberName: 'coin',
      description: 'Flips a coin'
    });
  }

  run(message) {
    var num = Math.floor(Math.random() * 10) ;
    if (num <= 5) 
        return message.say("Heads");
    else {
        return message.say("Tails");
    }
    
  }
};