const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class RemindMeAtCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'remindmeat',
      aliases: ['remind', 'remindme', 'remindat'],
      group: 'noahs',
      memberName: 'remindmeat',
      description: 'Reminds you at a give time mn/hr or mn/hr/dd/mm or mn/hr/dd/mm/yyyy',
      args: [
        {
            key: 'time',
            prompt: 'What time do you want to be reminded at?',
            type: 'string'
        },
        {
            key: 'name',
            prompt: 'What is the name of the reminder?',
            type: 'string'
        }
    ]
    });
  }

  run(message, {time, name}) {
    var fullTime = time.split('/');
    var d = new Date();
    var ms = d.getTime();
    var minute, hour, day, month, year, newDate;

    if (fullTime.length == 2) {
        minute = fullTime[0];
        hour = fullTime[1];
        newDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hour, minute);
        message.say(ms);
        ms = newDate.getTime() - ms;
        message.say(newDate.getTime());
        message.say(ms);
        message.say("Reminder for " + name + " set for " + hour + "/" + minute);
        try {
            var member = message.member;
                setTimeout(() => {  
                message.say(`${member}`)
                const embed = new MessageEmbed()
                    .setColor('#FEC1CF')
                    .setTitle("Your " + name + " Reminder Is NOW")
                    .setDescription("Your reminder thing is done now. So be reminded and do not forget.");
            message.say(embed)
                .catch(console.error);
            }, ms);
        }
        catch (e) {
            console.log(e);
        }
        return
    }
    else if(fullTime.length == 4) {
        minute = fullTime[0];
        hour = fullTime[1];
        day = fullTime[2];
        month = fullTime[3];
        newDate = new Date(d.getFullYear(), month, day, hour, minute);
        ms = ms - newDate.getTime();
        try {
            var member = message.member;
                setTimeout(() => {  
                message.say(`${member}`)
                const embed = new MessageEmbed()
                    .setColor('#FEC1CF')
                    .setTitle("Your " + name + " Reminder Is NOW")
                    .setDescription("Your reminder thing is done now. So be reminded and do not forget.");
            message.say(embed)
                .catch(console.error);
            }, ms);
        }
        catch (e) {
            console.log(e);
        }
        return
    }
    else if(fullTime.length == 5) {
        minute = fullTime[1];
        hour = fullTime[0];
        day = fullTime[2];
        month = fullTime[3];
        year = fullTime[4];
        newDate = new Date(year, month, day, hour, minute);
        ms = ms - newDate.getTime();
        try {
            var member = message.member;
                setTimeout(() => {  
                message.say(`${member}`)
                const embed = new MessageEmbed()
                    .setColor('#FEC1CF')
                    .setTitle("Your " + name + " Reminder Is NOW")
                    .setDescription("Your reminder thing is done now. So be reminded and do not forget.");
            message.say(embed)
                .catch(console.error);
            }, ms);
        }
        catch (e) {
            console.log(e);
        }
        return
    }
    else {
        return message.say("Please use one of the formats: MM/HH ,MM/HH/dd/mm, or MM/HH/dd/mm/yyyy");
    }
  }
};