export type Permutation<T, Acc = T > =
    [T] extends [never]
    ? []
    : Acc extends Acc
        ? [Acc, ...Permutation<Exclude<T, Acc>>]
        : never


// this exercise give us the create our own permutation, using the recursive way we use it to create the tuples with the evey posible orders of that and for each element 