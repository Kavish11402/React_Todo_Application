import Todo from "../Model/Todo";
export default function Todolist({todos , todoTheme , deleteTodo , setTodos , toggle})
{
    return(
        <div>
            {
                todos.map(
                    (todo)=>{
                        console.log(todo)
                        return(
                            <Todo todo={todo} todoTheme={todoTheme} deleteTodo={deleteTodo}    todos={todos} setTodos={setTodos}/>
                        );
                    }
                )
            }
        </div>
    )
}