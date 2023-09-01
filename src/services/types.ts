export interface ITodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IGetTodos {
  data: ITodos[];
}
