const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class RemindMeAtCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'remindmeat',
      aliases: ['remind', 'remindme', 'remindat'],
      group: 'noahs',
      memberName: 'remindmeat',
      description: 'Reminds you at a give time hr:mn or hr:mn/mm/dd or hr:mn/mm/dd/yyyy',
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
    var semiTime = time.split(':')
    var fullTime = time.split('/');
    var d = new Date();
    var ms, minute, hour, day, month, year, newDate;
    message.say("UTC Time is " + d.getUTCHours() + ":" + d.getUTCMinutes());
    if (fullTime.length == 1) {
        minute = parseInt(semiTime[1]);
        hour = parseInt(semiTime[0]);
        newDate = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), hour, minute, 0, 0);
        ms = newDate.getTime() - d.getTime() - 21600000;

        message.say("Reminder for " + name + " set for " + hour + ":" + minute + " or " + ms + " Milliseconds from now");

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
    else if(fullTime.length == 3) {
        minute = parseInt(semiTime[1]);
        hour = parseInt(semiTime[0]);
        day = parseInt(fullTime[2]);
        month = parseInt(fullTime[1]);

        newDate = new Date(d.getUTCFullYear(), (month - 1), day, hour, minute, 0, 0);
        ms = newDate.getTime() - d.getTime() - 21600000;
        
        message.say("Reminder for " + name + " set for " + hour + ":" + minute + " or " + ms + " Milliseconds from now");

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
        minute = parseInt(semiTime[1]);
        hour = parseInt(semiTime[0]);
        day = parseInt(fullTime[2]);
        month = parseInt(fullTime[1]);
        year = parseInt(fullTime[3]);

        newDate = new Date(year, (month - 1), day, hour, minute, 0, 0);
        ms = (newDate.getTime() - d.getTime() - 21600000);

        message.say("Reminder for " + name + " set for " + hour + ":" + minute + " or " + ms + " Milliseconds from now");

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