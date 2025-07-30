export type MyReadonly<T> = { readonly [P in keyof T]: T[P]}
// this type take the object and once map this it add the readonly per atributes of the object, becoming a readonly object.

