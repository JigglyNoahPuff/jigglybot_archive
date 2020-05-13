const { Command } = require('discord.js-commando');

module.exports = class PickCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pick',
      aliases: ['pick-stuff', 'cant-decide'],
      memberName: 'pick',
      group: 'noahs',
      description: 'Chooses a thing from a given list of things'
    });
  }

    run(message) {
        //wendys, *carls jr, kfc, *taco bell, del taco, *mcdonalds, canes, *in n out, 
        var args = message.content.substring(6).split(', ');
        var randNum = Math.floor(Math.random() * args.length);

        if (message.author.username == "Cat_with_Sword") {
            message.author.send("Howdy Partner! You're answer is " + args[randNum] + ", but don't tell anyone cause it's a secret.")
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error);
            return message.say("You're not getting an answer from me you weeb!");
        }
        else{
            return message.say("The choice is " + args[randNum] + "!");
        }
    }
};