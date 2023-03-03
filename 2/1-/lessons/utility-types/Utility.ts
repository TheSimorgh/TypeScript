type Pers1 = {
  name: string;
  age: number;
};

type Pers2 =Partial<Pers1> ;


type MyPartial<T>={[P in keyof T]?:T[P]  }

type Pers3 =MyPartial<Pers1> ;
  

type Animale  =Partial<{name:string,weight:number}>
type Animale1 =Required<{name:string,weight:number}>
type Animale2 =Readonly<{name?:string,weight?:number}>
type Animale3 =Readonly<{name:string,weight:number}>
type CustomRequired <T>={[P in keyof T]-?:T[P]}
type Pers4 =CustomRequired<Pers1> ;


type Color1 = string | undefined | null
type Color2 = NonNullable<Color1>
type MyNunNullable <T>=T extends null | undefined ? never : T
type Color3 = MyNunNullable<Color1>


type Dimensions1={w:number,h:number,l:number}

type Dimensions2=Record<"w"|"h"|"l",number>
type Teste=keyof any
type MyRecord <K extends keyof any,T> ={[P in K]:T}
type Dimensions3=MyRecord<"w"|"h"|"l",number>
