export type MyOmit<T, K extends keyof any> = {
    [P in Exclude<keyof T, K>]: T[P]
}

// In this exercise we have 2 parameters se second one will be omited from the object, so we mapped the object passed as T and we say (exclude the K value from the Keys in T) and return the same value that it has.

