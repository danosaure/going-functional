# Partial

A very brief introduction to partials.

A partial is when you apply only part of function, because you don't have all
the necessary information at that moment. A partial itself is a function.

Let's imagine this scenario:

```
:::javascript
function doSomething(action, what) {
    console.log(action, what);
}
```

The normal use case would be:

    doSomething('kick', 'ball');
    doSomething('drive', 'car');
    doSomething('buy', 'car');

Now what if there is a huge sale and you want to:

    doSomething('buy', 'car');
    doSomething('buy', 'radio');
    doSomething('buy', 'drone');
    doSomething('buy', '.horse');

We are all lazy coders, so we want to reduce typing. This is not only because we
are lazy, but also because we want to reduce the chance to make an error (at
least, that's how we justify ourselves).

All we want to do is to `buy`. This is where the partial comes in handy:

    buy = doSomething.bind(null, 'buy');

Now, `buy` is a function that is the equivalent of (obviously invalid syntax):

    function doSomething('buy', what) {
        console.log('buy', what);
    }

And you can now call:

    buy('car');
    buy('radio');
    buy('drone');

and don't forget to

    buy('.horse');
