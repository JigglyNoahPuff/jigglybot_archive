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
      
      fetch("https://covid19api.io/api/v1/UnitedStateCasesByStates", requestOptions)
        .then(response => response.json())
        .then(result => { 
          for (i in result.data[0].table) {
            if (result.data[0].table[i].state == state) {
              info = result.data[0].table[i];
            }
          }
          //console.log(info)
          infoString += JSON.stringify(info.state);
          infoString += "\nPositive: " + JSON.stringify(info.positive);
          infoString += "\nDeaths: " + JSON.stringify(info.death);
          infoString += "\nRecovered: " + JSON.stringify(info.recovered);
          infoString += "\nHospitalized Currently: " + JSON.stringify(info.hospitalizedCurrently);
          const embed = new MessageEmbed()
          .setColor('#FF1493')
          .setTitle("COVID-19 Info")
          .setDescription(infoString)
          .setURL('https://covid19api.io/api/v1/UnitedStateCasesByStates');
          return message.say(embed);
        })
        .catch(error => console.log('error', error));
    }

    
};