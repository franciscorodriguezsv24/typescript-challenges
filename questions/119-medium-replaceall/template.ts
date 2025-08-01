export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = 
    From extends ""
    ? S
    : S extends `${infer L}${From}${infer R}`
      ? `${L}${To}${ReplaceAll<R, From, To>}`
      : S
/*
in this excersice, we foumd a replaceAll methos that takes 3 parameters 

S = the entire string 
From =  the value that we will take to raplace
To = The replacer

so if the From value extends and empty string, this returns the S but if false, we compare if S extends of infer L, from, infer R given us the chance to infer the part that we don't know if this is true, we concat the L To and we use the recursive way if we don't found the properly value to return. 

*/
