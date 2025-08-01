export type GetOptional<T extends object> = {
    [
        P in keyof T as IsoptionalKey<T, P>
    ]: T[P]
}


type IsoptionalKey<
    T extends object, 
    K extends keyof T = keyof T> = 
{
    [P in K]+?: T[P]
} extends {
    [P in K]: T[P]
}
? K
: never


// In this exercises, I organize the function in 2 parts, the first one we index and pass the next type so the main logic is in the IsOptionKey, that use 2 parameter T the object and K that return every key that we will compare, so, if [P in K]+? : T[P] with the value "?" so if this is equal [P in K]: T[P] so this will return K given us the key with ? if this is. false return Never
