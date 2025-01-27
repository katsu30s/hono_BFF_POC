import type { Todo, AddTodoInput, UpdateTodoInput } from "./todoTypes.ts";

export const todoMutationResolvers = {
  addTodo: async (_: any, { input: { title } }: { input: AddTodoInput }): Promise<Todo> => {
    return {
      id: 1,
      title,
      completed: false,
    }
  },
  updateTodo: async (_: any, { input: { id, title, completed } }: { input: UpdateTodoInput }): Promise<Todo> => {
    return {
      id,
      title,
      completed,
    }
  },
};