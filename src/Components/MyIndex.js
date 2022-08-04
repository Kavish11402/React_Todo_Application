import {Toaster} from "react-hot-toast";
import NavBar from "./Navigation Bar/Nav Bar";
import Todolist from "./TodoComponent/Todolist";
import AddNewTodo from "./TodoComponent/AddNewTodo";

export default function MyIndex({ setLoading , addDataToDB , isOpen , Theme , setIsOpen , dayNight , toggle , btnIcon , btnText , todos , todoTheme , deleteDataFromDB , setTodos})
{
  return(
      <div className={Theme}>
          <Toaster/>
          <NavBar setIsOpen={setIsOpen} />

          <div className={dayNight}>
              <button onClick={()=>{toggle(1)}} className={btnIcon} >
                  {btnText}
              </button>
          </div>

          <div className="mt-36 ">

              <Todolist todos={todos} todoTheme={todoTheme} deleteDataFromDB={deleteDataFromDB} setTodos={setTodos} toggle={toggle} />
              <AddNewTodo todos={todos}  setIsOpen={setIsOpen} isOpen={isOpen} addDataToDB={addDataToDB} setTodos={setTodos} setLoading={setLoading} />


          </div>

      </div>
  );
}