import Todo from "../Model/Todo";
export default function Todolist({todos ,todoTheme})
{
    return(
        <div>
            {
                todos.map(
                    (todo)=>{
                        return(
                            <Todo todo={todo} todoTheme={todoTheme}/>
                        );
                    }
                )
            }
        </div>
    )
}