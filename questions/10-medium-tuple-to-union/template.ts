export type TupleToUnion<T extends any[]> = T[number] 

//In this exercise I used a type index T[number] that works to extract the element of the array, passed into a union.