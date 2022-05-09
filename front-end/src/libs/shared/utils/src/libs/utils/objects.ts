import * as dequal from 'fast-deep-equal';

export function deepCopy(obj: any): any {
    if (obj) {
        if (Array.isArray(obj)) {
            return obj.map(e => deepCopy(e));
        }

        if (typeof(obj) === 'object') {
            if (obj instanceof Date) {
                return obj;
            }
            return Object.keys(obj).reduce((acc, k) => {
                const tmp = deepCopy(obj[k]);
                if (tmp != null) {
                    acc[k] = tmp;
                }
                return acc;
            }, {} as any);
        }
    }
    return obj;
}

export function deepEqual(a: any, b: any) {
    return dequal(a, b);
}
