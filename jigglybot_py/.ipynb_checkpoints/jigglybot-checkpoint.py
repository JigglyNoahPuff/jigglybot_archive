# imports
import pandas as pd
import tensorflow.keras as keras
import os
import discord
from botInfo import info
from functions_handler import *
from discord.ext import tasks
from discord.ext import commands

TOKEN = info['token']
client = discord.Client()


# global vars


@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')
    resin_check_function.start()

@client.event
async def on_message(message):
    madCheck = variables.madCheck

    if message.author == client.user:
        return

    command = message.content.lower().split(' ')[0]
    msg_full = message.content[len(command)+1:]
    msg = message.content.lower().split(' ')
    msg.remove(command)
    # Commands that do not need an input
    if command == 'test':
        await message.channel.send('This is a test, ' + message.author.name +
                                   ' is a weeb')

    elif command == 'madlib':
        if madCheck == 0:
            await message.channel.send('I need the following: ' + getPrompts())
            variables.setMadCheck(1)
        else:
            variables.setMadCheck(0)
            if len(msg) == len(getPrompts().split(', ')):
                await message.channel.send(getMadLib(msg_full))

            elif msg_full.find('cancel') != -1:
                await message.channel.send('Okay no madlibs for now.')
            else:
                await message.channel.send('Wrong size of inputs!')

    elif command == 'genshin':
        await message.channel.send(genshin(message))

    elif len(msg_full) < 1:
        return

    # Commands that need an input
    elif command == 'pick':
        await message.channel.send(pick(msg_full))

    elif command == 'shrek':
        await message.channel.send(makeShrek(msg_full))

    elif command.find('sponge') != -1:
        await message.channel.send(spongeText(msg_full))


@tasks.loop(seconds = 480)
async def resin_check_function():
    """Increment resin amount every 8 minutes"""
    dat = pd.read_csv('resin.csv')
    # Increment resin amount
    dat.amount = dat.amount.apply(lambda x: x + 1 if x < 160 else x)
    # Send message if amount >= resinNotif
    for i in range(len(dat)):
        if dat.amount[i] == 160 and dat.fullNotif[i] and False:
            guild = await client.fetch_guild(221085790925488129)
            member = await guild.fetch_member(dat.userID[i])
            await member.send('Your resin is ready. You now have ' + str(dat.amount[i]) + ' resin.')
            print(member.name + ' was notified.')
            dat.iloc[i, dat.columns.get_loc('resinNotif')] = 161
        elif dat.amount[i] >= dat.resinNotif[i] and dat.notifs[i]:
            guild = await client.fetch_guild(221085790925488129)
            member = await guild.fetch_member(dat.userID[i])
            await member.send('Your resin is ready. You now have ' + str(dat.amount[i]) + ' resin.')
            print(member.name + ' was notified.')
            dat.iloc[i, dat.columns.get_loc('resinNotif')] = 161

    dat.to_csv('resin.csv', index=False)
    pass

client.run(TOKEN)