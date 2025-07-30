export type TupleToObject<T extends readonly PropertyKey[]> = { [P in T[number]]: P }

// T extends from PropertyKey(this is a type of array that guarante the values in the array) then we maped and select the key with number and pass the P as a value