# forEach with callbacks and wrapper.

```
:::javascript
function crossSumOfTwoArrays(list1, list2) {
    var solution = [];

    function forEach2(val1) {
        return function(val2, index2, list2) {
            solution.push(val1 + val2);
        };
    }

    function forEach1(val1, index1, list1) {
        list2.forEach(forEach2(val1));
    }

    list1.forEach(forEach1);
    return solution;
}
```

We took `forEach2` outside of `forEach1`, so 2 points for Gryffindor!

Because `.forEach()` expects a function as an argument, `forEach2()` returns
that function so that `list1.forEach()` can use it. This allow `val1` to be
available inside of `forEach2()` by [closure](../concepts/closure.md).

But as we see, we still have an embedded function. This can be avoided by using
[partials](05-forEach-partial.md).
