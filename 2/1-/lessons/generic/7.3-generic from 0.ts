interface User7 {
  name: string;
  age: number;
}

interface Message7 {
  id: number;
  text: string;
}

interface User7State {
  loading: boolean;
  error: Error | null;
  data: User;
}

interface Message7State {
  loading: boolean;
  error: Error | null;
  data: Message7;
}

interface State7<T> {
  loading: boolean;
  error: Error | null;
  data: T;
}

type UserState7T = State7<User7State>;
type MessageState7T = State7<Message7State>;

const messageSatete: Message7State = {
  loading: false,
  error: null,
  data: {
    id: 1,
    text: "344",
  },
};
