# Functional (part 2)

```
:::javascript
function reduce2(val1, memo, val) {
    return memo.concat([val1 + val]);
}

function reduce1(list2, memo, val) {
    var reduced2 = list2.reduce(reduce2.bind(null, val), []);
    return memo.concat(reduced2);
}

function crossSumOfTwoArrays(list1, list2) {
    return list1.reduce(reduce1.bind(null, list2), []);
}
```

We have eliminated unused function params. This seems to be the most functional
we can get, and it's to that false.

Now, what happens if we want to do substraction instead of an addition? Will we
need to define new functions like this?

```
:::javascript
function reduce2(val1, memo, val) {
    return memo.concat([val1 + val]);
}

function reduce1(list2, memo, val) {
    var reduced2 = list2.reduce(reduce2.bind(null, val), []);
    return memo.concat(reduced2);
}

function crossDifferenceOfTwoArrays(list1, list2) {
    return list1.reduce(reduce1.bind(null, list2), []);
}
```

We can't really. First, we would be conflicting with the function names. That's
easily fixed by prefixing/suffixing all the functions with the respective
`addition` or `difference`. But we wouldn't be very DRY, would we?

Let's make the operation something we now inject.

Continue with [functional operator](10-operator.md).
