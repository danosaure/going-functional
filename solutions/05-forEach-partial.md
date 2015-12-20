# Partial

```
:::javascript
function crossSumOfTwoArrays(list1, list2) {
    var solution = [];

    function forEach2(val1, val2, index2, list2) {
        solution.push(val1 + val2);
    }

    function forEach1(val1, index1, list1) {
        list2.forEach(forEach2.bind(null, val1));
    }

    list1.forEach(forEach1);
    return solution;
}
```

Check [What is a partial](../concepts/partial.md) for a very brief
introduction to partials.

We eliminated that embedded function definition.

Since we are applying some logic and want a return value, a better approach
would be to use [reduce](06-reduce.md).
