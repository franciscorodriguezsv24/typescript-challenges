export type AppendToObject<T, U extends PropertyKey, V> = 
   { [P in keyof T | U]: (T & Record<U, V>)[P] }

/* this exercise is to add a key and value into a object so we have 
T = current object
U = key
V = value

so we have to map the entire object an add the jey value, U to mapped then and the value we say, intersect the value in T and add the record of U key to V value, and then this return the object with the new addition
*/