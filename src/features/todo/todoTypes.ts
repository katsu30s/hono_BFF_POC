export type AddTodoInput = {
  title: string;
};

export type UpdateTodoInput = {
  id: number;
  title: string;
  completed: boolean;
};

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
