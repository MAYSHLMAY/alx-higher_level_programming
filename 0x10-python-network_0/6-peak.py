#!/usr/bin/python3
"""Finds a peak in a list of unsorted integers"""


def find_peak(list_of_integers):
    """Finds a peak in list_of_integers"""
    if (list_of_integers == []):
        return None
    maxx = list_of_integers[0]
    for i in list_of_integers:
        if i > maxx:
            maxx = i
    return maxx
