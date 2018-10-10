import React from 'react';
const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length? (
        todos.map(todo=>{
            return(<div key={todo.id} className="collection-item" onClick={()=>deleteTodo(todo.id)}>{todo.content}</div>);
        })
    ):(<p className="center">you have nothing need to do</p>);
    return(
        <div className="todos collection">{todoList}</div>
    );
}

export default Todos;
