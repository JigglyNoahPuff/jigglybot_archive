# imports
import os
import discord
from discord.channel import VoiceChannel
from botInfo import info
from functions.botVars import *
from discord.ext import tasks
from discord.ext import commands
from yt_dlp import YoutubeDL as YtDL
from aiohttp import ClientSession
import requests as r
import json
from datetime import datetime as dt
import hashlib
import random
from pytz import timezone as tz

TOKEN = info['token']
intents = discord.Intents.default()
intents.members = True
client = commands.Bot(command_prefix="!", intents=intents)


# global vars


@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')


## MUSIC FUNCTIONS  ################################################################################################################################
@client.command()
async def play(ctx, *args):
    url = ' '.join(args)
    # if not client.voice_clients:     
    voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
    # Make sure that nothing else is playing
    if voice is None: 
        # print(voiceChannelName)
        if ctx.author.voice:
            voiceChannel = ctx.author.voice.channel
            await voiceChannel.connect()
        else:
            return await ctx.send('Hey dummy. Join a voice channel first.')
        voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
    song_there = os.path.isfile("videoAudio.mp3")
    if not voice.is_playing():
        try:
            if song_there:
                os.remove("videoAudio.mp3")
        except PermissionError:
            # return await ctx.send("Wait for the current playing music to end or use the 'stop' command")
            variables.queue.append(url)
            return await ctx.send(f"Song added to queue. Next song is {variables.queue[0]}")

    else:
        variables.queue.append(url)
        return await ctx.send(f"Song added to queue. Next song is {variables.queue[0]}")
        # return await ctx.send('Hey dummy. Wait till the current song/clip is done.')
        
    

    ydl_opts = {
        'format': 'bestaudio/best',
        # 'outtmpl':'%(title)s.%(ext)s',
        'outtmpl':'videoAudio.%(ext)s',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
    }
    if os.path.isfile("videoAudio.mp3"):
        os.remove("videoAudio.mp3")
        
    with YtDL(ydl_opts) as ydl:
        try:
            async with ClientSession() as session:
                async with session.get(url) as response:
                    ydl.download([url])
        except:
            ydl.download([f"ytsearch:{url}"])

    voice.play(discord.FFmpegPCMAudio("videoAudio.mp3"))

    return


@client.command()
async def leave(ctx):
    voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
    if voice is not None and voice.is_connected():
        await voice.disconnect()
    else:
        await ctx.send("The bot is not connected to a voice channel.")


@client.command()
async def pause(ctx):
    voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
    if voice is not None and voice.is_playing():
        voice.pause()
    else:
        await ctx.send("Currently no audio is playing.")


@client.command()
async def resume(ctx):
    voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
    if voice is not None and voice.is_paused():
        voice.resume()
    else:
        await ctx.send("The audio is not paused.")


@client.command()
async def stop(ctx):
    try:
        voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
        voice.stop()
    except:
        pass

####################################################################################################################################################

# Pick from a list of options
## Collin wants this to default to seperating by ", " instead of just " ".  This would also allow for multi word inputs to be grouped as one word
@client.command()
async def pick(ctx, *args):
    """Picks from a provided list of options."""
    if len(args):
        return await ctx.send(str(args[random.randint(0, len(args)-1)]))
    return await ctx.send('There\'s nothing to pick from dummy.')


@client.command()
async def clip(ctx, arg='random'):
    """Picks from a list of clips that are stored in the /clips folder."""
    voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
    clipShortcutDict = {'wam':'dedotatedWam', 'nani':'omaeWaMouShindeiru', 'itycip':'iThinkYourCockIsPoggers'}
    arg = clipShortcutDict.get(arg, arg)
    # Make sure that nothing else is playing
    if voice is None: 
        # print(voiceChannelName)
        if ctx.author.voice:
            voiceChannel = ctx.author.voice.channel
            await voiceChannel.connect()
        else:
            return await ctx.send('Hey dummy. Join a voice channel first.')
    voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
    if voice.is_playing():
        return await ctx.send('Hey dummy. Wait till the current song/clip is done.')
    
    clipList = os.listdir("./clips")
    
    if f'{arg}.mp3' in clipList:
        clipFilePath = f'./clips/{arg}.mp3'
    elif f'{arg}.wav' in clipList:
        clipFilePath = f'./clips/{arg}.wav'
    elif arg.lower() == 'random':
        clipFilePath = f'./clips/{clipList[random.randint(0, len(clipList)-1)]}'
    else:
        possibleClips = [clip for clip in clipList if clip.split('.')[0].lower().find(arg.lower()) > -1]
        if len(possibleClips) == 0:
            clipFilePath = f'./clips/thatsNotAClipCarlWheezer.wav'
            voice.play(discord.FFmpegPCMAudio(clipFilePath))
            return await ctx.send(f'There were no found matches.')
        elif len(possibleClips) == 1:
            clipFilePath = f'./clips/{possibleClips[0]}'
            voice.play(discord.FFmpegPCMAudio(clipFilePath))
            return await ctx.send(f"Playing {possibleClips[0].split()[0]}.")
        else:
            clipFilePath = f'./clips/thatsNotAClipCarlWheezer.wav'
            voice.play(discord.FFmpegPCMAudio(clipFilePath))
            return await ctx.send(f"Here are possible matches: {[clip.split('.')[0] for clip in possibleClips]}.")
    ## Check if we need to join a voice channel or if we are already in it
    if not client.voice_clients:
        voiceChannel = discord.utils.get(ctx.guild.voice_channels, name='Anechoic Salt Mine')
        await voiceChannel.connect()

    return voice.play(discord.FFmpegPCMAudio(clipFilePath))


@client.command(name='cliplist')
async def clipList(ctx):
    """Prints of the names of all the clips, which is to say prints the names of all the files in the /clips folder."""
    clipList = [clip[:clip.find('.')] for clip in os.listdir("./clips")]
    for hunned in range(0,len(clipList), 100):
        await ctx.send(str(clipList[hunned:hunned+100]))
    return 


@client.command()
async def loveTest(ctx, *args):
    # get the input string
    inputString = ctx.message.content
    # create a hash from the string
    hash_object = hashlib.md5(inputString.encode())
    # convert hased string into an int and then float percentage
    percentCompatible = float(int(hash_object.hexdigest(), base=16) % 10000) / 100
    # turn int into a string
    if percentCompatible < 10:
        await ctx.send(f'Compatibility of {percentCompatible}% detected.')
        try:
            response = r.get('https://evilinsult.com/generate_insult.php?lang=en&type=json').json()
            insult = response['insult']
        except:
            insult = 'You\'re so stupid you broke the API I was using to generate backhanded compliments.'
        return await ctx.send(insult)
    elif percentCompatible < 25:
        # backhanded compliment
        headers = {
            'Authorization': 'Basic 8CocpaF6ojrPi-gDX3U-J0lzD9qazg#_',
            'User-Agent': 'Mozilla/5.0:puffbot:1 (by /u/jigglynoah)',
        }
        try:
            response = r.get('https://www.reddit.com/r/backhandedcompliments/random.json', headers=headers)
            backhandedCompliment = response.json()[0]['data']['children'][0]['data']['title']
        except:
            backhandedCompliment = 'You\'re so stupid you broke the API I was using to generate insults.'
        await ctx.send(f'Compatibility of {percentCompatible}% detected.')
        return await ctx.send(backhandedCompliment)
    elif percentCompatible < 50:
        await ctx.send(f'Compatibility of {percentCompatible}% detected.')
        return await ctx.send(f'meh.')
    elif int(percentCompatible) == 69:
        await ctx.send(f'Compatibility of {percentCompatible}% detected.')
        return await ctx.send(f'Nice.')
    elif percentCompatible < 75:
        return await ctx.send(f'Compatibility of {percentCompatible}% detected.')
    elif percentCompatible < 90:
        return await ctx.send(f'Compatibility of {percentCompatible}% detected.')
    elif percentCompatible < 100:
        return await ctx.send(f'Compatibility of {percentCompatible}% detected.')
    elif int(percentCompatible) == 100:
        await ctx.send(f'Compatibility of {percentCompatible}% detected.')
        return await ctx.send(f'Perfection.')
    else:
        return await ctx.send(f'Compatibility of {percentCompatible}% detected.')
    

@client.command()
async def odds(ctx):
    # get the input string
    inputString = ctx.message.content
    # create a hash from the string
    hash_object = hashlib.md5(inputString.encode())
    # convert hased string into an int and then float percentage
    seedStringInt = int(hash_object.hexdigest(), base=16) % 10000

    random.seed(dt.now(tz=tz('US/Pacific')).date().year + dt.now().date().month + dt.now().date().day + seedStringInt)
    return await ctx.send(f'{random.randint(0,10000) / 100}%')


@client.command(name='gif')
async def randomGif(ctx, tag='anime'):
    giphyParams={'api_key':'anfr2ZMjJoDPZDGdCJJSxiVPOYlReUkq', 'tag':tag}
    async with ClientSession() as session:
        async with session.get('https://api.giphy.com/v1/gifs/random', params=giphyParams) as response:
            if response.status == 200:
                responseJson = await response.json()
                await ctx.send(responseJson['data']['url'])
    return

@client.command()
async def gifSearch(ctx, q='anime', limit:int=5, offset:int=0):
    giphyParams={'api_key':'anfr2ZMjJoDPZDGdCJJSxiVPOYlReUkq', 'q':q, 'limit':limit, 'offset':offset}
    async with aiohttp.ClientSession() as session:
        async with session.get('https://api.giphy.com/v1/gifs/search', params=giphyParams) as response:
            if response.status == 200:
                responseJson = await response.json()
                urls = [gif['url'] for gif in responseJson['data']]
                for url in urls:
                    await ctx.send(url)
    return 


@client.command()
async def coin(ctx):
    if random.randint(0,1):
        return await ctx.send(f'It\'s tails!')
    else:
        return await ctx.send(f'It\'s heads!')
        

@client.command()
async def roll(ctx, sides=6):
    return await ctx.send(f'You rolled a {random.randint(1,sides)}.')


@client.command(name='conch')
async def conchShell(ctx):
    with open('./bot_assets/conchShellMessages.json', 'r') as f:
        conchShellMessagesList = json.load(f)
    return await ctx.send(f'The magic conch says: \"{conchShellMessagesList[random.randint(0,len(conchShellMessagesList)-1)]}.\"')


@client.command()
async def say(ctx, *, arg):
    try:
        await ctx.message.delete()
    except:
        pass
    return await ctx.send(arg)


client.run(TOKEN)