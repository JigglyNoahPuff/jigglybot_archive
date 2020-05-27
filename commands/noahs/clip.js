const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const { youtubeAPI } = require('../../config.json');
const youtube = new Youtube(youtubeAPI);

module.exports = class ClipCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'clip',
      aliases: ['clips', 'sound'],
      group: 'noahs',
      memberName: 'clip',
      guildOnly: true,
      description: 'Plays different clips',
      args: [
        {
          key: 'clip',
          prompt: 'What is the clip you want to play?',
          type: 'string'
        }
      ]
    });
  }

  run(message, {clip}) {
    var voiceChannel = message.member.voice.channel;
    if (clip == "random") {
      clip = Math.floor(Math.random() * 64);
    }
    const embed = new MessageEmbed();
    var url;

      switch(clip) {
        
        case "collin":
        case 0:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/Ed-hguXms2Q', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Collin")
          .setDescription("This ones called Collin. Use 'clip collin' to call it.")
          .setURL('https://youtu.be/Ed-hguXms2Q');
        return message.say(embed);

        case "cock":
        case 1:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/JdCq2i1dA6w', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Clip")
          .setDescription("This ones called Cock. Use 'clip cock' to call it.")
          .setURL('https://youtu.be/JdCq2i1dA6w');
        return message.say(embed);

        case "sometimesstraight":
          case 3:
            voiceChannel.join()
            .then(connection => {
            const dispatcher = connection.play(ytdl('https://youtu.be/jAXguUR4pOU', { quality: 'highestaudio' }))
            .on('finish', function() {voiceChannel.leave()});
            }).catch(console.error);
            embed
            .setColor('#FFB6C1')
            .setTitle("Sometimes I'm Straight")
            .setDescription("This ones called Sometimes I'm Straight by Max Ynami. Use 'clip sometimesstraight' to call it.")
            .setURL('https://youtu.be/jAXguUR4pOU');
        return message.say(embed);

        case "italian":
        case 4:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/h2JQ6jCDSFg', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Italian")
          .setDescription("This ones called Italian. Use 'clip italian' to call it.")
          .setURL('https://youtu.be/h2JQ6jCDSFg');
        return message.say(embed);

        case "ica":
        case 5:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/I6v0nhEFUK8', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Interior Crocodile Alligator")
          .setDescription("This ones called ICA. Use 'clip ica' to call it.")
          .setURL('https://youtu.be/I6v0nhEFUK8');
        return message.say(embed);

        case "finland":
        case 6:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/R7BiKZbKffk', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Finland")
          .setDescription("This ones called Finland. Use 'clip finland' to call it.")
          .setURL('https://youtu.be/R7BiKZbKffk');
        return message.say(embed);

        case "fridge":
        case 7:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/TiC8pig6PGE', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Fridge")
          .setDescription("This ones called Fridge. Use 'clip fridge' to call it.")
          .setURL('https://youtu.be/TiC8pig6PGE');
        return message.say(embed);

        case "nut":
        case 8:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/T23s3O6iSiU', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Nut")
          .setDescription("This ones called Nut. Use 'clip nut' to call it.")
          .setURL('https://youtu.be/T23s3O6iSiU');
        return message.say(embed);

        case "dream":
        case 9:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/G7RgN9ijwE4', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Dream")
          .setDescription("This ones called Dream. Use 'clip dream' to call it.")
          .setURL('https://youtu.be/G7RgN9ijwE4');
        return message.say(embed);

        case "boo":
        case 10:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/PDNZX2nql2Y', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Boo")
          .setDescription("This ones called Boo. Use 'clip boo' to call it.")
          .setURL('https://youtu.be/PDNZX2nql2Y');
        return message.say(embed);

        case "wam":
        case 11:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/_pVNvSuA2mM', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Wam")
          .setDescription("This ones called Wam. Use 'clip wam' to call it.")
          .setURL('https://youtu.be/_pVNvSuA2mM');
        return message.say(embed);

        case "knife":
        case 12:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/d6gBu2Zd7Bc', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Knife")
          .setDescription("This ones called Knife. Use 'clip knife' to call it.")
          .setURL('https://youtu.be/d6gBu2Zd7Bc');
        return message.say(embed);

        case "yo":
        case 13:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/8EGliGWfuNI', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Yo")
          .setDescription("This ones called Yo. Use 'clip yo' to call it.")
          .setURL('https://youtu.be/8EGliGWfuNI');
        return message.say(embed);

        case "nice":
        case 14:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/3WAOxKOmR90', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Nice")
          .setDescription("This ones called Nice. Use 'clip nice' to call it.")
          .setURL('https://youtu.be/3WAOxKOmR90');
        return message.say(embed);

        case "okay":
        case 15:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/Obgnr9pc820', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Okay")
          .setDescription("This ones called Okay. Use 'clip okay' to call it.")
          .setURL('https://youtu.be/Obgnr9pc820');
        return message.say(embed);

        case "yrun":
        case 16:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/W6oQUDFV2C0', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Why are you running?!?!?")
          .setDescription("This ones called Why are you running?!?!? Use 'clip yrun' to call it.")
          .setURL('https://youtu.be/W6oQUDFV2C0');
        return message.say(embed);

        case "lewd":
        case 17:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/qr89xoZyE1g', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Lewd")
          .setDescription("This ones called Lewd. Use 'clip lewd' to call it. \nCollin made me put this one in; he is a naughty boy.")
          .setURL('https://youtu.be/qr89xoZyE1g');
        return message.say(embed);

        case "ohmy":
        case 18:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/c5Y25FT7DxE', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Oh My!")
          .setDescription("This ones called Oh My by George Takei. Use 'clip ohmy' to call it.")
          .setURL('https://youtu.be/c5Y25FT7DxE');
        return message.say(embed);

        case "stupid":
        case 19:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/yytbDZrw1jc', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("You are made of stupid.")
          .setDescription("This ones called Stupid by George Takei. Use 'clip stupid' to call it.")
          .setURL('https://youtu.be/yytbDZrw1jc');
        return message.say(embed);

        case "stopit":
        case 20:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/9Deg7VrpHbM', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Stop It.")
          .setDescription("This ones called Stop It. Use 'clip stopit' to call it.")
          .setURL('https://youtu.be/9Deg7VrpHbM');
        return message.say(embed);

        case "simp":
        case 21:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/c3m4Q07TkMk', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Simp")
          .setDescription("This ones called Simp. Use 'clip simp' to call it.")
          .setURL('https://youtu.be/c3m4Q07TkMk');
        return message.say(embed);

        case "power":
        case 22:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/Tlwda9S58Lg', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Power")
          .setDescription("This ones called Power. Use 'clip power' to call it.")
          .setURL('https://youtu.be/Tlwda9S58Lg');
        return message.say(embed);

        case "bday":
        case "birthday":
        case 23:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/F8W9370CHkk', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Birthday")
          .setDescription("This ones called Birthday. Use 'clip birthday' or 'clip bday' to call it.")
          .setURL('https://youtu.be/F8W9370CHkk');
        return message.say(embed);

        case "dragon":
        case 24:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/Mvaa80lVcfg', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Dragon")
          .setDescription("This ones called Dragon. Use 'clip dragon' to call it.")
          .setURL('https://youtu.be/Mvaa80lVcfg');
        return message.say(embed);

        case "explosion":
        case 25:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=jar1LTxxAeM', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Explosion!")
          .setDescription("This ones called Explosion by Megumin. Use 'clip explosion' to call it.")
          .setURL('https://www.youtube.com/watch?v=jar1LTxxAeM');
        return message.say(embed);

        case "run":
        case 26:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/eTMb2UkW4xY', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Run")
          .setDescription("This ones called Run. Use 'clip run' to call it.")
          .setURL('https://www.youtube.com/watch?v=jar1LTxxAeM');
        return message.say(embed);

        case "explain":
        case 27:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/FPZi51GL3cs', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Explain")
          .setDescription("This ones called Explain. Use 'clip explain' to call it.")
          .setURL('https://youtu.be/FPZi51GL3cs');
        return message.say(embed);

        case "learn":
        case 28:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/iZlpsneDGBQ', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Learn")
          .setDescription("This ones called Learn. Use 'clip learn' to call it.")
          .setURL('https://youtu.be/iZlpsneDGBQ');
        return message.say(embed);

        case "goal":
        case 29:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/NOPIobI_0B8', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Goal")
          .setDescription("This ones called Goal. Use 'clip goal' to call it.")
          .setURL('https://youtu.be/NOPIobI_0B8');
        return message.say(embed);

        case "waffle":
        case 30:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/z7fT6PdBptU', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Waffle")
          .setDescription("This ones called Waffle. Use 'clip waffle' to call it.")
          .setURL('https://youtu.be/z7fT6PdBptU');
        return message.say(embed);

        case "whatsup":
        case 31:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/FQ6_hKvCdMw', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("This Is How I Enter My House")
          .setDescription("This ones called What's Up F***ers???. Use 'clip whatsup' to call it.")
          .setURL('https://youtu.be/FQ6_hKvCdMw');
        return message.say(embed);

        case "americangirl":
        case 32:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/q4F2Qv5Ddcw', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("I Think I Know More Than You Do")
          .setDescription("This ones called American Girl. Use 'clip americangirl' to call it.")
          .setURL('https://youtu.be/q4F2Qv5Ddcw');
        return message.say(embed);
        
        case "duck":
        case 33:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/g9kZrOiqaKk', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Hey Duck!")
          .setDescription("This ones called You're No Good Duck!. Use 'clip duck' to call it.")
          .setURL('https://youtu.be/g9kZrOiqaKk');
        return message.say(embed);

        case "garbage":
        case 34:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/FZUcpVmEHuk', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("I'm Still A Piece Of Garbage")
          .setDescription("This ones called Garbage by Bill Wurtz. Use 'clip garbage' to call it.")
          .setURL('https://youtu.be/FZUcpVmEHuk');
        return message.say(embed);

        case "ihave":
        case 35:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/SLEdsI731J4', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("I Have Crippling Depression")
          .setDescription("This ones called Crippling Depression. Use 'clip ihave' to call it.")
          .setURL('https://youtu.be/SLEdsI731J4');
        return message.say(embed);

        case "roadwork":
        case 36:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/9sPthPleEKo', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Road Work Ahead")
          .setDescription("This ones called Road Work by Drew Gooden. Use 'clip roadwork' to call it.")
          .setURL('https://youtu.be/9sPthPleEKo');
        return message.say(embed);

        case "fine":
        case 37:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/77sS5IuR0Gs', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("They Ask You How You Are...")
          .setDescription("This ones called Fine. Use 'clip fine' to call it.")
          .setURL('https://youtu.be/77sS5IuR0Gs');
        return message.say(embed);

        case "lookatall":
        case 38:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/NsLKQTh-Bqo', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Look At All These ____")
          .setDescription("This ones called Chickens. Use 'clip lookatall' to call it.")
          .setURL('https://youtu.be/NsLKQTh-Bqo');
        return message.say(embed);

        case "chickenstrips":
        case 39:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/d7mrBC0zLZg', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("F*** Your Chicken Strips")
          .setDescription("This ones called Chicken Strips. Use 'clip chickenstrips' to call it.")
          .setURL('https://youtu.be/d7mrBC0zLZg');
        return message.say(embed);

        case "illuminati":
        case 40:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/sahAbxq8WPw', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Illuminati")
          .setDescription("This ones called Illuminati. Use 'clip illuminati' to call it.")
          .setURL('https://youtu.be/sahAbxq8WPw');
        return message.say(embed);

        case "oof":
        case 41:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/3w-2gUSus34', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Roblox Oof")
          .setDescription("This ones called Roblox Oof. Fun fact I made an oof while making writing the description for this clip. Use 'clip oof' to call it.")
          .setURL('https://youtu.be/3w-2gUSus34');
        return message.say(embed);

        case "dundun":
        case "dun dun":
        case 42:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=JfXCb9hSBMg', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("DUN DUN")
          .setDescription("This ones called Dundun. Use 'clip dundun' to call it.")
          .setURL('https://www.youtube.com/watch?v=JfXCb9hSBMg');
        return message.say(embed);

        case "justdoit":
        case 43:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=QISupPNCRYg', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("JUST DO IT!!!!")
          .setDescription("This ones called Just Do It by Shia LaBeouf. Use 'clip justdoit' to call it.")
          .setURL('https://www.youtube.com/watch?v=QISupPNCRYg');
        return message.say(embed);

        case "leeroyjenkins":
        case 44:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=yOMj7WttkOA', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("LEEROY!!!! JENKINS!!!!")
          .setDescription("This ones called Leeroy Jenkins. Use 'clip leeroyjenkins' to call it.")
          .setURL('https://www.youtube.com/watch?v=yOMj7WttkOA');
        return message.say(embed);

        case "shotandmiss":
        case 45:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/_BcnxsvM6J8', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("I Shot and I Miss")
          .setDescription("This ones called Shot and Miss. Use 'clip shotandmiss' to call it.")
          .setURL('https://youtu.be/_BcnxsvM6J8');
        return message.say(embed);

        case "lemons":
        case 46:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/g8ufRnf2Exc', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Lemons")
          .setDescription("This ones called Lemons by Cave Johnson. Use 'clip lemons' to call it.")
          .setURL('https://youtu.be/g8ufRnf2Exc');
        return message.say(embed);

        case "potato":
        case 47:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/KJ070rc5hpw', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("I'm a Potato")
          .setDescription("This ones called Potato by GladOS. Use 'clip potato' to call it.")
          .setURL('https://youtu.be/KJ070rc5hpw');
        return message.say(embed);

        case "degenerates":
        case "collin2":
        case 48:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/ngdAwK-VT3Q', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("We Have So Many Degenerates")
          .setDescription("This ones called Degenerates by Internkun. Use 'clip degenerates' to call it.")
          .setURL('https://youtu.be/ngdAwK-VT3Q');
        return message.say(embed);

        case "weatherboy":
        case 49:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/ehH9OQMQXIk', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Wouldn't You Like to Know Weatherboy?")
          .setDescription("This ones called weatherboy. Use 'clip weatherboy' to call it.")
          .setURL('https://youtu.be/ehH9OQMQXIk');
        return message.say(embed);

        case "lambsauce":
        case "lamb sauce":
        case 50:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/BS2hrc6TpIA', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("WHERES THE LAMB SAUCE?!?")
          .setDescription("This ones called Lamb Sauce by Gordon Ramsey. Use 'clip lambsauce' to call it.")
          .setURL('https://youtu.be/BS2hrc6TpIA');
        return message.say(embed);

        case "leftyou":
        case 51:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/ei0ds1Dj6_c', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("I Should've Left You")
          .setDescription("This ones called Left You. Use 'clip leftyou' to call it.")
          .setURL('https://youtu.be/ei0ds1Dj6_c');
        return message.say(embed);

        case "presex":
        case 52:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/hjsm-2oCcLk', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Sex Before Marriage")
          .setDescription("This ones called Pre(Marital)Sex. Use 'clip presex' to call it.")
          .setURL('https://youtu.be/hjsm-2oCcLk');
        return message.say(embed);

        case "wolf":
        case 53:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/LtH7l-dhHZQ', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("All On Levels Except Physical")
          .setDescription("This ones called Wolf. Use 'clip wolf' to call it.")
          .setURL('https://youtu.be/LtH7l-dhHZQ');
        return message.say(embed);

        case "meat":
        case 54:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/Acjf66Qdj2U', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Give Your Meat a Good Ol Rub")
          .setDescription("This ones called Meat. Use 'clip meat' to call it.")
          .setURL('https://youtu.be/Acjf66Qdj2U');
        return message.say(embed);

        case "damage":
        case 55:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/1Vi5MtBFdJo', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("That's a Lot of Damage")
          .setDescription("This ones called Damage. Use 'clip damage' to call it.")
          .setURL('https://youtu.be/1Vi5MtBFdJo');
        return message.say(embed);

        case "deedee":
        case "megadoodoo":
        case "deedee megadoodoo":
        case 56:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/Of_Apo0hcik', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Deedee Megadoodoo")
          .setDescription("This ones called Deedee. Use 'clip deedee' to call it.")
          .setURL('https://youtu.be/Of_Apo0hcik');
        return message.say(embed);

        case "nani":
        case 57:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/dNQs_Bef_V8', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Omae Wa Mou Shindeiru")
          .setDescription("This ones called Nani. Use 'clip nani' to call it.")
          .setURL('https://youtu.be/dNQs_Bef_V8');
        return message.say(embed);

        case "achild":
        case "child":
        case "rapist":
        case 58:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/U6Jogncx9Hk', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Only One Thing Worse Than a Rapist")
          .setDescription("This ones called AChild. Use 'clip achild' to call it.")
          .setURL('https://youtu.be/U6Jogncx9Hk');
        return message.say(embed);

        case "lemonsvine":
        case 59:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/EcLPNGLRHU8', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("When Life Gives You Lemons dun dun dun   dun dun  duh")
          .setDescription("This ones called lemonsvine. Use 'clip lemonsvine' to call it.")
          .setURL('https://youtu.be/EcLPNGLRHU8');
        return message.say(embed);

        case "gonesexual":
        case "gs":
        case 60:
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl('https://youtu.be/xZ_22WJW8rA', { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Gone Sexual")
          .setDescription("This ones called Gone Sexual by Ethan Klein. Use 'clip gonesexual' to call it.")
          .setURL('https://youtu.be/xZ_22WJW8rA');
        return message.say(embed);

        case "china":
        case 61:
          var randTrump = Math.floor(Math.random() * 23);
          switch (randTrump) {
            case 0:
              url = "https://youtu.be/SKiaytTmP-E";
            break;
            case 1:
              url = "https://youtu.be/SWPg7SATiUc";
            break;
            case 2:
              url = "https://youtu.be/gHR6CakUVHM";
            break;
            case 3:
              url = "https://youtu.be/2BB0Rz0uIPc";
            break;
            case 4:
              url = "https://youtu.be/GXS-AFFoPO8";
            break;
            case 5:
              url = "https://youtu.be/_ugZxci_SWY";
            break;
            case 6:
              url = "https://youtu.be/vZG9BiqNy_Y";
            break;
            case 7:
              url = "https://youtu.be/-RfHfXsf9Qs";
            break;
            case 8:
              url = "https://youtu.be/wQsgCYeXCqU";
            break;
            case 9:
              url = "https://youtu.be/LlC2UvId2IQ";
            break;
            case 10:
              url = "https://youtu.be/YXboIqEvUVE";
            break;
            case 11:
              url = "https://youtu.be/nSsxbKnTtNk";
            break;
            case 12:
              url = "https://youtu.be/WvFZtlGQxI8";
            break;
            case 13:
              url = "https://youtu.be/kcE9WSS-C_k";
            break;
            case 14:
              url = "https://youtu.be/P6QaczVZRTg";
            break;
            case 15:
              url = "https://youtu.be/MkjR1UVjMxI";
            break;
            case 16:
              url = "https://youtu.be/aeJXic1N6UE";
            break;
            case 17:
              url = "https://youtu.be/HGlNkwov370";
            break;
            case 18:
              url = "https://youtu.be/6KhPaqLmQDw";
            break;
            case 19:
              url = "https://youtu.be/jKegvxMSyts";
            break;
            case 20:
              url = "https://youtu.be/mF6UMbDRPiw";
            break;
            case 21:
              url = "https://youtu.be/BVfq047aPtE";
            break;
            case 22:
              url = "https://youtu.be/Ce_AyIakdmc";
            break;
          }
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl(url, { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("China")
          .setDescription("This ones called China by Donald Trump. There are 23 different clips, and it is random. Use 'clip china' to call it.")
          .setURL(url);
        return message.say(embed);

        case "curb":
        case 62:
          url = "https://youtu.be/CdqMZ_s7Y6k";
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl(url, { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("Curb Your Enthusiam")
          .setDescription("This ones called Curb. Use 'clip curb' to call it.")
          .setURL(url);
        return message.say(embed);

        case "ayaya":
        case 63:
          url = "https://youtu.be/uIauXFVABIQ";
          voiceChannel.join()
          .then(connection => {
          const dispatcher = connection.play(ytdl(url, { quality: 'highestaudio' }))
          .on('finish', function() {voiceChannel.leave()});
          }).catch(console.error);
          embed
          .setColor('#FFB6C1')
          .setTitle("AYAYA")
          .setDescription("This ones called AYAYA. Use 'clip ayaya' to call it.")
          .setURL(url);
        return message.say(embed);
      }
  }
};