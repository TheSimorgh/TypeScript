interface UserGData {
  name: string;
  age: number;
}
interface Articles {
  title: string;
  author: string;
  content: string;
  date: Date;
}
interface Query {
  query: {};
}
function makeRequest(url: string, params?: Query): UserGData {
  return {
    name: "string",
    age: 1,
  };
}
function makeRequest2(url: string, params?: Query): Articles {
  return {
    title: "string",
    author: "string",
    content: "string",
    date: new Date(),
  };
}

const usertest: UserGData = {
  name: "AAA",
  age: 20,
};
const articletest: Articles = {
  title: "222",
  author: "22",
  content: "22",
  date: new Date(),
};
function makeReques3<T>(url: string, data: T, params?: Query): T | undefined {
  return data;
}

function makeReques4<T>(url: string, params?: Query): T | undefined {
  let data = {} as T;
  return data;
}

function makeReques5<S, T, U>(url: S, params?: U): T | undefined {
  let data = {} as T;
  return data;
}

const myUSer = makeRequest("/user");
const myARticle = makeRequest("/article");
const myUSer2 = makeReques3<UserGData>("/user", usertest);
const myARticle2 = makeReques3<Articles>("/article", articletest);
const myARticle3 = makeReques4<Articles>("/article");

const myARticle4 = makeReques5<string, UserGData, Query>("/article");

interface User777<Q, W, E> {
  type: Q | W | E;
  name: Q | W | E;
  model: Q | W | E;
}

interface ssss {
  [key: string]: string | number | boolean | undefined;
}

const xxxxxx: User777<
  string | number | boolean,
  string | number | boolean,
  string | number | boolean
> = {
  type: "11",
  name: true,
  model: 11122,
};

// const xxxxx2:User777<ssss ,ssss,ssss>={
//     type: "undefined",
//     name: "undefined",
//     model: "undefined"
// }

type CustomerTypes = "new" | "loyal" | "bad";

class WorkWithCustomer<Q, W, E> implements User777<Q, W, E> {
  type!: Q;
  name!: W;
  model!: E;
  constructor(type: Q, name: W, model: E) {
    this.type = type;
    this.name = name;
    this.model = model;
  }
}

const VarWorkWithCustomer = new WorkWithCustomer<string, string, number>(
  "11",
  "true",
  11122
);

VarWorkWithCustomer.model;

//Extends

interface PersonInfo {
  name: string;
}

function workWithPerson<T extends PersonInfo>(arg: T): T {
  return arg;
}

workWithPerson({
  name: "string",
  age: 3343,
});

interface DeafultCustomer{
    type:"usual",
    name:"Unkown"
}
function workWithPerson2<T extends PersonInfo=DeafultCustomer>(arg: T): T {
    return arg;
  }
  

  workWithPerson2({
    type:"1111",
    name:"222"
  })