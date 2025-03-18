/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = <T>(arr: T[], fn: (item: T) => number): T[] => {
    return arr.sort((a, b) => fn(a) - fn(b));
};
