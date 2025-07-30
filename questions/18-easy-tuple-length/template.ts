export type Length<T extends readonly any[]> = T['length']

//in this case we are saying T extends as a readonly (without mutation) and we will return a lenght of the array, searching in internet I found that if you use array['key'] you can access into this, in this case we asked for the length of the array.

