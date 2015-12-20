import reduce2  from './reduce2';

export default (operation, list2, memo, val) => memo.concat(list2.reduce(reduce2.bind(null, operation, val), []));
