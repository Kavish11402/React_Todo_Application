import { Dialog } from '@headlessui/react'

export default function AddNewTodo({isOpen, setIsOpen, addTodoTheme})
{


  return (
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">

          <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

          <div className="fixed inset-0 flex items-center justify-center p-8">


              <div className={"w-1/2 rounded-xl bg-white"}>


                  <form>

                      {/*Header*/}
                      <header className={"bg-gray-400/50 rounded-t-xl text-center text-3xl font-bold py-2.5"} >Create New Todo</header>


                      {/*Body*/}
                      <div className={"py-5 px-8"}>

                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Title</p>
                              <input type={"text"} required className="transition
                                                                ease-in-out
                                                                delay-100
                                                                hover:-translate-y-1
                                                                hover:scale-105
                                                                duration-300
                                                                w-full
                                                                rounded-xl
                                                                px-2
                                                                border-2
                                                                border-gray-400
                                                                focus:border-indigo-500
                                                                focus:shadow-md" />

                          </div>

                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Category</p>
                              <input type={"text"} required className="transition
                                                                ease-in-out
                                                                delay-100
                                                                hover:-translate-y-1
                                                                hover:scale-105
                                                                duration-300
                                                                w-full
                                                                rounded-xl
                                                                px-2
                                                                border-2
                                                                border-gray-400
                                                                focus:border-indigo-500
                                                                focus:shadow-md" />
                          </div>

                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Description</p>
                              <input type={"text"} required className="transition
                                                                ease-in-out
                                                                delay-100
                                                                hover:-translate-y-1
                                                                hover:scale-105
                                                                duration-300
                                                                w-full
                                                                rounded-xl
                                                                px-2
                                                                border-2
                                                                border-gray-400
                                                                focus:border-indigo-500
                                                                focus:shadow-md" />
                          </div>

                          <div className={"my-5"}>
                              <p className={"mb-2 text-md font-bold"}>Date</p>
                              <input type={"date"} required className="transition
                                                                ease-in-out
                                                                delay-100
                                                                hover:-translate-y-1
                                                                hover:scale-105
                                                                duration-300
                                                                w-full
                                                                rounded-xl
                                                                px-2
                                                                border-2
                                                                border-gray-400
                                                                focus:border-indigo-500
                                                                focus:shadow-md" />
                          </div>

                      </div>


                      {/*Footer*/}
                      <footer className={"bg-gray-400/50 rounded-b-xl py-2.5 flex justify-between"} >

                          <button className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} onClick={()=>{setIsOpen(false)}}>Cancel</button>

                          <button className={"bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm text-sm font-medium mx-6 rounded-lg py-2 px-4"} >
                              Add Todo
                          </button>

                      </footer>

                  </form>


              </div>
          </div>

      </Dialog>
  )
}