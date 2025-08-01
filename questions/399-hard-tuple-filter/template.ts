export type FilterOut<T extends any[], F> = 

    T extends [infer Head, ...infer Tail]
    ?[Head] extends [F]
        ? FilterOut<Tail, F>
        : [Head, ...FilterOut<Tail, F>]
    : []

// In this code, The type receive 2 parameters the array and the object this type has a behavior as a filter, so the array estends on the array destructured if this is true, it compare the head with the F if this is true, this omit and pass to the next letter, if this is false add this in the new array.