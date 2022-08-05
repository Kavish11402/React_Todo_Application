import Todo from "../Model/Todo";
export default function Todolist({ updateDoneToDB ,todos , todoTheme , deleteDataFromDB , setTodos , toggle , setLoading , updateDataToDB , setIsOpen , setIsUpdateOpen , isUpdateOpen})
{
    return(
        <div>
            {
                todos.map(
                    (todo)=>{
                        return(
                            <Todo key={todo.id} updateDoneToDB={updateDoneToDB} todo={todo} todoTheme={todoTheme} deleteDataFromDB={deleteDataFromDB}  todos={todos} setTodos={setTodos} setLoading={setLoading} updateDataToDB={updateDataToDB}
                                  toggle={toggle}
                                  setIsOpen={setIsOpen}
                                  setIsUpdateOpen={setIsUpdateOpen}
                                  isUpdateOpen={isUpdateOpen}
                            />
                        );
                    }
                )
            }
        </div>
    )
}