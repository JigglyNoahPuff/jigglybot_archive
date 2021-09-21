def spongeText(msg):
    spongeMsg = ''
    for i in range(len(msg)):
        if i % 2 == 1:
            spongeMsg += msg[i].upper()
        else:
            spongeMsg += msg[i].lower()
    return spongeMsg