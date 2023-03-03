interface IUserUserClass {
  name: string;
  surname: string;
}
interface ICustomerInfo {
  getInfo(): void;
}
class UserClass {
  name: string;
  surname: string;
  private msg: string = "private Hello";
  protected msg2: string = "protected Hello";
  static msg3: string = "static Hello";

  constructor(props: IUserUserClass) {
    this.name = props.name;
    this.surname = props.surname;
  }
  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
  getMsg(password: string | number): string | number | null | undefined {
    if (password === 123) {
      return this.msg;
    }
    return null;
  }
  private getFullName2(): string {
    return `${this.name} ${this.surname}`;
  }
}

const myUserClass = new UserClass({
  name: "EEE",
  surname: "BBB",
});
myUserClass.getFullName();
myUserClass;

interface ICustomerClass extends IUserUserClass {
  bill: number;
}

class CustomerClass extends UserClass {
  bill: number;
  constructor(props: { name: string; surname: string; bill: number }) {
    super({ name: props.name, surname: props.surname });
    // constructor(props:ICustomerClass){
    //     super({name:props.name,surname:props.surname})
    this.bill = props.bill;
  }
  getBill(): string {
    return `Mr ${super.name} ,you have $${this.bill}`;
  }
}

const mycustomer = new CustomerClass({
  name: "aaaa",
  surname: "bbb",
  bill: 1000,
});

mycustomer.getFullName;

class UserClass2 implements ICustomerClass, ICustomerInfo {
  bill: number;
  name: string;
  surname: string;
  constructor(props: ICustomerClass) {
    this.name = props.name;
    this.surname = props.surname;
    this.bill = props.bill;
  }

  getInfo(): void {
    console.log(this.name, this.surname, this.bill);
  }
}
/////////////////////////////////////////////////////////

interface TakePHoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}
interface Shorts {
  createShorts(): void;
}
abstract class Video {
  constructor(
    public videoName: string,
    public videoSize: string,
    public videoDuration: number,
    public videoType: string,
    public published: boolean
  ) {}
  abstract getVideoInfo(): void;
}
class UrlLink {
  constructor(public link: string) {}
}
class Instagram extends UrlLink implements TakePHoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public link: string
  ) {
    super(link);
  }
  createStory(): void {
    console.log("Create-Story");
  }
}

const Insta = new Instagram("AAA", "BBB", 45, "https://sdsd");
Insta.link;
class Youtube extends Video implements TakePHoto, Shorts {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string,
    public videoName: string,
    public videoSize: string,
    public videoDuration: number,
    public videoType: string,
   public published: boolean
  ) {
    super(videoName, videoSize, videoDuration, videoType, published);
  }
  public createShorts(): void {
    console.log("Create-Shorts");
  }
  getVideoInfo(): void {
    console.log(
      `${this.cameraMode}, ${this.filter},${this.burst} ,${this.videoName}  ${this.videoSize}, ${this.videoDuration},${this.videoType},${this.published})`
    );
  }
}


const xa1=new Youtube("1","2",3,"4","3343","232",5,"5",true)
xa1.getVideoInfo()
xa1.createShorts()
