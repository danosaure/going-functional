export default (operation, val1, memo, val)  => memo.concat([operation(val1, val)]);
