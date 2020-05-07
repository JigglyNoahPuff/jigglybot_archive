var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const ytdl = require('ytdl-core');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

//const queue = new Map();

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

/*bot.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith(`${prefix}play`)) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}skip`)) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}stop`)) {
		stop(message, serverQueue);
		return;
	} else {
		message.channel.send('You need to enter a valid command!')
	}
});*/

bot.on('message', function (user, userID, channelID, message, evt) {
    message = message.toLowerCase();
    
    var d = new Date();
    var n = (d.getTime() % 25);
    var mc = (d.getTime() % 28);
    var time = (d.getTime());
    //functions
    
    //magic conch like from spongebob
    function magicconch() {
        if(mc == 0) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Maybe someday.'
            });
        }

        else if(mc == 1) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Nothing'
            });
        }

        else if(mc == 2) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Neither'
            });
        }

        else if(mc == 3) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Follow the seahorse.'
            });
        }

        else if(mc == 4) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: I dont think so.'
            });
        }

        else if(mc == 5) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: No.'
            });
        }

        else if(mc == 6) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Yes.'
            });
        }

        else if(mc == 7) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Try asking again.'
            });
        }

        else if(mc == 8) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: It is certain.'
            });
        }

        else if(mc == 9) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: It is decidely so.'
            });
        }

        else if(mc == 10) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Without a doubt.'
            });
        }

        else if(mc == 11) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Yes - definitely.'
            });
        }

        else if(mc == 12) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: You may rely on it.'
            });
        }

        else if(mc == 13) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Most likely.'
            });
        }

        else if(mc == 14) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Outlook good.'
            });
        }

        else if(mc == 15) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Yes.'
            });
        }

        else if(mc == 16) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Signs point to yes.'
            });
        }

        else if(mc == 17) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Reply hazy, try again.'
            });
        }

        else if(mc == 18) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Ask again later.'
            });
        }

        else if(mc == 19) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Better not tell you now.'
            });
        }

        else if(mc == 20) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Cannot predict now.'
            });
        }

        else if(mc == 21) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Concentrate and ask again.'
            });
        }

        else if(mc == 22) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Dont count on it.'
            });
        }

        else if(mc == 23) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: My reply is no.'
            });
        }

        else if(mc == 24) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: My sources say no.'
            });
        }

        else if(mc == 25) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Outlook not so good.'
            });
        }

        else if(mc == 26) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: Very doubtful.'
            });
        }

        else if(mc == 27) {
            bot.sendMessage({
            to: channelID,
            message: 'The Magic Conch says: As I say it yes'
            });
        }

        return 0;
    }

    //fucntions for seeded random number generator 
    function seededRandom(seed) {
        var _seed = (1103515245 * seed + 12345) % 2147483648;
        return _seed;
    }
      
    //generates a random pokefact
    function pokefact() {
        var message;
        if(n == 0) {
           message = 'Rhydon was the first Pokemon ever created.';
        }

        else if(n == 1) {
           message = 'Pikachus name is Japanese onomatopoeia for sparkle and squeaking.';
        }

        else if(n == 2) {
           message = 'Drowzee is based off of a tapir.';
        }

        else if(n == 3) {    
           message = 'Azurill is the only Pokemon that can change gender.';
        }

        else if(n == 4) {    
           message = 'Xatu sees both past and future at the same time.';
        }

        else if(n == 5) {       
           message = 'Slowbro is the only Pokemon that can devolve.';
        }

        else if(n == 6) {
           message = 'Slowpoke is considered a delicacy.';
        }

        else if(n == 7) {
           message = 'Many Pokemon names include numbers.';
        }

        else if(n == 8) {
           message = 'Psychic type Pokemon are weak to bug, ghost, and dark type because they are common fears.';
        }

        else if(n == 9) {
           message = 'Rock types could still beat a Pokemon with all 18 types.';
        }

        else if(n == 10) {
           message = 'Cubone wears the skull of his dead mother.';
        }

        else if(n == 11) {
           message = 'Poliwags swirl is based on tadpoles intestines.';
        }

        else if(n == 12) {      
           message = 'Yamask is a dead human.';
        }

        else if(n == 13) { 
           message = 'Munna was mentioned in the first game.';
        }

        else if(n == 14) { 
           message = 'Hitmonchan and Hitmonlee got their names from famous fighters.';
        }

        else if(n == 15) {
           message = 'Arcanine was intended to be a legendary Pokemon.';
        }

        else if(n == 16) {
           message = 'The move Splash is a mistranslation for Hop.';
        }

        else if(n == 17) {
           message = 'Pikachu and Meowth are exact opposites.';
        }

        else if(n == 18) {
           message = 'Clefairy was almost the face of Pokemon.';
        }

        else if(n == 19) { 
           message = 'Ditto was a failed attempt to copy Mew.';
        }

        else if(n == 20) {            
           message = 'Each Spinda has a unique pattern of spots.';
        }

        else if(n == 21) {
           message = 'Fishing is possible in Pokemon red and blue gyms.';
        }

        else if(n == 22) {
            message = 'Smeargle can use almost every move in the game.';
        }

        else if(n == 23) {
            message = 'Wobuffets main body is a decoy.';
        }

        else if(n == 24) {
            message = 'Pokemon is short for "Pocket Monster."';
        }
        else if(n == 25) {
            message ='somethings wrong';
        }
        bot.sendMessage({
        to: channelID,
        message: message
        });
    }

    //checks if two people are compatible
    function lovetest(args) {
        if (args.length > 2) {
            if (args[1] == "69") {
                var seed = 69;
            }

            else if (args[1] == "100") {
                var seed = 100;
            }

            else if ((args[1] == "collin" && args[2] == "thighs") || (args[1] == "thighs" && args[2] == "collin" )) {
                var seed = 98;
            }
            
            else {
                var seed = 0;
                var tempString = args[1];
                for (var i = 0; i < tempString.length; i++) {
                    seed += tempString.charCodeAt(i);
                }
                tempString = args[2];
            
                for (var i = 0; i < tempString.length; i++) {
                    seed += tempString.charCodeAt(i);
                }
                seed += args[1].charCodeAt(0) + args[1].charCodeAt(args[1].length - 1);
                seed += args[2].charCodeAt(0) + args[2].charCodeAt(args[2].length - 1);
                seed = (seededRandom(seed) % 100) + 1;
            }
            
            tempString = seed;
            tempString += "%";

            if (seed < 10) {
                tempString += "\nNo.  Just stop.  Why would you even put those two together?";
            }
            else if (seed < 25) { 
                tempString += "\nThey are as compatible as an Irishman and instant mashed potatoes.";
            }
            else if (seed < 50) { 
                tempString += "\nAbout as good as my parents are together... which isn't great.";
            }
            else if (seed < 65) { 
                tempString += "\nNot bad at all.  I think I see some sparks flying and not just from the fire I just set.";
            }
            else if (seed == 69) {
                tempString += "\nNice."
            }
            else if (seed < 75) { 
                tempString += "\nThats a great match, like peanut butter and jelly.";
            }
            else if (seed < 90) {
                tempString += "\nOoooooooohh its getting hot in here, I swear those two are better than Trump and divorcing his wife for a new model."
            }
            else if (seed < 100) {
                tempString += "\nThese two are nearly perfect, Collin and Thighs are even as amazing of a match as these two.";
            }
            else if (seed == 100) {
                tempString += "\nThere's certainly no way these two could find a better match. Brangelina move out of the way here comes "
                if ((args[1].length >= 3) && (args[2].length >= 3)) {
                    tempString += args[1].substr(0,2);
                    tempString += args[2].substr(2,(args[2].length - 1));
                }
                else {
                    tempString += "them";
                }
                tempString += "!";
            }

            bot.sendMessage({
            to: channelID,
            message: tempString
            });
        }
        else {
            bot.sendMessage({
                to: channelID,
                message: "You must put two names dingus!"
                });
        }
    }
    
    //functions end
    //botstart
    
    
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        //removes all words except the first
        //args = args.splice(1);
        
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                    
                });

                bot.sendMessage({
                    to: channelID,
                    message: args[1]
                    
                });

            break;

            case 'pokefact':       
                pokefact();
            break;


            case 'magicconch':

                magicconch();

            break;

            //anysided die
            case 'die':
                var tempInt = parseInt(args[1]);
                var dieRoll = ((time % tempInt) + 1);
                bot.sendMessage({
                to: channelID,
                message: dieRoll
                });
            break;

            case 'author':
                bot.sendMessage({
                to: channelID,
                message: user
                });
            break;

            case 'love':
                lovetest(args);
            break;

                



        
 
            
            //SONG STUFF
            /*case 'play':
                execute(message, serverQueue);
            break;

            case 'skip':
                skip(message, serverQueue);
            break;
            
            case 'stop':
                stop(message, serverQueue);
            break; */
                    
        }

            
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  START SONG STUFF

    /*
    async function execute(message, serverQueue) {
        const args = message.content.split(' ');
    
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
            return message.channel.send('I need the permissions to join and speak in your voice channel!');
        }
    
        const songInfo = await ytdl.getInfo(args[1]);
        const song = {
            title: songInfo.title,
            url: songInfo.video_url,
        };
    
        if (!serverQueue) {
            const queueContruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true,
            };
    
            queue.set(message.guild.id, queueContruct);
    
            queueContruct.songs.push(song);
    
            try {
                var connection = await voiceChannel.join();
                queueContruct.connection = connection;
                play(message.guild, queueContruct.songs[0]);
            } catch (err) {
                console.log(err);
                queue.delete(message.guild.id);
                return message.channel.send(err);
            }
        } else {
            serverQueue.songs.push(song);
            console.log(serverQueue.songs);
            return message.channel.send(`${song.title} has been added to the queue!`);
        }
    
    }
    
    function skip(message, serverQueue) {
        if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
        if (!serverQueue) return message.channel.send('There is no song that I could skip!');
        serverQueue.connection.dispatcher.end();
    }
    
    function stop(message, serverQueue) {
        if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    }
    
    function play(guild, song) {
        const serverQueue = queue.get(guild.id);
    
        if (!song) {
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            return;
        }
    
        const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
            .on('end', () => {
                console.log('Music ended!');
                serverQueue.songs.shift();
                play(guild, serverQueue.songs[0]);
            })
            .on('error', error => {
                console.error(error);
            });
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  END SONG STUFF */

    //constantly checking stuff
    if (userID != 542423374681341977) {
        var i = 0;
        while (i < message.length) {
            if (message.substring(i, i + 11) == 'magic conch') {
                magicconch();     
                i = message.length;  
            }
            i++
        }  
    }


    //dadbot functionality
    if (userID != 542423374681341977) {
        var i = 0;
        while (i < message.length) {
            if (message.substring(0, 2) == 'im') {
                bot.sendMessage({
                to: channelID,
                message: 'Hi' + message.substring(2, message.length) + ". I'm Dadbot!"
                });     
                i = message.length;  
            }
            else if (message.substring(0, 3) == 'i\'m') {
                bot.sendMessage({
                to: channelID,
                message: 'Hi' + message.substring(3, message.length) + ". I'm Dadbot!"
                });     
                i = message.length;  
            }
            else if (message.substring(i, i + 3) == ' im') {
                bot.sendMessage({
                to: channelID,
                message: 'Hi' + message.substring(i + 3, message.length) + ". I'm Dadbot!"
                });     
                i = message.length;  
            }
            else if (message.substring(i, i + 4) == ' i\'m') {
                bot.sendMessage({
                to: channelID,
                message: 'Hi' + message.substring(i + 4, message.length) + ". I'm Dadbot!"
                });     
                i = message.length;  
            }
            i++
        }  
    }

    /*
    else if (message.substring(0, 11) == 'magic conch') {
        //var args = message.substring(0).split(' ');
        //var cmd = args[1]; 

        magicconch();
        
    }  */
       //planned features
            //dad bot
            //mom bot
        
});