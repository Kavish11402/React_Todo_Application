import Todo from "./Model/Todo";
export default function Todolist({todos})
{
    return(
        <div>
            {
                todos.map(
                    (todo)=>{
                        return(
                            <Todo todo={todo}/>
                        );
                    }
                )
            }
        </div>
    )
}