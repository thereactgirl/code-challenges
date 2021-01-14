words = open('sowpods.txt').read().split()


print(len(words))
"""
Word Solver
Part 1
Write some code that:
Takes a 7-character string (either as a command-line argument or as a parameter)
Prints out the words that can be made from the characters, along with their Scrabble scores, one word per line, in descending score order
f = open('words.txt', 'r')
Store content in a variable:

content = f.read()
Example input and output:

$ python scrabble_cheater.py SPCQEIU  # Use any language you like.
17 piques
17 equips
16 quips
16 pique
16 equip
15 quip

Understand 
    first function
    input :  string SPCQEIU

    output : list tuples 
            [(17, piques), (17 equips)]

    input :  string TCA

    output : list tuples 
            [(?, cat), (?), act]
Plan
      loop through word list 
            for ever word 
                valid = true
                while true 
                    loop through each letter
                        if that letter is in the input string
                            take it away from input string 
                        if its not in the input string
                            value = false



        
Execute
Reflect
"""
rack = 'tca'


def get_words(rack):
    valid_words = []
    # loop through word list
    # for ever word
    for word in words:
        rack_list = [char.upper() for char in rack]
        #     #     valid = true
        valid = True
    # #     while true
        #         #         loop through each letter
        for letter in word:
            if letter in rack_list:
                #             if that letter is in the input string
                #                 take it away from input string
                #             if its not in the input string
                rack_list.remove(letter)
                #   value = false
            else:
                valid = False
        if valid:
            valid_words.append(word)
    return valid_words

    # scores = {
    #     "a": 1,
    #     "b": 3,
    #     "c": 3,
    #     "d": 2,
    #     "e": 1,
    #     "f": 4,
    #     "g": 2,
    #     "h": 4,
    #     "i": 1,
    #     "j": 8,
    #     "k": 5,
    #     "l": 1,
    #     "m": 3,
    #     "n": 1,
    #     "o": 1,
    #     "p": 3,
    #     "q": 10,
    #     "r": 1,
    #     "s": 1,
    #     "t": 1,
    #     "u": 1,
    #     "v": 4,
    #     "w": 4,
    #     "x": 8,
    #     "y": 4,
    #     "z": 10
    # }
print(get_words(rack))
