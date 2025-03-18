class TimeLimitedCache {
    private cache: { [key: number]: { value: number; timer: NodeJS.Timeout } };

    constructor() {
        this.cache = {};
    }

    set(key: number, value: number, duration: number): boolean {
        if (this.cache[key] && this.cache[key].timer) {
            clearTimeout(this.cache[key].timer);
            this.cache[key].value = value;
            this.cache[key].timer = setTimeout(() => {
                this.remove(key);
            }, duration);
            return true;
        } else {
            this.cache[key] = {
                value: value,
                timer: setTimeout(() => {
                    this.remove(key);
                }, duration)
            };
            return false;
        }
    }

    get(key: number): number {
        if (this.cache[key] && this.cache[key].timer) {
            return this.cache[key].value;
        } else {
            return -1;
        }
    }

    count(): number {
        let count = 0;
        for (const key in this.cache) {
            if (this.cache[key].timer) {
                count++;
            }
        }
        return count;
    }

    private remove(key: number): void {
        delete this.cache[key];
    }
}
