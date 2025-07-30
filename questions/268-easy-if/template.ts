export type If<C extends boolean, T, F> = C extends true ? T : F

//First of all we verify if C is a boolean because we want return something only to boolean parameter, and then we compare if C is equal to True, if yes we'll return a T value, if not this will return a F value.