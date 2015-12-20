#!/bin/bash

for solution in \
        '00-smartass' \
        '01-double-for-loop' \
        '02-forEach' \
        '03-forEach-cb' \
        '04-forEach-wrapper' \
        '05-forEach-partial' \
        '06-reduce' \
        '07-reduce-cleaner' \
        '08-functional' \
        '09-functional-cleaner' \
        '10-operator' \
        '11-modularization' \
        '12-es6-transpiled' \
        ; do
    echo "solutions/${solution}...";
    time node run.js "solutions/${solution}";
done

echo "solutions/12-es6...";
time node_modules/.bin/babel-node run.js solutions/12-es6
