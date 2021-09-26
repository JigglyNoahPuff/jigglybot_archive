import tensorflow as tf

def makeShrek(input):
    shrek_step = tf.saved_model.load('../shrek_step')

    states = None
    next_char = tf.constant([input])
    result = [next_char]

    for n in range(1000):
      next_char, states = shrek_step.generate_one_step(next_char, states=states)
      result.append(next_char)

    return tf.strings.join(result)[0].numpy().decode("utf-8")