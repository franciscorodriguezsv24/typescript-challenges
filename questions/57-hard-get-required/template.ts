export type GetRequired<T> = {
    [
        P in keyof T as T[P] extends Required<T>[P]
        ? P
        : never
    ]: T[P];
}

//This exercise idex the object to find the none required elements and deleted from the object, so P index T as T[P] extends the required values if true, return the key, if not never "like delete the element" and the T continue with the proper values.
