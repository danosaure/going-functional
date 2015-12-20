function reduce2(operation, val1, memo, val) {
    return memo.concat([operation(val1, val)]);
}

module.exports = reduce2;
