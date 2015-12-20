# forEach

```
:::javascript
function crossSumOfTwoArrays(list1, list2) {
    var solution = [];

    list1.forEach(function(val1, index1, list1) {
        list2.forEach(function(val2, index2, list2) {
            solution.push(val1 + val2);
        });
    });
    return solution;
}
```

Using this approach, we are eliminating those "global" variables `i` and `j`.

We all hate indentations, so let's use
[external functions callbacks](03-forEach-cb.md).
