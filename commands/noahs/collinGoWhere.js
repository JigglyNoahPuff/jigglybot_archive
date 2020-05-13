const { Command } = require('discord.js-commando');

module.exports = class CollinGoWhereCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'collingowhere',
      aliases: ['collin-goes-where', 'where-collin-eat'],
      memberName: 'collingowhere',
      group: 'noahs',
      description: 'Chooses a place from a set list',
      args: [
        {
          key: 'place',
          prompt: 'Are you at Home or School?',
          type: 'string'
        }
      ]
    });
  }

    run(message, {place}) {
        //wendys, *carls jr, kfc, *taco bell, del taco, *mcdonalds, canes, *in n out, 
        if ((place == "School" ) || (place == "school")) 
            var randNum = Math.floor(Math.random() * 4);
        else {
            var randNum = Math.floor(Math.random() * 8);
        }

        switch (randNum) {
            case 0:
                return message.say("In-N-Out!");

            case 1:
                return message.say("Taco Bell!");

            case 2: 
                return message.say("Carl's Jr!");
            
            case 3: 
                return message.say("Mcdonald's!");
            
            case 4: 
                return message.say("Del Taco!");
            
            case 5: 
                return message.say("Raising Cane's!");
            
            case 6: 
                return message.say("Kentucky Fried Chicken!");

            case 7: 
                return message.say("Wendy's!");

        }

        return message.say("Your eating at home tonight bud.");

    }
};
