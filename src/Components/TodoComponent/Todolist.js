import Todo from "../Model/Todo";
export default function Todolist({todos , todoTheme , deleteDataFromDB , setTodos , toggle})
{
    return(
        <div>
            {
                todos.map(
                    (todo)=>{
                        return(
                            <Todo key={todo.id} todo={todo} todoTheme={todoTheme} deleteDataFromDB={deleteDataFromDB}  todos={todos} setTodos={setTodos}/>
                        );
                    }
                )
            }
        </div>
    )
}