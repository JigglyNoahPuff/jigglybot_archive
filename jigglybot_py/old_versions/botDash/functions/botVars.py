class Vars:
    """Function to get Variables from a stored class"""

    def __init__(self):
        self.madCheck = 0

    def __str__(self):
        """Function to get Variables from a stored class as a string"""
        return 'Oh you want a string do you?'

    def setMadCheck(self, check):
        assert isinstance(check, int)
        self.madCheck = check


variables = Vars()