export type DeepReadonly<T> = 
    T extends (...args: any[]) => any ? T :
    T extends readonly any[] ? { readonly [K in keyof T]: DeepReadonly<T[K]> } :
    T extends object ? { readonly [K in keyof T]: DeepReadonly<T[K]> } :
    T;

// In this exercise I used a recursive way so in this case, if the type recive a function ad a parameter the type will return a T, that will be the same value that the parameter pass, now, if it doesn't a function this will pass to the second validation, this validate if this is an array, or tuple, if this will mapped in a recursive way but if this is false, it will pass to the third validation that validate if the T parameter is an object this will map in a recursive way until every elemente pass into it, but if everything is false, this will return the parameter. 