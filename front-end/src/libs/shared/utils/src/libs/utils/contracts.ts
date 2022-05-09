/**
 * Throws an exception if obj is null or empty (expected for boolean and number)
 * @param obj - the object to evaluate
 * @param message - an optional error message
 * @throws {ReferenceError} if obj is null or undefined
 * @return the object itself.
 */
export function requireNonNull<T>(obj?: T, message?: string): T {
    if (obj == null) {
        message = message || 'requireNonNull';
        throw new ReferenceError(message);
    }
    return obj;
}

export function requireNonNullArray<T>(array: T[], message?: string): T[] {
    requireNonNull(array, message);
    array.forEach((item) => requireNonNull(item), message);
    return array;
}

export function requireNonNullString(input: string, message?: string): string {
    if (input == null || input.trim().length === 0) {
        message = message || `'require non null or empty`;
        throw new ReferenceError(message);
    }
    return input;
}

/**
 * Throws an exception if condition if false.
 * @param condition - the condition
 * @param message - an optional error message
 * @throws {Error} if condition is false
 */
export function requireTrue(condition: boolean, message?: string): void {
    if (!condition) {
        throw new Error(message);
    }
}
