import Title from "../List Components/Title";
import Description from "../List Components/Description";
import DoneDeleteUpdate from "../List Components/DoneDeleteUpdate";
import Category from "../List Components/Category";
import Done from "../List Components/Done";

export default function NormalTodo({ todo , deleteDataFromDB , updateDoneToDB , setLoading , setTodos , toggle , setIsUpdateOpen , isUpdateOpen , setIsOpen , setUpdateTodo , todoTheme })
{
  return(
    <div className={todoTheme} >
        <div>
            <Title todoTitle={todo.title}/>
            <Description todoDesc={todo.description}/>
            <DoneDeleteUpdate
                updateDoneToDB={updateDoneToDB}
                todo={todo}
                todoId={todo.id}
                deleteDataFromDB={deleteDataFromDB}
                setTodos={setTodos}
                toggle={toggle}
                setLoading={setLoading}
                setIsUpdateOpen={setIsUpdateOpen}
                isUpdateOpen={isUpdateOpen}
                setIsOpen={setIsOpen}
                setUpdateTodo={setUpdateTodo}
            />
        </div>


        <div>
            <Category todoCategory={todo.category}/>
            <Done todoStatus={todo.done}/>
            {/*<Date todoDate={todo.date}/>*/}
        </div>
    </div>
  );
}