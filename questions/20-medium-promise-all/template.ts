type Awaited<T> = 
    T extends PromiseLike<infer R>
    ? Awaited<R>
    : T

export declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
    [P in keyof T ]: Awaited<T[P]>
}>

//In this exercise we found the implementation for the case, we start with a generic that returns unwraps the values of nested promise, and it infers if they will receive a nested to apply a recursive way, after that the function receive a type that could be an unknow array or tupple, the parameter only receive array or tuple inmutable with the same types, and the return value will be a object with de keyword and withe the previous generics will return the propetly answer.

