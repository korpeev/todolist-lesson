export const TodoItem = ({ todo }) => {
  return (
    <li key={todo.id} className="flex justify-between items-center">
      <span className="font-bold">{todo.name}</span>{' '}
      <button className="rounded bg-red-400 p-3 text-white">Delete</button>
    </li>
  );
};
