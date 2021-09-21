import pandas as pd

def save():
    # Load in the data
    dat = pd.read_csv('resin.csv')
    # Data to be saved

    # Actually saving the data
    dat.to_csv('resin.csv', index=False)
    return