class ArrayWrapper {
    private array: number[];

    constructor(nums: number[]) {
        this.array = nums;
    }

    valueOf(): number {
        return this.array.reduce((pre, cur) => pre + cur, 0);
    }

    toString(): string {
        return JSON.stringify(this.array);
    }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * console.log(obj1 + obj2); // 10
 * console.log(String(obj1)); // "[1,2]"
 * console.log(String(obj2)); // "[3,4]"
 */
