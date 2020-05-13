const { Command } = require('discord.js-commando');

module.exports = class DieCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'die',
      aliases: ['die', 'dice'],
      memberName: 'die',
      group: 'noahs',
      description: 'Rolls a die of the size given',
      args: [
        {
          key: 'size',
          prompt: 'What is the size of the die?',
          type: 'integer'
        }
      ]
    });
  }

    run(message, {size}) {
        size = Math.ceil(size);
        /*message.author.send("Hey Sexy! Your dice roll is really " + (Math.floor(Math.random() * size) + 1) +". I just didn't want the others to know. ;)")
        .then(message => console.log(`Sent message: ${message.content}`))
        .catch(console.error);*/

        return message.say(Math.floor(Math.random() * size) + 1);
    }
};
