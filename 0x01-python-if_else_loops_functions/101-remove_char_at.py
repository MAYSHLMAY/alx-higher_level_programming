#!/usr/bin/env python3
def remove_char_at(str, n):
    str_copy = ""
    if n < 0:
        return str
    else:
        for i in range(len(str)):
            if i == n:
                continue
            else:
                str_copy += str[i]
        return str_copy




   

