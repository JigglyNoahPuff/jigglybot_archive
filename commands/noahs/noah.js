const { Command } = require('discord.js-commando');

module.exports = class NoahCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'noah',
      aliases: ['noah-code', 'collin-mess-up'],
      memberName: 'noah',
      group: 'noahs',
      description: 'Chews out Collin'
    });
  }

    run(message) {
        return message.say("Try using a real function " + message.author.username + ".");
    }
};