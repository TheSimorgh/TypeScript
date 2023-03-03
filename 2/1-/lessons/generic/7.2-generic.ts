type UserType = {
  fname: string;
  lname: string;
  age: number;
};

type PhotoType = {
  large: string;
  small: string;
};

type ServerResTypeU = {
  errorCode: number;
  message: Array<string>;
  data: UserType;
};

type ServerResTypeP = {
  errorCode: number;
  message: Array<string>;
  data: PhotoType;
};

type ServerResType<T> = {
  errorCode: number;
  message: Array<string>;
  data: T;
};

const res: ServerResType<UserType> = {
  errorCode: 1,
  message: [],
  data: {
    fname: "11",
    lname: "22",
    age: 0,
  },
};

const res1: ServerResType<PhotoType> = {
  errorCode: 0,
  message: [],
  data: {
    large: "",
    small: "",
  },
};

type Nullable<T> = null | T;
const initial = {
  age: 10,
  name: "Jo",
  // user:null as UserType | null,
  user: null as Nullable<UserType>,

  // photo:null as PhotoType | null
  photo: null as Nullable<PhotoType>,
};

type StateType = typeof initial;
type ActionsTypes = AC1Type | AC2Type;
type ActionsTypes2 = ReturnType<typeof AC1> | ReturnType<typeof AC2>;
type ActionsTypes3 = MyreturnType<typeof AC1> | MyreturnType<typeof AC2>;

// const reducer = (state: StateType = initial, action: any) => {
const reducer = (state: StateType = initial, action: ActionsTypes2) => {

//   state.age;
//   state.name;
//   //state.photo=4
//   state.photo = { large: "", small: "" };

  switch (action.type) {
    case "SET_AGE":return {...state,age:action.age}
        
     
    case "SET_FULLNAME":return {...state,fname:action.fname,lname:action.lname}
  
    default:
        break;
  }

  return state;
};




const AC1 = (age: number) => ({ type: "SET_AGE", age } as const);
const AC2 = (fname: string, lname: string) => ({
  type: "SET_FULLNAME",
  fname,
  lname,
}as const);

const actions={
   AC1:(age: number) => ({ type: "SET_AGE", age } as const);
   AC2 :(fname: string, lname: string) => ({
  type: "SET_FULLNAME",
  fname,
  lname,
}as const)
}

type AC1Type = ReturnType<typeof AC1>;
type AC2Type = ReturnType<typeof AC2>;

// const action1:AC1Type={
//     type:"SET_AGE" ,
//     age: 0
// }


//CONDITIONAL TYPES
// type HipHop<T>= T extends "user" ? UserType : PhotoType
type HipHop<T>= T extends "user" ? UserType : T extends "photo"? PhotoType : number


let a: HipHop<"user">={
    fname: "",
    lname: "",
    age: 0
}
let b: HipHop<"photo">={
    large: "",
    small: ""
}


let c: HipHop<"user" | "photo">={
    fname: "",
    lname: "",
    age: 0
}

c={
    large: "",
    small: ""
}



type MyreturnType<T>= T extends (...arg:any[])=>infer R ? R :never


const objec ={
    a:{name:"A"},
    b:{age:1},
    c:{site:{title:"1221"}},
}


type ObjType =typeof objec.a | typeof objec.b | typeof objec.c
//INFERNVALUE TYPES 
type ObjTypeInfern <T> = T extends {[key:string]:infer U}?U:never;

let hipHop :ObjType={name:"A"} //{age:1} / {site:{title:"1221"}}
let hipHop1 :ObjType={name:"A",age:2,site:{title:"1221" } }//{age:1} / {site:{title:"1221"}}



let infernTtypeObj:ObjTypeInfern<typeof objec>={age:3}
let infernTtypeObj1:ObjTypeInfern<typeof objec>={age:"3"}
let infernTtypeObj2:ReturnType<ObjTypeInfern<typeof actions>>={type:"SET_FULLNAME",fname:"3434",lname:"232323"}

type ACTIONS_TYPES<T>=ReturnType<T>