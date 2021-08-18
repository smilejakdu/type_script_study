export {};

type IsStringType<T> = T extends string ? "yes" : "no";
type T1 = IsStringType<string | number>; // type T1 = "yes" | "no"
type T2 = IsStringType<string> | IsStringType<number>; // type T2 = "yes" | "no"

type Array2<T> = Array<T>; // type T2 = "yes" | "no"
type T3 = Array2<string | number>;
