export type GetReadonlyKeys<T extends object> = {
    [K in keyof T]-?: Equal<
        { [Q in K]: T[K] },
        { -readonly [Q in K]: T[K] }
    > extends true 
        ? never 
        : K
}[keyof T]

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false

// first of that is that Equal is more an algorithm to compare with more precision without depends on an extends, if both are equal this will return true, if not false, so then using GetReadOnlyKeys so index the object and then we pass a Equal function to compare the both object, the normal and the version with readOnly if the comparation is the object with readonlyis equal to the normal that returns never, but if both are diferentes this return the key and final just declare the key value to return the union of the key object.

