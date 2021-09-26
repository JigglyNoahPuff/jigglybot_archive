"""Functions that involve Genshin Impact."""
import pandas as pd
import random
from datetime import datetime, timedelta


import pytz
from pytz import timezone

utc = pytz.utc
losAngeles = timezone('America/Los_Angeles')
denver = timezone('America/Denver')

yesDict = {0: ['n', 'no', 'yah', 'ne', 'nope', 'false', 'False'],
           1: ['y', 'yes', 'yah', 'ye', 'yep', 'yas', 'true', 'True'],
           2: ['n', 'no', 'yah', 'ne', 'nope', 'false', 'False',
               'y', 'yes', 'yah', 'ye', 'yep', 'yas', 'true', 'True']}

materials = ['collect plants', 'collect meats of creatures',
             'collect living things', 'mine minerals', 'make some mora',
             'obtain monster drops']
completion = ['do achievements', 'find oculi and agates',
              'discover teleporters', 'discover statues',
              'open world chests', 'challenge the Spiral Abyss']
daily = ['do commissions', 'complete domains', 'fight bosses',
         'do blossoms', 'hunt Wei']
weekly = ['challenge the Spiral Staircase', 'challenge the big wolf boi',
          'challenge da big bad Dvalin',
          'challenge the Golden House Challenge']
elements = ['hydro', 'pyro', 'geo', 'anemo', 'electro', 'cryo', 'dendro']
options = ['materials', 'completion', 'daily', 'elements', 'options']


dat = pd.read_csv('resin.csv')


def resinTimeCalc(amount):
    """Calculate time until resin is at 160."""
    timeLeft = (160 - amount) * 8
    timeFinishedUTC = datetime.now(utc) + timedelta(minutes=timeLeft)
    timeFinishedLosAngeles = (datetime.now(losAngeles) +
                              timedelta(minutes=timeLeft))
    timeFinishedDenver = datetime.now(denver) + timedelta(minutes=timeLeft)
    timeFinished = 'Los Angeles: ' + str(timeFinishedLosAngeles) +\
        '\n' + 'Denver: ' + str(timeFinishedDenver) + '\n' +\
        'UTC: ' + str(timeFinishedUTC) + '\n'
    resinAmount = 'You currently have ' + str(amount) + ' resin.'
    return timeFinished + resinAmount


def genshin(message='none'):
    """Input category to pick from or leave blank for all."""
    if not isinstance(message, str):
        try:
            commands = message.content.lower().split(' ')
            msg = message.content[len(commands[0])+1:].lower()
        except ValueError:
            print(ValueError)
            options = materials + completion + daily
            return ('You should go ' +
                    options[random.randint(0, len(options)-1)] + '.')
    else:
        msg = 'none'

    if msg.find('mat') != -1:
        return 'You should go ' + materials[random.randint(0, len(materials)-1)
                                            ] + '.'
    elif msg.find('com') != -1:
        return 'You should go ' + completion[random.randint(0, len(completion)
                                             - 1)] + '.'
    elif msg.find('da') != -1:
        return 'You should go ' + daily[random.randint(0, len(daily)-1)] + '.'
    elif msg.find('wee') != -1:
        return 'You should go ' + weekly[random.randint(0, len(weekly)-1)] \
               + '.'
    elif msg.find('ele') != -1:
        return 'The element choice is ' + elements[random.randint(0,
                                                   len(elements)-1)] + '.'
    elif msg.find('opt') != -1:
        return 'You can pick any of the following: ' + str(options) +\
              ' or you can leave it blank for a random from the total set of \
              the first three.'

    elif msg.find('resintime') != -1:
        i = list(dat.index[dat['name'] == message.author.name])[0]
        amount = int(dat.iloc[i, dat.columns.get_loc('amount')])
        return resinTimeCalc(amount)

    elif msg.find('resin') != -1:
        # Error check for no third argument
        if len(commands) < 3 or not commands[2].isdigit():
            return 'I need a resin amount.'
        return resinHandle(message, commands)

    else:
        options = materials + completion + daily
        return ('You should go ' +
                options[random.randint(0, len(options)-1)] + '.')


def resinHandle(message, commands):
    """Update resin amount and notification settings."""
    # Get info from input
    name = message.author.name
    amount = resinCap(int(commands[2]))

    # Search dataframe for name column to find which index to update.
    i = list(dat.index[dat['name'] == name])[0]
    if len(commands) == 4:
        # Check if 4th command is digit or boolean
        if commands[3].isdigit():
            dat.iloc[i, dat.columns.get_loc('resinNotif')] = int(commands[3])
        elif commands[3] in yesDict[2]:
            dat.iloc[i, dat.columns.get_loc('notifs')]\
                = commands[3] in yesDict[1]
    elif len(commands) == 5:
        # Check if 4th command is digit or boolean
        if commands[3].isdigit():
            dat.iloc[i, dat.columns.get_loc('resinNotif')] = int(commands[3])
            if commands[4] in yesDict[2]:
                dat.iloc[i, dat.columns.get_loc('notifs')]\
                    = commands[4] in yesDict[1]
        elif commands[3] in yesDict[2]:
            dat.iloc[i, dat.columns.get_loc('notifs')]\
                = commands[3] in yesDict[1]
            if commands[4].isdigit():
                dat.iloc[i, dat.columns.get_loc('resinNotif')] = int(commands[4])

    elif len(commands) > 5:
        # Check if 4th command is digit or boolean
        if commands[3].isdigit():
            dat.iloc[i, dat.columns.get_loc('resinNotif')] = int(commands[3])
            if commands[4] in yesDict[2]:
                dat.iloc[i, dat.columns.get_loc('notifs')]\
                    = commands[4] in yesDict[1]
        elif commands[3] in yesDict[2]:
            dat.iloc[i, dat.columns.get_loc('notifs')]\
                = commands[3] in yesDict[1]
            if commands[4].isdigit():
                dat.iloc[i, dat.columns.get_loc('resinNotif')] = int(commands[4])
        if commands[5] in yesDict[3]:
            dat.iloc[i, dat.columns.get_loc('fullNotif')] = commands[5] in yesDict[1]

    dat.iloc[i, dat.columns.get_loc('timeDone')] = datetime.now(utc) +\
        timedelta(minutes=((160 - amount) * 8))
    dat.iloc[i, dat.columns.get_loc('amount')] = amount
    print(dat.iloc[i])
    dat.to_csv('resin.csv', index=False)
    return ('Okay, your resin will be done at :\n' + resinTimeCalc(amount))


def resinCap(amount):
    if amount < 0:
        amount = 0
    if amount > 160:
        amount = 160
    return amount

# More stuff in each list if needed
# Maybe more subgroups
# Resin Function (in process of making more rebust)