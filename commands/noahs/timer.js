const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class TimerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'timer',
      aliases: ['settimer', 'setatimer'],
      group: 'noahs',
      memberName: 'timer',
      description: 'Sets a timer for you',
      args: [
        {
          key: 'time',
          prompt: 'How many minutes?',
          type: 'float'
        },
        {
          key: 'name',
          prompt: "What's the name of the timer?",
          type: 'string'
        }
      ]
    });
  }

  run(message, {time, name}) {
    if (time < 1) {
        return message.say("Stop trying to break this with a negative number or by using zero!");
    }
    else if (time == null) {
        return message.say("Null is not accepted you dingus!");
    }
    else if (time > 1440) {
        return message.say("No numbers bigger than one day for now.")
    }
    else {
        if (time == 1)
            message.say("Timer set for 1 minute.")
        else     
            message.say("Timer set for " + time + " minutes.")
        try {
            var member = message.member;
                setTimeout(() => {  
                message.say(`${member}`)
                const embed = new MessageEmbed()
                    .setColor('#FEC1CF')
                    .setTitle("Your " + name + " Timer Is Finished")
                    .setDescription("Your timer for your thing is done, so you should probably go do whatever it is you need to do.");
            message.say(embed)
                .catch(console.error);
            }, time * 60000);
        }
        catch (e) {
            console.log(e);
        }
        return
    }
  }
};