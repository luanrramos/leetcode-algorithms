type Callback = (...args: any[]) => any;

class EventEmitter {
    private events: Map<string, Callback[]>;

    constructor() {
        this.events = new Map();
    }

    subscribe(event: string, cb: Callback) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }

        const listeners = this.events.get(event)!;
        listeners.push(cb);

        return {
            unsubscribe: () => {
                const index = listeners.indexOf(cb);
                if (index !== -1) {
                    listeners.splice(index, 1);
                }
            }
        };
    }

    emit(event: string, args: any[] = []): any[] {
        if (!this.events.has(event)) {
            return [];
        }

        const listeners = this.events.get(event)!;
        const results: any[] = [];

        for (const listener of listeners) {
            results.push(listener(...args));
        }

        return results;
    }
}
