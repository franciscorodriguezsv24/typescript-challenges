export type Includes<T extends readonly any[], U> = 
T extends [infer First, ...infer Rest] 
? Equal<First, U> extends true 
? true : Includes<Rest, U> : false

//Inside of this exercise we will find that the first parameter just will read and this could be an array with any type of elements inside, then the second parameter is the value that we will search into the array, so first we use infer + First and infer + Rest to destructure the array, this give us the chance to compare the values inside of it, if the first elements is equal to U this returns a true but if don't this repeat the process using recursion to validate every value untill return a false if this won't find it into the array this return false//