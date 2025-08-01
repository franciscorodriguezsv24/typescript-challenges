export type Replace<
  S extends string,
  From extends string,
  To extends string
> = 
  From extends ""
  ? S
  : S extends `${From}${infer T}`
    ? `${To}${T}`
    : S extends `${infer Head}${infer T}`
      ?`${Head}${Replace<T, From, To>}`
      : S

// Now we have a implementation related with make a replace an element to another that we pass S, From, To, so if from is empty we will return the S if not we will start with the validation, if S extends From so infer the rest os the string, if this is true, we will pass to cancat the To with T if this not extends from S will pass to the second validation that is S extends of infer the first part off the string and the rest are equal to S this will return the Head and se recurvise way to try again, untill recibe the correct answer but if this is false return S