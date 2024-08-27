
import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

const initialTodoListState = ["Learn React Content API"];

const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(initialTodoListState);

    const getNumberOfTodoItems = () => todoList.length

    const addTodo = (newTodoItem)=>{
        setTodoList([...todoList,newTodoItem])
    }

    const removeTodo = (todoIndex) => {
        const newList = todoList.filter((_, index) => index !== todoIndex);
        setTodoList(newList);
    };

    const contextValue = {
        todoList,
        setTodoList,
        getNumberOfTodoItems,
        addTodo,
        removeTodo
    };

    return (
        <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
    );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;