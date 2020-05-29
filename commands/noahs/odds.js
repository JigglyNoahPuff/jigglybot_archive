const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class OddsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'odds',
      aliases: ['whataretheodds', 'seriouslyimcollinandineedtoknowwhataretheodds'],
      group: 'noahs',
      memberName: 'odds',
      description: 'Tells you the odds; changes daily',
      args: [
        {
          key: 'question',
          prompt: 'What are the odds ________?',
          type: 'string'
        }
      ]
    });
  }

  run(message, {question}) {
    
    question = question.toLowerCase();
    var d = new Date();
    var day = d.getTime() / 86400000; 
    var seed2 = message.author.id;

    for (var i = 0; i < question.length; i++) {
        seed2 += question.charCodeAt(i);
        seed2 += question.charCodeAt(0);
        seed2 += question.charCodeAt(question.length - 1);
    }
    var seed = (1103515245 * (Math.floor(day) + seed2) + 12345) % 99;
    seed += 1;
    const embed = new MessageEmbed()
      .setColor('#DB7093')
      .setTitle("Here are your odds")
      .setDescription(seed + '%');
    message.say(embed)
        .catch(console.error);
  }
};