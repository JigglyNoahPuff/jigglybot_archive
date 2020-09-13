const { Command } = require('discord.js-commando');

module.exports = class DoorDashCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'doordash',
      aliases: ['dd', 'ddmessage', 'doordashmessage'],
      memberName: 'doordash',
      group: 'noahs',
      description: 'Creates a message from a template to message customers',
      args: [
        {
          key: 'nameCustomer',
          prompt: 'What is the name of the customer?',
          type: 'string'
        },
        {
            key: 'nameRestaurant',
            prompt: 'What is the name of the restaurant?',
            type: 'string'
          },
        {
          key: 'reasonNumber',
          prompt: 'What is the reason number?\n0: Apt #\n1: Generic Thank You\n2: Specialized Thank You\n3: Specialized Thank You, Please Rate Me',
          type: 'integer'
        }
      ]
    });
  }

    run(message, {nameCustomer, nameRestaurant, reasonNumber}) {
        switch (reasonNumber) {
            case 0:
                return message.say("Hi " + nameCustomer + " this is Noah with your " + nameRestaurant + " delivery. What is your apartment number?");
            case 1:
                return message.say("Thank you for choosing Doordash. If you could rate me five stars that would really help me out. Thank you and have a great night! -Noah");
            case 2:
                return message.say("Hi " + nameCustomer + " this is Noah with Doordash. I just dropped off your " + nameRestaurant + " order. Have a great night!");
            case 3:
                return message.say("Hi " + nameCustomer + " this is Noah with Doordash. I just dropped off your " + nameRestaurant + " order. If you could rate me five stars that would really help me out.  Have a great night!");
        }
    }
};