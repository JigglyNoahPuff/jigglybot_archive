const { Command } = require('discord.js-commando');

module.exports = class PickHeroCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pickhero',
      aliases: ['pick-hero', 'pickcharacter'],
      memberName: 'pickhero',
      group: 'noahs',
      description: 'Chooses a character in a bunch of games',
      args: [
        {
          key: 'game',
          prompt: 'What is the game in which you want to pick a hero?',
          type: 'string'
        }
      ]
    });
  }
//TODO: embed message with included picture of hero
//Allow Overwatch to choose by roll
//Add Smash
//Add Mariokart

    run(message, {game}) {
        var randNum;
        game = game.toLowerCase();
        if (game == "overwatch") {
            randNum = Math.floor(Math.random() * 32);
            switch(randNum) {
                case 0: 
                return message.say("Symmetra");
                case 1: 
                return message.say("Zenyatta");
                case 2: 
                return message.say("Moira");
                case 3: 
                return message.say("Mercy");
                case 4: 
                return message.say("Lucio");
                case 5: 
                return message.say("Brigitte");
                case 6: 
                return message.say("Baptiste");
                case 7: 
                return message.say("Ana");
                case 8: 
                return message.say("Widowmaker");
                case 9: 
                return message.say("Tracer");
                case 10: 
                return message.say("Torbjorn");
                case 11: 
                return message.say("Sombra");
                case 12: 
                return message.say("Soldier:76");
                case 13: 
                return message.say("Reaper");
                case 14: 
                return message.say("Pharah");
                case 15: 
                return message.say("Mei");
                case 16: 
                return message.say("McCree");
                case 17: 
                return message.say("Junkrat");
                case 18: 
                return message.say("Hanzo");
                case 19: 
                return message.say("Genji");
                case 20: 
                return message.say("Echo");
                case 21: 
                return message.say("Doomfist");
                case 22: 
                return message.say("Bastion");
                case 23: 
                return message.say("Ashe");
                case 24: 
                return message.say("Zarya");
                case 25: 
                return message.say("Wrecking Ball");
                case 26: 
                return message.say("Winston");
                case 27: 
                return message.say("Sigma");
                case 28: 
                return message.say("Roadhog");
                case 29: 
                return message.say("Reinhardt");
                case 30: 
                return message.say("Orisa");
                case 31: 
                return message.say("D.Va");
            }

        }

        else if (game == "valorant") {
            randNum = Math.floor(Math.random() * 10);
            switch(randNum) {
                case 0: 
                return message.say("Omen");
                case 1: 
                return message.say("Phoenix");
                case 2: 
                return message.say("Sage");
                case 3: 
                return message.say("Cypher");
                case 4: 
                return message.say("Sova");
                case 5: 
                return message.say("Jett");
                case 6: 
                return message.say("Raze");
                case 7: 
                return message.say("Brimstone");
                case 8: 
                return message.say("Breach");
                case 9: 
                return message.say("Viper");
            }
        }

        else if ((game == "apex legends") || (game == "apex")) {
            randNum = Math.floor(Math.random() * 13);
            switch(randNum) {
                case 0: 
                return message.say("Bangalore");
                case 1: 
                return message.say("Bloodhound");
                case 2: 
                return message.say("Caustic");
                case 3: 
                return message.say("Crypto");
                case 4: 
                return message.say("Gibraltar");
                case 5: 
                return message.say("Lifeline");
                case 6: 
                return message.say("Loba");
                case 7: 
                return message.say("Mirage");
                case 8: 
                return message.say("Octane");
                case 9: 
                return message.say("Pathfinder");
                case 10: 
                return message.say("Revenant");
                case 11: 
                return message.say("Wattson");
                case 12: 
                return message.say("Wraith");
            }
        }


        return;
    }

    
};