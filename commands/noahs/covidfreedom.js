const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');


module.exports = class NoahCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'covid19government',
      aliases: ['covidgov', 'covidgovernment', 'covid19gov', "covid19civic"],
      memberName: 'covid19government',
      group: 'noahs',
      description: 'Tells You the Governments Response to COVID19',
      args: [
        {
          key: 'country',
          prompt: 'What is the country you want?',
          type: 'string'
        }
      ]
    });
  }

    run(message, {country}) {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      var i;
      var info;
      
      
      fetch("https://covid19api.io/api/v1/CivicFreedomTracker", requestOptions)
        .then(response => response.json())
        .then(result => { 
          for (i in result.data[0].table) {
            if (result.data[0].table[i].country == country) {
                info = result.data[0].table[i];
                var infoString = "Country: " + JSON.stringify(info.country);
                infoString += "\nDescription: " + JSON.stringify(info.description);
                infoString += "\nType: " + JSON.stringify(info.type);
                infoString += "\nDate: " + JSON.stringify(info.date);
                infoString += "\nIssue: " + JSON.stringify(info.issue);
                const embed = new MessageEmbed()
                .setColor('#FF1599')
                .setTitle(JSON.stringify(info.title))
                .setDescription(infoString)
                .setURL('https://covid19api.io/api/v1/CivicFreedomTracker');
                message.say(embed);
            }
          }
        })
        .catch(error => console.log('error', error));
    }

    
};