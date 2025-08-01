export type CamelCase<S extends string> =
  S extends `${infer Head}-${infer Tail}`
    ? Tail extends `${infer First}${infer Rest}`
      ? First extends '-'
        ? `${Head}-${CamelCase<`-${Rest}`>}`
        : First extends Lowercase<First>
          ? `${Head}${Capitalize<First>}${CamelCase<Rest>}`
          : `${Head}-${CamelCase<`${First}${Rest}`>}`
      : `${Head}-`
  : S;

  // This implementation divide the string in part to - , if detect - doble or multiple this keep the originals, jus. convert. to capitalize the letter that follow to a - if this is lowercase and keep the - and continue