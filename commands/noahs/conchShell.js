const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ConchShellCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'magicconch',
      aliases: ['magic-conch', 'conch-shell'],
      group: 'noahs',
      memberName: 'magicconch',
      guildOnly: true,
      description: 'Magic Conch Shell like from Spongebob Squarepants'
    });
  }

  run(message) {
    //magic conch like from spongebob
    var mc = Math.floor(Math.random() * 28); 
        if(mc == 0) {
            return message.say('The Magic Conch says: Maybe someday.');
        } else if(mc == 1) {
            return message.say('The Magic Conch says: Nothing');
        } else if(mc == 2) {
            return message.say('The Magic Conch says: Neither');
        } else if(mc == 3) {
            return message.say('The Magic Conch says: Follow the seahorse.');
        } else if(mc == 4) {
            return message.say('The Magic Conch says: I dont think so.');
        } else if(mc == 5) {
            return message.say('The Magic Conch says: No.');
        } else if(mc == 6) {
            return message.say('The Magic Conch says: Yes.');
        } else if(mc == 7) {
            return message.say('The Magic Conch says: Try asking again.');
        } else if(mc == 8) {
            return message.say('The Magic Conch says: It is certain.');
        } else if(mc == 9) {
            return message.say('The Magic Conch says: It is decidely so.');
        } else if(mc == 10) {
            return message.say('The Magic Conch says: Without a doubt.');
        } else if(mc == 11) {
            return message.say('The Magic Conch says: Yes - definitely.');
        } else if(mc == 12) {
            return message.say('The Magic Conch says: You may rely on it.');
        } else if(mc == 13) {
            return message.say('The Magic Conch says: Most likely.');
        } else if(mc == 14) {
            return message.say('The Magic Conch says: Outlook good.');
        } else if(mc == 15) {
            return message.say('The Magic Conch says: Yes.');
        } else if(mc == 16) {
            return message.say('The Magic Conch says: Signs point to yes.');
        } else if(mc == 17) {
            return message.say('The Magic Conch says: Reply hazy, try again.');
        } else if(mc == 18) {
            return message.say('The Magic Conch says: Ask again later.');
        } else if(mc == 19) {
            return message.say('The Magic Conch says: Better not tell you now.');
        } else if(mc == 20) {
            return message.say('The Magic Conch says: Cannot predict now.');
        } else if(mc == 21) {
            return message.say('The Magic Conch says: Concentrate and ask again.');
        } else if(mc == 22) {
            return message.say('The Magic Conch says: Dont count on it.');
        } else if(mc == 23) {
            return message.say('The Magic Conch says: My reply is no.');
        } else if(mc == 24) {
            return message.say('The Magic Conch says: My sources say no.');
        } else if(mc == 25) {
            return message.say('The Magic Conch says: Outlook not so good.');
        } else if(mc == 26) {
            return message.say('The Magic Conch says: Very doubtful.');
        } else if(mc == 27) {
            return message.say('The Magic Conch says: As I say it yes.');
        } else{
            return message.say("The Magic Conch says: There was an error.");
        }
  }
};