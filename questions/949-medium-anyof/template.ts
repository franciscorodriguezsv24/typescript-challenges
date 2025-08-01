type Falsy = | { [key: string]: never } | 0 | '' | false | null | undefined | []

export type AnyOf<T extends unknown[]> = 
    T extends [infer Head, ...infer Tail]
    ? Head extends Falsy 
        ?AnyOf<Tail>
        : true
    : false
// this index an array of type T and return true if almost one of the elements not is falsy and if this will be false if everything are. 