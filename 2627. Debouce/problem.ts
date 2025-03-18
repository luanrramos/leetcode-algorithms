function debounce<T extends (...args: any[]) => void>(fn: T, t: number): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>;

    return function(...args: Parameters<T>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), t);
    };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
