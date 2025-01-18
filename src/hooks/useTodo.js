import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del Alma',
    //     done: false,
    // },

];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodo = (todo) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo,
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove todo',
            payload: id,
        });
    }

    const handleToggleTodo = (id) => {
        // console.log({ id })
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id,
        });
    }

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter(todo => !todo.done).length;


    return {
        todos,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
    }


}