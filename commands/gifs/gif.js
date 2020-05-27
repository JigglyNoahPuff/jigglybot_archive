const fetch = require('node-fetch');
const { tenorAPI } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const { youtubeAPI } = require('../../config.json');
const youtube = new Youtube(youtubeAPI);

module.exports = class GifCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'gif',
      group: 'gifs',
      aliases: ['search-gif', 'search-gifs'],
      memberName: 'gif',
      description: 'Provide a query and I will return a gif!',
      throttling: {
        usages: 1,
        duration: 4
      },
      args: [
        {
          key: 'text',
          prompt: 'What gif would you like to watch?',
          type: 'string',
          validate: text => text.length < 50
        }
      ]
    });
  }

  run(message, { text }) {
    if((message.author.username == "Chenkleberg") && (text == "hentai")) {
      message.say("Jared no!");
      var voiceChannel = message.member.voice.channel;
      voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/9Deg7VrpHbM', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          const embed = new MessageEmbed()
          .setColor('#FFB6C1')
          .setTitle("Stop It.")
          .setDescription("This ones called Stop It. You are a degenerate and should not be looking up stuff like this.")
          .setURL('https://youtu.be/9Deg7VrpHbM');
      return message.say(embed);
    }
    else {
      fetch(`https://api.tenor.com/v1/random?key=${tenorAPI}&q=${text}&limit=1`)
        .then(res => res.json())
        .then(json => message.say(json.results[0].url))
        .catch(e => {
          message.say('Failed to find a gif that matched your query');
          // console.error(e);
          return;
        });
    }

  }
};
