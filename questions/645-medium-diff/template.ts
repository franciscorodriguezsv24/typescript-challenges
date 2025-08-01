export type Diff<S, R> = {
    [P in keyof (S & R)
        as Exclude<P, keyof S & keyof R>
    ]:
    P extends keyof S
        ? S[P]
        : P extends keyof R
            ?R[P]
            :never
}

//This create a new type that it has the properties that are in S or R but not in both at the same time, infer that exclude the properties shared and keep the unic of every type with this respective velur.