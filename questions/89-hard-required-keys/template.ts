export type RequiredKeys<T> = keyof {
    [
        P in keyof T as T[P] extends Required<T>[P]
        ? P
        : never
    ]: any
}

// this exercise return the keys, of an object so we say, the keyof this object, (this that I'll return) so I index the object and compare if the key is required, this will return a P but if not this won't return nothing. 