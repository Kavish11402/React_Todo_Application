import Title from "../List Components/Title";
import Description from "../List Components/Description";
import DoneDelete from "../List Components/DoneDelete";
import Category from "../List Components/Category";
import Done from "../List Components/Done";
import Date from "../List Components/Date";

export default function Todo({todo})
{
    return(

        <div className="max-w-9xl
                        flex justify-between
                        bg-orange-200
                        shadow-2xl
                        mt-12 mb-20 mx-auto
                        px-28
                        py-6
                        rounded-2xl
                        border-solid border-4 border-orange-300">



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