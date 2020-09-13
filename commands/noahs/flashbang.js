const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const { youtubeAPI } = require('../../config.json');
const youtube = new Youtube(youtubeAPI);

module.exports = class FlashbangCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'flashbang',
      aliases: ['bang', 'flash'],
      group: 'noahs',
      memberName: 'flashbang',
      guildOnly: true,
      description: 'Simulates a flashbang'
    });
  }

 

  run(message) {
    const voiceChannel = message.member.voice.channel;
    const embed = new MessageEmbed();
    if (!voiceChannel) return message.say('Join a channel and try again');

    if (message.guild.triviaData.isTriviaRunning == true) {
      return message.say('Please try after the trivia has ended');
    }
    if ((message.guild.musicData.nowPlaying != null) || (message.guild.musicData.queue > 0)) {
      return message.say('Please try after the music has ended')
    }
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl("https://youtu.be/GPplf2VD8MY", { quality: 'highestaudio' }))
          .on('finish', function() { voiceChannel.leave()})
          }).catch(console.error);
        embed
          .setColor('#F0F0F0')
          .setDescription("FLASHBANG!")
        return message.say(embed);
  }
};