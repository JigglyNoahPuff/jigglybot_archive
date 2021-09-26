import random

def pick(msg_full):
    if msg_full.find(',') != -1:
        options = msg_full.split(',')
    else:
        options = msg_full.split(' ')
    if type(options) != list:
        return 'Error Input in pick function was not a list'
    return str(options[random.randint(0, len(options)-1)])