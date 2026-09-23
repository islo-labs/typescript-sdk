/**
 * Returns a copy of object with the value at path set. If a portion of path doesn’t exist it’s
 * created. The input object is left unchanged. This is inspired by Lodash's set function, but is
 * simplified to accommodate our use case.
 * For more details, see https://lodash.com/docs/4.17.15#set.
 *
 * @param object The object to copy.
 * @param path The path of the property to set.
 * @param value The value to set.
 * @return Returns the copy.
 */
export function setObjectProperty<T extends object>(object: T, path: string, value: any): T {
    if (object == null) {
        return object;
    }

    const keys: string[] = path.split(".");
    if (keys.length === 0) {
        // Invalid path; do nothing.
        return object;
    }

    const root = copyRecord(object);
    let current: Record<string, any> = root;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (key == null) {
            // Unreachable.
            continue;
        }
        if (isPrototypeKey(key)) {
            return object;
        }
        const existing = Object.hasOwn(current, key) ? current[key] : undefined;
        if (!existing || typeof existing !== "object") {
            current[key] = {};
        } else {
            current[key] = copyRecord(existing);
        }
        current = current[key] as Record<string, any>;
    }

    const lastKey = keys[keys.length - 1];
    if (lastKey == null) {
        // Unreachable.
        return object;
    }
    if (isPrototypeKey(lastKey)) {
        return object;
    }

    current[lastKey] = value;
    return root as T;
}

function isPrototypeKey(key: string): boolean {
    return key === "__proto__" || key === "constructor" || key === "prototype";
}

function copyRecord(value: object): Record<string, any> {
    if (Array.isArray(value)) {
        return value.slice();
    }
    return { ...value };
}
