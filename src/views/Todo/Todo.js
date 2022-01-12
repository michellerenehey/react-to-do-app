import TodoList from '../../components/TodoList/TodoList';
import { createTodo, fetchTodos, toggleCompleted } from '../../services/todos';
import { useEffect, useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState('');
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTodos();
      setTodos(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const [data] = await createTodo(task);
      setTodos((prevState) => [...prevState, data]);
      setTask('');
      setMessage('Successfully added task!');
    } catch {
      setMessage('Oh no! Try again!');
    }
  };

  const handleToggle = async (todo) => {
    await toggleCompleted(todo.id, !todo.is_complete);
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...todo, is_complete: !todo.is_complete } : item
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      {loading ? (
        <p>page is loading...</p>
      ) : (
        <div>
          <form>
            <label>Enter a task:</label>
            <input type="text" onChange={(e) => setTask(e.target.value)} value={task} />
            <button onClick={handleSubmit}>Save</button>
          </form>
          {message}
          {todos.map((todo) => (
            <TodoList key={todo.id} todo={todo} handleToggle={handleToggle} />
          ))}
        </div>
      )}
    </div>
  );
}
