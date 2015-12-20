# Going functional

This tutorial introduces functional programming by starting with a very simple
problem description.

Javascript is used as the language to demonstrate this, but the principal can be
applied to most programming languages.


## Problem to solve

Given two lists of numbers, define a function that takes 2 lists as parameters
and computes the cross sum of the numbers.

For example:

    var list1 = [11, 19, 10];
    var list2 = [11, 17, 12];
    var results = crossSumOfTwoArrays(list1, list2);

should return:

    [22, 28, 23, 30, 36, 31, 21, 27, 22];

This means that we did:

    [
        list1[0] + list2[0],
        list1[0] + list2[1],
        list1[0] + list2[2],
        list1[1] + list2[0],
        list1[1] + list2[1],
        list1[1] + list2[2],
        list1[2] + list2[0],
        list1[2] + list2[1],
        list1[2] + list2[2]
    ]

Let's begin with the [smartass](solutions/00-smartass.md).
