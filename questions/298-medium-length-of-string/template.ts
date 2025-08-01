export type LengthOfString<S extends string, Acc extends string[] = []> = 
    S extends `${infer Head}${infer Rest}`
    ? LengthOfString<Rest, [...Acc, Head]>
    : Acc['length']

    // so in this exercise we receive 1 parameter and we have an Acc = accumulate so there is where we will add every word of the string, so if S = (string passed) is igual to the destructured S that will do in a recursive way calling the same function and now passing the rest of the array, when it pass for every part of your string and return the legth