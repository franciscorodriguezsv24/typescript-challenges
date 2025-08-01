import { TrimLeft } from "../106-medium-trimleft/template"

type WhiteSpace = ' ' | '\n' | '\t'

type TrimRight<S extends string> = 
    S extends `${infer A}${WhiteSpace}`
    ? TrimRight<A>
    : S

export type Trim<T extends string> = TrimLeft<TrimRight<T>>

//In this exercise we did a solution that involves the previus type, so we call the trim left and pass a second type that is trum right, with the same solution but in the right side, and given us a string whitout blank spaces. 