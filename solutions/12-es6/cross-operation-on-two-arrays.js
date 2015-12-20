import reduce1 from './reduce1';

export default (operation, list1, list2) => list1.reduce(reduce1.bind(null, operation, list2), []);
