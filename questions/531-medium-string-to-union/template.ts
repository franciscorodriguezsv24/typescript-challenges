export type StringToUnion<T extends string> = 
    T extends `${infer Head}${infer Rest}`
        ? Head | StringToUnion<Rest>
        : never

// in this StringToUnion recibe a string property, when this T extends of the infer that is equal to `${infer Head}${infer Rest}` is true so this return a head whit | and repeat as a recursive way when this recursive end return the entire union.

