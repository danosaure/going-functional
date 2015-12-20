# Double for loop

```
:::javascript
function crossSumOfTwoArrays(list1, list2) {
    var i;
    var j;
    var solution = [];
    for (i = 0; i < list1.length; i++) {
        for (j = 0; j < list2.length; j++) {
            solution.push(list1[i] + list2[j]);
        }
    }
    return solution;
}
```

This is the very basic that clearly represents what the example was showing:

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

This approach should work in any language.


Let's take advantage of javascript's [forEach](02-forEach.md).
