import { Todo } from "../types/todo";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoItemt({ todo, onCompletedChange, onDelete }: TodoItemProps) {
    return (
        <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 p-2 rounded-md border-gray-400 bg-white hover:bg-slate-50 grow">
                <input type="checkbox"
                    className="scale-125"
                    checked={todo.completed}
                    onChange={(e) => onCompletedChange(todo.id, e.target.checked)}

                />
                <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                    {todo.title}
                </span>
            </label>
            <button onClick={() => onDelete(todo.id)}>
                <Trash2 size={20} className="text-red-400" />
            </button>
        </div>
    )
}