export function setOf<T>(...elements : T[]) : Set<T> {
    return new Set<T>(elements.filter(e => e !== null));
}

export function zip<T>(arr1 : T[], arr2 : T[]) : [T, T][] {
    if (arr1.length !== arr2.length) {
        throw new Error("Cannot zip two arrays of different length.");
    }
    return arr1.map((e, idx) => [e, arr2[idx]]);
}

/** Creates a multimap (multiple values per key), from the given set of entries. */
export function multiMap<K, V>(entries : [K, V][]) : Map<K, V[]> {
    let resultMap = new Map<K, V[]>();
    entries.forEach(e => {
        resultMap.set(e[0], [...(resultMap.get(e[0]) || []), e[1]]);
    })
    return resultMap;
}