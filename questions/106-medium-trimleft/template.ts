type WhiteSpace = ' ' | '\n' | '\t'

export type TrimLeft<S extends string> = 
    S extends `${WhiteSpace}${infer B}`
    ? TrimLeft<B>
    : S

    // this is one of the chakllenge that probably impacted because the power of infer is awesome, but explaining my code, I start with the type of possible space or somrething liket that, then we say, that que S type paremeter will receive a string, and only string, then we start with validating if, S extends and here is the key, `${WhiteSpace}${infer B}` this destructure the string and analize if the first character in related with whitespace type so if this is true, eliminate the character and then pass again, if for example the next value is a empty string or a diferent character in a recursive way, and if they don't found a whitespace this procces will end and return the string mutated.
    