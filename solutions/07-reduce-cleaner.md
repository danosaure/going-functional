# Reduce with callback and partial

```
:::javascript
function crossSumOfTwoArrays(list1, list2) {
    function reduce2(val1, memo2, val2, index2, list2) {
        return memo2.concat([val1 + val2]);
    }

    function reduce1(memo1, val1, index1, list1) {
        var reduced2 = list2.reduce(reduce2.bind(null, val1), []);
        return memo1.concat(reduced2);
    }

    return list1.reduce(reduce1, []);
}
```

This is a cleaner solution that is equivalent of the one we had with the
[forEach](05-forEach-partial.md).

Let's take a step further by eliminating any embedded functions and be a little
bit more [functional](08-functional.md).
