#!/usr/bin/python3
def uppercase(str):
    for i in range(len(str)):
        ascii_value = ord(str[i])
        if ascii_value >= 97 and ascii_value <= 122:
            ascii_value = ascii_value - 32
        print(f"{chr(ascii_value)}", end="")
    print()