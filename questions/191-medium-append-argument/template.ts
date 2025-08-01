type Function = (...args: any[]) => unknown

export type AppendArgument<Fn extends Function, A> = (...args: [...Parameters<Fn>, A]) => ReturnType<Fn>

// in this exercise the method AppendArgument recibe 2 parameters Fn = the current parameter and A the type of param that will add into the Fn so how it works, well so we define that only function are able to work on it, then we say that whe current funciont, so, define de args, and into the array we said, "used the same parameters that I passed you and Add A at the end of the array. and use ReturnType to return the value of the currect function"