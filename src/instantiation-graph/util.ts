export function setOf<T>(...elements : T[]) : Set<T> {
    return new Set<T>(elements.filter(e => e !== null));
}