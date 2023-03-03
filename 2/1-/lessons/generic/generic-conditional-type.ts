type TUserType = {
  fname: string;
  lname: string;
  age: number;
};

type TPhotoType = {
  large: string;
  small: string;
};
////////////////////////////////////////

type TServerResponseType = {
  errorCode: number;
  messages: Array<string>;
  data: TUserType;
};

type TServerResponseType1 = {
  errorCode: number;
  messages: Array<string>;
  data: TPhotoType;
};

const response00: TServerResponseType = {
  errorCode: 1,
  messages: ["Array<string>"],
  data: {
    fname: "string",
    lname: "string",
    age: 1,
  },
};

const response01: TServerResponseType1 = {
  errorCode: 1,
  messages: ["Array<string>"],
  data: {
    large: "2323",
    small: "23112321",
  },
};

//////////////////////////////////////////////////
//                  GENERIC
type TServerResponseType2<T> = {
  errorCode: number;
  messages: Array<string>;
  data: T;
};

const response: TServerResponseType2<TUserType> = {
  errorCode: 1,
  messages: ["Array<string>"],
  data: {
    fname: "string",
    lname: "string",
    age: 1,
  },
};

const response1: TServerResponseType2<TPhotoType> = {
  errorCode: 1,
  messages: ["Array<string>"],
  data: {
    large: "2323",
    small: "23112321",
  },
};

/////////////////////////////////////////////////

const initialState = {
  age: 10,
  name: "JO",
  // user: null as TUserType | null,
  // photo: null as TPhotoType | null,
  user: null as NullableType<TUserType>,
  photo: null as NullableType<TPhotoType>,
};
type NullableType<T> = null | T;

type initialStateType = {
  age: number;
  name: string;
  user: null | { fname: string; lname: string; age: number };
  photo: { large: string; small: string } | null;
};
type initialStateType2 = typeof initialState;
type ActionsType = ActionC1Type | ActionC2Type;
type ActionsType2 = ReturnType<typeof ActionC1> | ReturnType<typeof ActionC2>;
type MyCustomReturnType <T>=T extends (...args:any[])=>infer R? R:never
type ActionsType3 = MyCustomReturnType<typeof ActionC1> | MyCustomReturnType<typeof ActionC2>;
type ActionsType4 = ReturnType <SomeTypes3<typeof actions>>;
type ActionsType5 = ModifiedActionsTypes<typeof actions>;

const reducer0 = (state: initialStateType = initialState, action: any) => {
  state.photo = { large: "21323", small: "sdsds" };
  state.name = "232432432";
  return state;
};

const reducer1 = (state: initialStateType2 = initialState, action: any) => {
  state.photo = { large: "21323", small: "sdsds" };
  state.name = "232432432";
  return state;
};

const reducer2 = (
  state: initialStateType2 = initialState,
  action: ActionsType
) => {
  state.photo = { large: "21323", small: "sdsds" };
  state.name = "232432432";
  return state;
};

const reducer3 = (
  state: initialStateType2 = initialState,
  action: ActionsType2
) => {
  state.photo = { large: "21323", small: "sdsds" };
  state.name = "232432432";
  const { type } = action;
  switch (type) {
    case "SET-AGE":
      return { ...state, age: action.age };
    case "SET-FULLNAME":
      return { ...state, fname: action.fname, lname: action.lname };

    default:
      state;
  }
  // return state;
};


const reducer4 = (
  state: initialStateType2 = initialState,
  action: ActionsType2
) => {
  state.photo = { large: "21323", small: "sdsds" };
  state.name = "232432432";
  return state;
};

const reducer5 = (
  state: initialStateType2 = initialState,
  action: ActionsType3
) => {
  state.photo = { large: "21323", small: "sdsds" };
  state.name = "232432432";
  const { type } = action;
  switch (type) {
    case "SET-AGE":
      return { ...state, age: action.age };
    case "SET-FULLNAME":
      return { ...state, fname: action.fname, lname: action.lname };

    default:
      state;
  }
  // return state;
};

const reducer6 = (
  state: initialStateType2 = initialState,
  action: ActionsType4
) => {
  state.photo = { large: "21323", small: "sdsds" };
  state.name = "232432432";
  const { type } = action;
  switch (type) {
    case "SET-AGE":
      return { ...state, age: action.age };
    case "SET-FULLNAME":
      return { ...state, fname: action.fname, lname: action.lname };

    default:
      state;
  }
  // return state;
};

const actionsCollection={
   ActionC1 : (age: number) => ({ type: "SET-AGE", age } as const);
   ActionC2 : (fname: string, lname: string) =>
  
}
const ActionC1 = (age: number) => ({ type: "SET-AGE", age } as const);
const ActionC2 = (fname: string, lname: string) =>
  ({ type: "SET-FULLNAME", fname, lname } as const);

type ActionC1Type = ReturnType<typeof ActionC1>;
type ActionC2Type = ReturnType<typeof ActionC2>;

const ac1Result: ActionC1Type = { type: "SET-AGE", age: 35 };
const ac2Result: ActionC2Type = {
  type: "SET-FULLNAME",
  fname: "AAAAA",
  lname: "BBBB",
};

//  type DynamicType <T>= T extends "user" ? TUserType :TPhotoType
type DynamicType<T> = T extends "user"
  ? TUserType
  : T extends "photo"
  ? TPhotoType
  : any;

const mark: "A" | "B" | "C" | "D" = "A";

let ama: DynamicType<"user"> = {
  fname: "",
  lname: "",
  age: 0,
};

let ama2: DynamicType<"photo"> = {
  large: "",
  small: "",
};

let ama3: DynamicType<"photo" | "user"> = {
  fname: "",
  lname: "",
  age: 0,
};

ama3 = { large: "", small: "" };

type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean "
  : T extends undefined
  ? "undefined "
  : T extends Function
  ? "Function "
  : "object";

type T000 = TypeName<string>;
type T001 = TypeName<"string">;
type T002 = TypeName<true>;
type T003 = TypeName<() => void>;
type T004 = TypeName<string[]>; //object



//dynamically getting the type of objectus

const objectus ={
  a:{name:"AAA"},
  b:{age:33},
  c:{site:{title:"GAGAGA"}},
}

//lines 236 and 237 is equal and return the same result
type SomeTypes=typeof objectus.a | typeof objectus.b | typeof objectus.c
type SomeTypes2<T>= T extends {[key:string]:infer U }?U:never
type SomeTypes3<T>= T extends {[key:string]:infer U }?U:never


let varObjectus :SomeTypes={age:12321}
let varObjectus2 :SomeTypes={name:"12321"}
let varObjectus3 :SomeTypes={site:{title:"AAAAA"}}
// let varObjectus4 :SomeTypes={age:"3232"} /error type is wrong
let varObjectus5 :SomeTypes={age:4343,name:"12321"}

let axa:SomeTypes2<typeof objectus>={age:11,name:"211"}
let axa1:SomeTypes2<typeof objectus>={age:11}
let axa2:ReturnType<SomeTypes3<typeof actionsCollection>>={type:"SET-AGE",age:23432}
let axa22:ReturnType<SomeTypes3<typeof actionsCollection>>={type:"SET-FULLNAME",fname:"SSS",lname:"sdsd"}

//thjis returns only functions AC1 or AC2 nor return result above line code returns result of function
let axa3:SomeTypes3<typeof actionsCollection>=(age:43454)
let axa5:ReturnType<SomeTypes3<typeof actionsCollection>>={type:"SET_AGE",age:34}
let axa4:ActionsType4={type:"SET_AGE",age:343}
type ModifiedActionsTypes <T>=ReturnType<SomeTypes3<T>>