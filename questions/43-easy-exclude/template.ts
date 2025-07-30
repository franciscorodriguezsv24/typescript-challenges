export type MyExclude<T, U> = T extends U ? never : T

//In this case we made a validation where if T is equal to U so you will return never, that in this case is most like delete or omit this value from the return, but if T is not equal to U this will return the main parameter, in this case T

