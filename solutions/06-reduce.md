# Reduce

```
:::javascript
function crossSumOfTwoArrays(list1, list2) {
    var reduced1 = list1.reduce(function(memo1, val1, index1, list1) {
        var reduced2 = list2.reduce(function(memo2, val2, index2, list2) {
            return memo2.concat([val1 + val2]);
        }, []);

        return memo1.concat(reduced2);
    }, []);

    return reduced1;
}
```

This is the very basic of how to use reducers. Let's immediately apply the
callback and partial we saw earlier.

See [cleaner reduce](07-reduce-cleaner.md) solution.
