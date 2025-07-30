export type First<T extends any[]> = T extends [infer head, ...any[]] ? head : never

// This method extend from any type to give the chance to implementen any tipe inside the array then this array extends and we use the infer to find the head, and if they find the head will return the head if not this will return never. 