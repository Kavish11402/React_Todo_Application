import { Dialog } from '@headlessui/react'

export default function AddNewTodo({isOpen, setIsOpen, addTodoTheme})
{


  return (
      <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
      >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-lg"/>

          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 flex items-center justify-center p-8">
              {/* The actual dialog panel  */}
              <Dialog.Panel className={addTodoTheme}>
                      <Dialog.Title className="font-bold text-xl mt-4 ml-8">Create New Todo</Dialog.Title>
                      <form className='px-10 py-6 flex flex-col'>

                          <input type="text" placeholder='Add Todo Title' className='border border-2 mt-8 rounded-lg'/>
                          <textarea placeholder='Add Todo Description' className='border border-2 mt-4 rounded-lg' rows="6" cols="4"/>
                          <select className='mt-4 border rounded-lg' >

                              <option>Work</option>
                              <option>Personal</option>
                              <option>Other</option>

                          </select>
                          <button className='h-16 w-60 bg-green-300 rounded-lg shadow mt-8'>Add New Todo</button>


                      </form>



              </Dialog.Panel>
          </div>
      </Dialog>
  )
}