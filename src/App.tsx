import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";



function App() {
  const { todos, setTodoCompleted, addTodo, onDelete, deleteAllCompletedTodos } = useTodos();
  return (
    <main className='py-10 h-screen space-y-5'>
      <h1 className="font-bold text-3xl text-center">Your Todo</h1>
      <div className="max-w-lg mx-auto bg-slate-100 p-5 rounded-md space-y-4">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={onDelete} />
        <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos} />
      </div>
    </main>
  )
}

export default App
