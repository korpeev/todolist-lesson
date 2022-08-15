import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
  return (
    <ul className="flex flex-col space-y-3">
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
};
