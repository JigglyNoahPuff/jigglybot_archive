# imports
import os
import discord
from botInfo import info
from functions.botVars import *
from discord.ext import tasks
from discord.ext import commands
import youtube_dl

import random

TOKEN = info['token']
client = commands.Bot(command_prefix="!")


# global vars


@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')


## MUSIC FUNCTIONS  ################################################################################################################################
@client.command()
async def play(ctx, url : str):
    if not client.voice_clients:
        voiceChannel = discord.utils.get(ctx.guild.voice_channels, name='Anechoic Salt Mine')
        await voiceChannel.connect()
    voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
    song_there = os.path.isfile("song.mp3")
    if not voice.is_playing():
        try:
            if song_there:
                os.remove("song.mp3")
        except PermissionError:
            return await ctx.send("Wait for the current playing music to end or use the 'stop' command")
    else:
        return await ctx.send('Hey dummy. Wait till the current song/clip is done.')
        
    

    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
    }
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])
    for file in os.listdir("./"):
        if file.endswith(".mp3"):
            os.rename(file, "song.mp3")
    voice.play(discord.FFmpegPCMAudio("song.mp3"))
    return

@client.command()
async def leave(ctx):
    voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
    if voice.is_connected():
        await voice.disconnect()
    else:
        await ctx.send("The bot is not connected to a voice channel.")


@client.command()
async def pause(ctx):
    voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
    if voice.is_playing():
        voice.pause()
    else:
        await ctx.send("Currently no audio is playing.")


@client.command()
async def resume(ctx):
    voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
    if voice.is_paused():
        voice.resume()
    else:
        await ctx.send("The audio is not paused.")


@client.command()
async def stop(ctx):
    voice = discord.utils.get(client.voice_clients, guild=ctx.guild)
    voice.stop()

####################################################################################################################################################

# Pick from a list of options
## Collin wants this to default to seprating by ", " instead of just " ".  This would also allow for multi word inputs to be grouped as one word
@client.command()
async def pick(ctx, *args):
    if len(args):
        return await ctx.send(str(args[random.randint(0, len(args)-1)]))
    return await ctx.send('There\'s nothing to pick from dummy.')


@client.command()
async def clip(ctx, arg):
    # Make sure that nothing else is playing
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
        clipFilePath = f'./clips/thatsNotAClipCarlWheezer.wav'

    # Check if we need to join a voice channel or if we are already in it
    if not client.voice_clients:
        voiceChannel = discord.utils.get(ctx.guild.voice_channels, name='Anechoic Salt Mine')
        await voiceChannel.connect()

    voice.play(discord.FFmpegPCMAudio(clipFilePath), after=variables.switchIsPlaying())
    return


@client.command()
async def clipList(ctx):
    clipList = [clip[:clip.find('.')] for clip in os.listdir("./clips")]
    return await ctx.send(str(clipList))

client.run(TOKEN)