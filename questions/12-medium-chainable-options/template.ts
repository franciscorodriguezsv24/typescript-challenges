export type Chainable<R = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<R & Record<K, V>>
  get(): R
}

//Particular in this type, in my own case I've never heard anything related with chainable this kind of builder so, the parameter start as a empty object then we will pass the option and defined the tipe of this, that the first value, everything will be string and the second one will be a any kind of data, then asign this into the paramas that options receive, and then we use the same function in a recursive way, bring us the chance if the value of the first option is an nested objects we can use it and concat this to prevent in the future, and finally get will return the entire result.

