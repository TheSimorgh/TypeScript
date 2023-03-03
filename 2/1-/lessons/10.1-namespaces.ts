namespace NForm {
  export type FormType = `inline` | "bloack";
  export type FormState = `active` | "disabled";

  export interface FormInfo {
    type: FormType;
    state: FormState;
  }
}

namespace Utils2 {
 export const SECRET2: string = "123232";
 export const PI = 3.14;
 export const getPass2 = (name: string, age: number): string => `${name} ${age}`;
 export const isEmpty2 = <T>(data: T): boolean => !data;
}
