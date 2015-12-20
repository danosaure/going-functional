# Dynamic operation

```
:::javascript
function reduce2(operation, val1, memo, val) {
    return memo.concat([operation(val1, val)]);
}

function reduce1(operation, list2, memo, val) {
    return memo.concat(list2.reduce(reduce2.bind(null, operation, val), []));
}

function addition(val1, val2) {
    return val1 + val2;
}

function crossOperationOfTwoArrays(operation, list1, list2) {
    return list1.reduce(reduce1.bind(null, operation, list2), []);
}

var crossSumOfTwoArrays = crossOperationOfTwoArrays.bind(null, addition);
```

We have defined our operation `addition()` separately. This now allows us to
define any 2 number operations we want, and that logic would be applicable to
any of them.

```
:::javascript
function substraction(val1, val2) {
    return val1 - val2;
}

var crossSubstraction = crossOperationOfTwoArrays.bind(null, substraction);
```

Not only this is now easier to inject any function we want, but we can even
split the functions into their own files.

Continue with [modularization](11-modularization/).
