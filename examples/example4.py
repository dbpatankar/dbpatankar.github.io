#!/usr/bin/env python
# A sample python script to be parsed by sed

import numpy as np

def function1():
    """
    This is function1 which takes no input arguments 
    and prints a statement as output
    """
    print("Hello world!")
    return 0

def function2():
    """
    This is function1 which takes no input arguments 
    and prints a statement as output
    """
    print("Hello new world!")
    return 0

function2()

def addme(x, y):
    """
    This function takes two numbers as input
    and returns their sum
    """
    s = x+y
    return s

def multiply(x, y):
    """ 
    This function takes two numbers as inputs
    returns their multiplication
    """
    m = x*y
    return m

a = 3.9
b = 2.7

s = addme(a, b)
m = multiply(a, b)
print("Addition of {} and {} is {} and multiplication is {}".format(a, b, s, m))

def circleA(r):
    """
    This function takes radius of a circle as input
    and returns its area
    """
    area = np.pi * r**2
    return area

r = 3
A = circleA(r)
print("Area of circle with radius {} is :{}".format(r, A))

function1()
