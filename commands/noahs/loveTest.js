const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class LoveTestCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'love',
      aliases: ['love', 'love-test'],
      group: 'noahs',
      memberName: 'love',
      guildOnly: true,
      description: 'Display the percentage match between two different people'
    });
  }

    run(message) {
        var args = message.content.substring(1).split(' ');
        //checks if two people are compatible
        if (args.length > 2) {
            if (args[1] == "69") {
                var seed = 69;
            }

            else if (args[1] == "100") {
                var seed = 100;
            }

            else if ((args[1] == "collin" && args[2] == "thighs") || (args[1] == "thighs" && args[2] == "collin" )) {
                var seed = 98;
            }
            
            else {
                var seed = 0;
                var tempString = args[1];
                for (var i = 0; i < tempString.length; i++) {
                    seed += tempString.charCodeAt(i);
                }
                tempString = args[2];
            
                for (var i = 0; i < tempString.length; i++) {
                    seed += tempString.charCodeAt(i);
                }
                seed += args[1].charCodeAt(0) + args[1].charCodeAt(args[1].length - 1);
                seed += args[2].charCodeAt(0) + args[2].charCodeAt(args[2].length - 1);
                seed = (1103515245 * seed + 12345) % 2147483648;
                seed = (seed % 100) + 1;
            }
            
            tempString = seed;
            tempString += "%";

            if (seed < 10) {
                tempString += "\nNo.  Just stop.  Why would you even put those two together?";
            }
            else if (seed < 25) { 
                tempString += "\nThey are as compatible as an Irishman and instant mashed potatoes.";
            }
            else if (seed < 50) { 
                tempString += "\nAbout as good as my parents are together... which isn't great.";
            }
            else if (seed < 65) { 
                tempString += "\nNot bad at all.  I think I see some sparks flying and not just from the fire I just set.";
            }
            else if (seed == 69) {
                tempString += "\nNice."
            }
            else if (seed < 75) { 
                tempString += "\nThats a great match, like peanut butter and jelly.";
            }
            else if (seed < 90) {
                tempString += "\nOoooooooohh its getting hot in here, I swear those two are better than Trump and divorcing his wife for a new model."
            }
            else if (seed < 100) {
                tempString += "\nThese two are nearly perfect, Collin and Thighs are even as amazing of a match as these two.";
            }
            else if (seed == 100) {
                tempString += "\nThere's certainly no way these two could find a better match. Brangelina move out of the way here comes "
                if ((args[1].length >= 3) && (args[2].length >= 3)) {
                    tempString += args[1].substr(0,2);
                    tempString += args[2].substr(2,(args[2].length - 1));
                }
                else {
                    tempString += "them";
                }
                tempString += "!";
            }

            return message.say(tempString);
        }
        else {
            return message.say("You must put two names dingus!");
        }
    }
};
