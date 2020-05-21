const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');


module.exports = class NoahCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'covid',
      aliases: ['coronavirus', 'covid-19', 'covid19'],
      memberName: 'covid',
      group: 'noahs',
      description: 'Tells You the Number of Cases in a State',
      args: [
        {
          key: 'state',
          prompt: 'What is the state you want?',
          type: 'string'
        }
      ]
    });
  }

    run(message, {state}) {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      var i;
      var info;
      var infoString = "State: ";
      
      fetch("https://api.covid19api.com/live/country/united-states/status/confirmed", requestOptions, state, i)
        .then(response => response.json())
        .then(result => { 
          for (i in result) {
            if (result[i].Province == state) {
              info = result[i];
            }
          }
          infoString += JSON.stringify(info.Province);
          infoString += "\nConfirmed: " + JSON.stringify(info.Confirmed);
          infoString += "\nDeaths: " + JSON.stringify(info.Deaths);
          infoString += "\nRecovered: " + JSON.stringify(info.Recovered);
          infoString += "\nActive: " + JSON.stringify(info.Active);
          const embed = new MessageEmbed()
          .setColor('#FF1493')
          .setTitle("COVID-19 Info")
          .setDescription(infoString)
          .setURL('https://api.covid19api.com/live/country/united-states/status/confirmed');
          return message.say(embed);
        })
        .catch(error => console.log('error', error));
    }

    
};