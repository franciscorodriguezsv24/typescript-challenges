export type OptionalKeys<T extends object> = keyof {
    [
        P in keyof T as IsoptionalKey<T, P>
    ]: any
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

// so in this exercise I pass the parameter to find the key that is optional and return it, so start with the validation, when we index the object, so everey key it passed into the IsoptionalKey type to find if the key is not required, once this function return the key that pass this validation, this return the union of keys that pass the validation. 