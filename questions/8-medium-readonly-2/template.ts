export type MyReadonly2<T, K extends keyof T = keyof T > = {
    readonly [P in K]: T[P];
} & {
    [P in keyof T as P extends K ? never : P]: T[P]
}

// in this exercise I applied significant feature that probably where a little bit difficult to figure it out, but I will explain how this work, we have 2 parameters T and K, this is very interesting because K extends the keys of T and this get set the value as the key of T given us the chance if we dont receive a K parameter the entire object will pass to readonly, the part that probably is the entire logic is in the second one, because in this case this make a validation if the key of T is equal to K parameter, this will return nothing but if them are diferents this will return the P value, and finally use a & as a interseptor, and this concat both part to make one finally object
