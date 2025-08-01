export type Merge<F, S> = {
    [P in keyof F | keyof S]:
        P extends keyof S
        ? S[P]
        : P extends keyof F
            ?F[P]
            : never
}

//This excersice conbine 2 types in one, this map the keys prese in each F an S keyofif exist in S take the value of S, if not but exist F take de value F in this case that is not present any case possible, return never, 