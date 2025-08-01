export type Flatten<T> = 
T extends []
? []
: T extends [infer Head, ...infer Rest]
    ?[...Flatten<Head>, ...Flatten<Rest>]
    : [T]

// in this exercise this work in a recursive way, because I pass the array as parameter and validate the T if this extends as an empty array this will return and empty array but if not, T validates if extends of destructed array if this is true, this will use recursive way to destruct the entire array and return a unique array