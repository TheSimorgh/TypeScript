interface Accommodation{
    [key:string]:any
    title:string;
    location:string;
    address:string;
    countOfRooms:number;

    // title?:string;
    // location?:string;
    // address?:string;
    // countOfRooms?:number;
}

const SAccommodation:Pick<Accommodation,"title"|"location">={
    title: "",
    location: ""
}

const SAccommodation2:Omit<Accommodation,"title"|"location">={
    address:"string",
    countOfRooms:123,
}

const arr1232:ReadonlyArray<number|string>=[2,3,6,8]

const PartialAccommodation:Partial <Accommodation>={
    title:"string",
    location:"string",
    countOfRooms:1,
    sdsds:1
}

const RequiredAccommodation:Required <Accommodation>={
    title: "string",
    location: "string",
    countOfRooms: 1,
  
    address: "32",
    sdsds: 1
}


interface CatInfo {
    age: number;
    breed: string;
  }
   
  type CatName = "miffy" | "boris" | "mordred";
   
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
  };
   
  cats.boris;

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }
   
  type TodoPreview22 = Omit<Todo, "description">;
   
  const todo22: TodoPreview22 = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
  };
   
  todo22;
   
  const todo22: TodoPreview22
   
  type TodoInfo = Omit<Todo, "completed" | "createdAt">;
   
  const todoInfo: TodoInfo = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
  };
   
  todoInfo;