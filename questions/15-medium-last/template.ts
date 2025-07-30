export type Last<T extends any[]> = T extends [...any[], infer last] ? last : never

//Last receive a parameter and then T needs to be an array, and this is posible to destructure the array and with infer we said that we will have a last element of the array is we find we will return it, if they don't find a enough elements this return nothing. 