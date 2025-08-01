export type LookUp<U extends { type: PropertyKey}, T extends PropertyKey> = {
    [K in T]: U extends { type: T}
    ? U
    : never
}[T]

// in this exercise we will receive a type parameter that inside of this, are two or more types as a union and then we have the second parameter that is the type that we will search into the types, then we will unwrap the types and we will validate the type inside of this if the T vzlue es equal to U value type this return a correct type if not this return nothing. 
