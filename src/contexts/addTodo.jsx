import React from "react";

export const AddTodoContext = React.createContext();

export const AddTodoProvider = ({children}) => {
    const [showModal, setShowModal] = React.useState(false);
    
    return (
        <AddTodoContext.Provider value={{showModal, setShowModal}}>
            {children}
        </AddTodoContext.Provider>
    );
}