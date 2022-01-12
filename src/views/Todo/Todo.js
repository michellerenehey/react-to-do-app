import TodoList from '../../components/TodoList/TodoList';
import { createTodo } from '../../services/todos';
import { useEffect, useState } from 'react';
import { fetchTodos } from '../../services/todos';

export default function Todo() {
  const [todos, setTodos] = useState('');
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState('');
  const [message, setMessage] = useState('');
  // const [input, setInput] = useState('');

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

  // const resetInput = () => {};

  // handlesubmit function on form adds a list item to the database
  // use effect to grab the list of to-do items
  // map through them to display them on the page

  // handle click on checkbox to mark list item as complete

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
            <TodoList key={todo.id} {...todo} />
          ))}
        </div>
      )}
    </div>
  );
}
