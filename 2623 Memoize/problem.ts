/**
 * @param {Function} fn
 */
function memoize<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> {
    const cache: { [key: string]: ReturnType<T> } = {};

    return function(...args: Parameters<T>): ReturnType<T> {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;

        return result;
    }
}

const memoizedSum = memoize(function(a: number, b: number): number {
    return a + b;
});

console.log(memoizedSum(2, 3));
console.log(memoizedSum(2, 3));
