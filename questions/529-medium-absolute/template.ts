export type Absolute<T extends number | string | bigint> = 
    `${T}` extends `-${infer U}`
    ? U 
    : `${T}`

    // this exercise we take a number an convert into a positive string, so we need to pass it into `` to convert to string and compare if T extends on `-U` if this is true return the U value, if not pass it in a positive way