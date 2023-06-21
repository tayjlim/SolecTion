def no_special_chars (field):
    user = field
    specialchars = '!@#$%^&*()-=_+,./<>?;}\[{]'
    for char in specialchars:
        if char in user:
            return('No Special characters allowed!')

print(no_special_chars('sw@#!@#!@#'))
