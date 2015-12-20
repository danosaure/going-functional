# In ES6

This is just a teaser for those of you who haven't used ES6 yet.

Most browsers are still unable to run ES6 code natively. The code needs to be
transpiled into ES5 for the browser.

We can run

    npm run transpileES6

that will transpile code under `solutions/12-es6` into
`solutions/12-es6-transpiled`.

Because the code is not compatible with the `node`, we need to use an
auto-transpiler to run it. To run the test like the other solutions, we must
use:

    ./node_modules/.bin/babel-node run.js solutions/12-es6

As we may notice, even with this little code, it takes much more time to run.

    ./time-all.sh

Will display time that it takes to run all of them. In average, the code in ES5
runs in 0.135s, while the one in ES6 runs in 3.7s, due to loading all the
babel's code.
