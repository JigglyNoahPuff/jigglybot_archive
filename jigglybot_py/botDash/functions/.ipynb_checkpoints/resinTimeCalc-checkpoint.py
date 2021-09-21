    def resinTimeCalc(amount):
        timeLeft = (160-amount) * 8
        timeFinished = datetime.now() + timedelta(minutes=timeLeft)
    return timeFinished
