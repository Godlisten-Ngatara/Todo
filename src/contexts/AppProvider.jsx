import React from "react";
import { AddTodoProvider } from "./addTodo";
export const AppProvider = ({ children }) => {
    return (
        <AddTodoProvider>
            {children}
        </AddTodoProvider>
    );
}