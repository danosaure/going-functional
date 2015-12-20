# Closure

Closure is to have access to a variable that is outside to the function, after
the enclosing function is done running.

```
:::javascript
function makeClosure(var1) {
    return function myClosure(var2) {
        console.log(var1, var2);
    };
}
```

When we run:

    var aClosure = makeClosure('hello');

Because of the `return` statement in that function, we have the impression that
we now have something like:

```
:::javascript
var aClosure = function myClosure(var2) {
    console.log(var1, var2);
};
```

Which is almost the equivalent of:

```
:::javascript
function aClosure(var2) {
    console.log(var1, var2);
}
```

At this point, we are wondering... where is `var1` defined? It is available
because that `return` statement was enclosed in another function that available
at the moment when the `return` was run.

It is not that different from another function:

```
:::javascript
function echo(var1) {
    return var1;
}

var b = echo('hello');
```

Conceptually, we end up with:

```
:::javascript
var b = var1;
```

because of the `return` statement. Where is that `var1` defined?


Ok, it's not totally clear, so 2 points from Gryffindor!
