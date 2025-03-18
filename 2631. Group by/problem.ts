declare global {
    interface Array<T> {
        groupBy<K extends keyof any>(fn: (item: T) => K): Record<K, T[]>;
    }
}

Array.prototype.groupBy = function<T, K extends keyof any>(this: T[], fn: (item: T) => K): Record<K, T[]> {
    return this.reduce((grouped, item) => {
        const key = fn(item);

        if (!grouped[key]) {
            grouped[key] = [];
        }

        grouped[key].push(item);

        return grouped;
    }, {} as Record<K, T[]>);
};

export {};
