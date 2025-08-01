export type Capitalize<S extends string> = 
    S extends `${infer FirstLetter}${infer A}`
        ? `${Uppercase<FirstLetter>}${A}`
        : S

//This type return the first letter capitalized without usign the Capitale util, so the type receive a parameter that is a string, then we will infer that the Firstletter is a string because we didn't know what thing is returning,so we separate the first letter from the string and after that we use the method Uppercase to pass the letter to capitalize, and concat the firstletter with the rest of the string 