import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import useAlert from "./useAlert";
export default function useTodos() {
    const { showAlertSuccess } = useAlert();


    const [todos, setTodos] = useState(() => {
        try {
            const saveTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || "[]");
            return saveTodos;
        } catch (error) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    function setTodoCompleted(id: number, completed: boolean) {
        setTodos((prevTodo) => prevTodo.map((todo) => (todo.id === id ? { ...todo, completed } : todo)))
    }

    function addTodo(title: string) {
        setTodos(prevTodo => [
            {
                id: Date.now(),
                title: title,
                completed: false,
            }, ...prevTodo,
        ]);
        showAlertSuccess();
    }

    function onDelete(id: number) {
        setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id));
        showAlertSuccess();
    }


    function deleteAllCompletedTodos() {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
        showAlertSuccess();
    }

    return { todos, setTodoCompleted, addTodo, onDelete, deleteAllCompletedTodos };
}