import Title from "../List Components/Title";
import Description from "../List Components/Description";
import DoneDelete from "../List Components/DoneDelete";
import Category from "../List Components/Category";
import Done from "../List Components/Done";
import Date from "../List Components/Date";

export default function Todo({todo,todoTheme})
{
    return(

        <div className={todoTheme}>



            <div>
                <Title todoTitle={todo.title}/>
                <Description todoDesc={todo.description}/>
                <DoneDelete/>
            </div>


            <div>
                <Category todoCategory={todo.category}/>
                <Done todoStatus={todo.done}/>
                <Date todoDate={todo.date}/>
            </div>


        </div>

    )
}