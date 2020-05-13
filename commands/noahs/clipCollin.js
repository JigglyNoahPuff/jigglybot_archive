const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const { youtubeAPI } = require('../../config.json');
const youtube = new Youtube(youtubeAPI);

module.exports = class ClipCollinCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'clipcollin',
      aliases: ['please_dont_clip_this', 'cringe_much'],
      group: 'noahs',
      memberName: 'clipcollin',
      guildOnly: true,
      description: 'Plays Collin saying "Please do not clip this"'
    });
  }

  run(message) {
    var voiceChannel = message.member.voice.channel;
    voiceChannel.join()
    .then(connection => {
        const dispatcher = connection.play(ytdl('https://youtu.be/Ed-hguXms2Q', { quality: 'highestaudio' }));
        dispatcher.on('end', end => {voiceChannel.leave()});
    }).catch(console.error);
  }
};