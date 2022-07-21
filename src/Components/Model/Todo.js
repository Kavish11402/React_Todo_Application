import Title from "../List Components/Title";
import Description from "../List Components/Description";
import DoneDelete from "../List Components/DoneDelete";
import Category from "../List Components/Category";
import Done from "../List Components/Done";
import Date from "../List Components/Date";

export default function Todo({todo , todoTheme , deleteTodo , todos , setTodos})
{
    return(

        <div className={todoTheme}>



            <div>
                <Title todoTitle={todo.title}/>
                <Description todoDesc={todo.description}/>
                <DoneDelete todos={todos} todoId={todo.id} deleteTodo={deleteTodo} setTodos={setTodos}/>
            </div>


            <div>
                <Category todoCategory={todo.category}/>
                <Done todoStatus={todo.done}/>
                <Date todoDate={todo.date}/>
            </div>


        </div>




    )
}