import Todo from "../Model/Todo";
export default function Todolist({todos , todoTheme , deleteTodo , setTodos})
{
    return(
        <div>
            {
                todos.map(
                    (todo)=>{
                        return(
                            <Todo todo={todo} todoTheme={todoTheme} deleteTodo={deleteTodo}    todos={todos} setTodos={setTodos}/>
                        );
                    }
                )
            }
        </div>
    )
}