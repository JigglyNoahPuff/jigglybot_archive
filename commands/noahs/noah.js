const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');


module.exports = class NoahCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'noah',
      aliases: ['noah-code', 'collin-mess-up'],
      memberName: 'noah',
      group: 'noahs',
      description: 'Chews out Collin',
    });
  }

    run(message) {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      var infoString;
      
      fetch("https://api.kanye.rest", requestOptions)
        .then(response => response.json())
        .then(result => { 
          infoString = JSON.stringify(result.quote);
          infoString += "-Kanye West"
          return message.say(infoString);
        })
        .catch(error => console.log('error', error));
    }

    
};