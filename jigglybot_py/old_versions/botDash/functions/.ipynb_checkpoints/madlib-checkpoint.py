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