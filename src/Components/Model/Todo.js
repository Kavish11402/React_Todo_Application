import Title from "../List Components/Title";
import Description from "../List Components/Description";
import DoneDeleteUpdate from "../List Components/DoneDeleteUpdate";
import Category from "../List Components/Category";
import Done from "../List Components/Done";
import {useState} from "react";
import SaveCancel from "../List Components/SaveCancel";
import EditTodo from "../TodoComponent/EditTodo";
import NormalTodo from "../TodoComponent/NormalTodo";

export default function Todo({ updateDoneToDB ,  todo , todoTheme , deleteDataFromDB , todos , setTodos , toggle , setLoading , updateDataToDB ,  setIsOpen , isUpdateOpen , setIsUpdateOpen})
{
    const [updateTodo,setUpdateTodo]= useState(false)
    return(

        <div>
            {
                updateTodo? <EditTodo todo={todo} setUpdateTodo={setUpdateTodo}  setTodos={setTodos} setLoading={setLoading}  todoTheme={todoTheme} updateDataToDB={updateDataToDB} /> : <NormalTodo todo={todo}
                                                                                                     deleteDataFromDB={deleteDataFromDB}
                                                                                                     updateDoneToDB={updateDoneToDB}
                                                                                                      updateDataToDB={updateDataToDB}
                                                                                                      setLoading={setLoading}
                                                                                                      setTodos={setTodos}
                                                                                                      toggle={toggle}
                                                                                                      setIsUpdateOpen={setIsUpdateOpen}
                                                                                                      isUpdateOpen={isUpdateOpen}
                                                                                                      setIsOpen={setIsOpen}
                                                                                                      setUpdateTodo={setUpdateTodo}
                                                                                                      todoTheme={todoTheme}/>
            }
        </div>

    )
}