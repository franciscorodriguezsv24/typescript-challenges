export type Pop<T extends any[]> = T extends [...infer rest, unknown] ? rest : [];

//This method destructure de array pased and with the infers, just delet the last one of the orignal array and now we can return the array without the last digit 