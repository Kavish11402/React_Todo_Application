import { Dialog } from '@headlessui/react'
import {useRef} from "react";

export default function AddNewTodo({todos,isOpen, setIsOpen , addNewTodo})
{
    const title = useRef(null)
    const category = useRef(null)
    const description = useRef(null)


    function createNewTodo(e)
    {
        e.preventDefault()
        const date = new Date()
        let newTodo =
            {
                "id": null,
                "title": String(title.current.value),
                "description": String(description.current.value),
                "category": String(category.current.value),
                "done": false,
                "date": String(date.getDate()+" / "+(date.getMonth()+1)+" / "+date.getFullYear())
            };
        addNewTodo(newTodo,todos,setIsOpen)
    }

    const options = ["Work" , "Personal" , "Study" , "Urgent" , "Other"]



  return (
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-40">

          <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

          <div className="fixed inset-0 flex items-center justify-center p-8">


              <div className={"w-1/2 rounded-xl bg-white"}>


                  <form onSubmit={(e)=>{ createNewTodo(e) }}>

                      {/*Header*/}
                      <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >Create New Todo</header>


                      {/*Body*/}
                      <div className={"py-5 px-8"}>



                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Title</p>
                              <input ref={title} type={"text"} required className="
                                                                w-full
                                                                rounded-xl
                                                                px-2
                                                                border-2
                                                                border-gray-400
                                                                focus:border-indigo-500
                                                                focus:shadow-md" placeholder="Title of TODO" />

                          </div>

                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Category</p>

                              <select ref={category} required className="
                                                                w-full
                                                                rounded-xl
                                                                px-2
                                                                border-2
                                                                border-gray-400
                                                                focus:border-indigo-500
                                                                focus:shadow-md" placeholder="Select Category of TODO">

                                  {options.map((option)=>{
                                      return(
                                          <option key={option} value={option}>
                                              {option}
                                          </option>
                                      )
                                  })}
                              </select>

                          </div>

                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Description</p>
                              <input ref={description} type={"text"} required className="
                                                                w-full
                                                                rounded-xl
                                                                px-2
                                                                border-2
                                                                border-gray-400
                                                                focus:border-indigo-500
                                                                focus:shadow-md" placeholder="Description of TODO"/>
                          </div>



                      </div>


                      {/*Footer*/}
                      <footer className={"bg-gray-400/50 rounded-b-xl py-2.5 flex justify-between"} >

                          <button className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} onClick={()=>{setIsOpen(false)}}>Cancel</button>

                          <button type={"submit"} className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} >
                              Add Todo
                          </button>

                      </footer>

                  </form>


              </div>
          </div>

      </Dialog>
  )
}