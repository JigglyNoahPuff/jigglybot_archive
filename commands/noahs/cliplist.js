const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ClipListCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'cliplist',
      aliases: ['listclips'],
      group: 'noahs',
      memberName: 'cliplist',
      description: 'Lists all the clips'
    });
  }

  run(message) {
      const embed = new MessageEmbed()
      .setColor('#FF6781')
      .setTitle("Here is all the clips")
      .setDescription("achild, americangirl, ayaya, bday/birthday, boo, chickenstrips, china, cock, collin, curb, damage, deedee, degenerates, dragon, dream, dundun, explain, explosion, fine, finland, fridge, garbage, goal, gonesexual, ica, ihave, illuminati, italian, justdoit, knife, lambsauce/lamb sauce, learn, leeroyjenkins, leftyou, lemons, lemonsvine, lewd, lookatall, meat, nani, nice, nut, ohmy, okay, oof, potato, power, presex, roadwork, shotandmiss, simp, sometimes, stopit, straight, stupid, waffle, wam, weatherboy, whatsup, wolf, yo, yrun");
    message.author.send(embed)
        .then(message => console.log(`Sent message: ${message.content}`))
        .catch(console.error);
  }
};