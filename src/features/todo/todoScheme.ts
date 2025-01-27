export const todoTypeDefs = `#graphql
  type Todo {
    id: ID
    title: String
    completed: Boolean
  }

  input AddTodoAddInput {
    title: String!
  }

  input UpdateTodoAddInput {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Mutation {
    addTodo(input: AddTodoAddInput): Todo
    updateTodo(input: UpdateTodoAddInput): Todo
  }
`;
