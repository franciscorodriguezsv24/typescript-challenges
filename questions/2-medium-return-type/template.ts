export type MyReturnType<T> = T extends (...args: any) => infer R ? R : never

//Inside of this element we can say that the parameter extends or wait a type as a function and then this infer that return something (because this is a function that is waiting) if this is true return the returns inside the function if not, this won't return anything