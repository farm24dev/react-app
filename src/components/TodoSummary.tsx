import { Todo } from '../types/todo'

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({ todos, deleteAllCompleted }: TodoSummaryProps) {
    const todoCompleteds = todos.filter(todo => todo.completed);
    return (
        <>
            <div className='text-center space-y-2'>
                <p>
                    {todoCompleteds.length} \ {todos.length} สำเร็จแล้ว
                </p>
                {todoCompleteds.length > 0 && <button onClick={deleteAllCompleted} className='text-red-400'>
                    ลบที่สำเสร็จแล้วทั้งหมด
                </button>}
            </div>
        </>

    )
}
