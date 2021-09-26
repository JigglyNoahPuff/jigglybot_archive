import random
import discord
import time
import pandas as pd
import tensorflow as tf
import tensorflow.keras as keras
from datetime import datetime, timedelta
import pytz
from pytz import timezone

utc = pytz.utc
losAngeles = timezone('America/Los_Angeles')
denver = timezone('America/Denver')
yesDict = {0:['n', 'no', 'yah', 'ne', 'nope', 'false', 'False'],1:['y', 'yes', 'yah', 'ye', 'yep', 'yas', 'true', 'True']}


class Vars:
    """Function to get Variables from a stored class"""

    def __init__(self):
        self.madCheck = 0
        self.testCheck = 0

    def __str__(self):
        """Function to get Variables from a stored class as a string"""
        return 'Oh you want a string do you?'

    def setMadCheck(self, check):
        assert isinstance(check, int)
        self.madCheck = check

    def setTestCheck(self, check):
        assert isinstance(check, int)
        self.testCheck = check


variables = Vars()


def resinTimeCalc(amount):
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

    dat = pd.read_csv('resin.csv')

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
        if len(commands) < 3:
            return 'I need a resin amount.'
        name = message.author.name
        amount = int(commands[2])
        amount = int(amount)

        # Search dataframe for name column to find which index to update.
        dat.index[dat['name'] == 'Greengree'].tolist()

        i = list(dat.index[dat['name'] == name])[0]
        dat.iloc[i, dat.columns.get_loc('amount')] = amount
        dat.to_csv('resin.csv', index=False)

        return ('Okay, your resin is ' + str(amount) +
                '. It will be done at :\n' + resinTimeCalc(amount))

    else:
        options = materials + completion + daily
        return 'You should go ' + options[random.randint(0, len(options)-1)]\
            + '.'


def getPrompts():
    f = open("dwMadLib.txt", "r")
    text = f.read()

    it = 0
    num1 = text.find('_')
    prompts = []

    while num1 != -1:
        num2 = text.find('_', num1+1)
        if it % 2 == 0:
            prompts.append(text[num1+1:num2])
        num1=num2
        it += 1

    promptString = ''
    for prompt in prompts:
        promptString = promptString + prompt + ', '
    promptString = promptString[:-2]

    return promptString

def getMadLib(msg_full):
    if msg_full.find(',') != -1:
        inputs = msg_full.split(',')
    else:
        inputs = msg_full.split(' ')

    f = open("dwMadLib.txt", "r")
    text = f.read()

    it = 0
    it2 = 1
    num1 = text.find('_')
    filledText = text[:num1] + str(inputs[0])

    while num1 != -1:
        num2 = text.find('_', num1+1)
        if it % 2 == 0 and it2 < len(inputs) - 1:
            filledText += text[num2+1:text.find('_', num2+2)]
            filledText += str(inputs[it2])
            it2 += 1
        num1 = num2
        it += 1

    return filledText


def pick(msg_full):
    if msg_full.find(',') != -1:
        options = msg_full.split(',')
    else:
        options = msg_full.split(' ')
    if type(options) != list:
        return 'Error Input in pick function was not a list'
    return str(options[random.randint(0, len(options)-1)])


def makeShrek(input):
    shrek_step = tf.saved_model.load('../shrek_step')

    states = None
    next_char = tf.constant([input])
    result = [next_char]

    for n in range(1000):
      next_char, states = shrek_step.generate_one_step(next_char, states=states)
      result.append(next_char)

    return tf.strings.join(result)[0].numpy().decode("utf-8")


def spongeText(msg):
    spongeMsg = ''
    for i in range(len(msg)):
        if i % 2 == 1:
            spongeMsg += msg[i].upper()
        else:
            spongeMsg += msg[i].lower()
    return spongeMsg