const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token } = require('./config.json');
const { MessageEmbed } = require('discord.js');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const { youtubeAPI } = require('../config.json');
const youtube = new Youtube(youtubeAPI);

Structures.extend('Guild', function(Guild) {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 1,
        lastPlayed: null
      };
      this.triviaData = {
        isTriviaRunning: false,
        wasTriviaEndCalled: false,
        triviaQueue: [],
        triviaScore: new Map()
      };
      this.timer1 = null;
    }
  }
  return MusicGuild;
});

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: '214238249152020480' // change this to your Discord user ID
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['music', 'Music Command Group'],
    ['gifs', 'Gif Command Group'],
    ['other', 'random types of commands group'],
    ['guild', 'guild related commands'],
    ['noahs', 'functions noah made']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    eval: false,
    prefix: false,
    commandState: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity(`${prefix}help`, {
    type: 'WATCHING',
    url: 'https://github.com/galnir/Master-Bot'
  });
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general'); // change this to the channel name you want to send the greeting to
  if (!channel) return;
  channel.send(`Welcome ${member}!`);
});

client.on('message', function(message) {
  messageLower = message.content.toLowerCase();
  if(messageLower.search("hentai") != -1) {
    message.say(":disappointed:");
  }

  
  if(message.content.search(":Wut1") != -1) {
    var d = new Date();
    var time = d.getTime();
    const embed = new MessageEmbed();
    const voiceChannel = message.member.voice.channel;
    message.say(":smile:");
    if (!voiceChannel) {}
    else if (message.guild.triviaData.isTriviaRunning == true){}
    else if ((message.guild.musicData.nowPlaying != null) || (message.guild.musicData.queue > 0)) {}
    else {
      voiceChannel.join()
      .then(connection => {
        message.guild.timer1 = d.getTime();
      const dispatcher = connection.play(ytdl('https://youtu.be/R7BiKZbKffk', { quality: 'highestaudio' }))
      .on('finish', function() {          
        message.guild.timer1 = d.getTime();          
        setTimeout(() => {
          if (message.guild.timer1 <= time) {
            voiceChannel.leave();
      }}, 60000)});
      }).catch(console.error);
      embed
      .setColor('#FFB6C1')
      .setTitle("Finland")
      .setDescription("This ones called Finland. Use 'clip finland' to call it.")
      .setURL('https://youtu.be/R7BiKZbKffk');
    message.say(embed);
    }
    
  }

  if(message.content.search(":flashout:") != -1) {
    var d = new Date();
    var time = d.getTime();
    const embed = new MessageEmbed();
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.say('Join a channel and try again');

    else if (message.guild.triviaData.isTriviaRunning == true) {
      message.say('Please try after the trivia has ended');
    }
    else if ((message.guild.musicData.nowPlaying != null) || (message.guild.musicData.queue > 0)) {
      message.say('Please try after the music has ended');
    }
    else {
      voiceChannel.join()
      .then(connection => {
        message.guild.timer1 = d.getTime();
      const dispatcher = connection.play(ytdl('https://youtu.be/GPplf2VD8MY', { quality: 'highestaudio' }))
      .on('finish', function() {          
        message.guild.timer1 = d.getTime();          
        setTimeout(() => {
          if (message.guild.timer1 <= time) {
            voiceChannel.leave();
      }}, 60000)});
      }).catch(console.error);
      embed
      .setColor('#F0F0F0')
      .setDescription("FLASHBANG!")
    message.say(embed);
    }
  }
  

  /*
  if (message.author.id != 709247437189021740)  {
    if (messageLower.search("i'm " > -1)) {
      message.say("Hi " + message.content.substring(messageLower.search("i'm ") + 4, messageLower.length) + ". I'm Dadbot!")
    }
    else if (messageLower.search("im ") > -1) {
      message.say("Hi " + message.content.substring(messageLower.search("im ") + 3, messageLower.length) + ". I'm Dadbot!")
    }
  }*/
  return
})

client.login(token);

//todo:
//random from list of restaurants (make bigger)
//join function for if collin breaks the music again
//get on @