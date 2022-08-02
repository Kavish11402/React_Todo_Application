import {useEffect, useState} from "react";
import {toast} from "react-hot-toast";
import {db} from "./Firebase";
import { getDocs, collection } from "firebase/firestore";
import Loading from "./Components/Loading";
import MyIndex from "./Components/MyIndex";

function setOnLocal(todoList){  localStorage.setItem("todosList",JSON.stringify(todoList)) }

function getFromLocal(setTodosList){ setTodosList(JSON.parse(localStorage.getItem("todosList"))) }



function mapTodos(todos, temp , setLoading)
{
    temp.map((e)=>
    {
        todos.push(e)
        return null
    })
    setLoading(false)
}

async function getFromFireBase(todos ,setTodos , setLoading)
{
    const snapshot = await getDocs(collection(db,"todos"))
    const temp  = snapshot.docs.map((doc)=>{
        return doc.data()
    })

    await mapTodos(todos,temp , setLoading)
}

function deleteTodo(todoId , todos ,setTodos , toggle){
    if (window.confirm("Are you sure you want to delete ?"))
    {
        let newTodo = todos.filter((todo)=>{
            return(
                todo.id !== todoId
            )
        })

        setTodos(newTodo)
        toggle(0)
        toast.success("Todo Deleted")
    }
    else
        toast.error("Deletion Cancelled")
}

function addNewTodo(newTodo,todos,setIsOpen)
{
    if(todos.length===0)
        newTodo = {...newTodo , "id":1}
    else
        newTodo = {...newTodo , "id":((todos[(todos.length-1)].id)+1)}

    todos.push(newTodo)
    setIsOpen(false)
    toast.success("Todo Added Successfully",{
        style: {
            fontWeight: "bold" ,
            fontSize: "larger"  ,
            borderRadius: '10px',
        }
    })
}


export default function App() {


    //const [show,setShow] = useState(true)

    const day =
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 shadow-blue-200" viewBox="0 0 20 20" fill="currentColor">

            <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
            />
        </svg>

    const night =
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
        </svg>




    const [todos , setTodos] = useState([])
    const [loading ,setLoading] = useState(true)



    useEffect(()=>{

        getFromFireBase( todos ,setTodos , setLoading)


        /*getFromLocal(setTodos)*/

        /*setOnLocal([
            {
                " id": 1,
                "title": "Reactive dedicated project",
                "description": "Down-sized asynchronous conglomeration",
                "category": "Ameliorated human-resource paradigm",
                "done": false,
                "date": "04/10/2021"
            },
            {
                "id": 2,
                "title": "Optional foreground neural-net",
                "description": "Down-sized system-worthy framework",
                "category": "Multi-lateral demand-driven website",
                "done": false,
                "date": "03/07/2021"
            },
            {
                "id": 3,
                "title": "Inverse value-added service-desk",
                "description": "Multi-tiered reciprocal moratorium",
                "category": "Profit-focused homogeneous pricing structure",
                "done": true,
                "date": "27/11/2021"
            },
            {
                "id": 4,
                "title": "Inverse directional migration",
                "description": "Up-sized high-level leverage",
                "category": "Robust even-keeled solution",
                "done": false,
                "date": "18/07/2021"
            },
            {
                "id": 5,
                "title": "Synchronised empowering paradigm",
                "description": "Open-architected interactive monitoring",
                "category": "Progressive even-keeled info-mediaries",
                "done": true,
                "date": "08/03/2022"
            },
            {
                "id": 6,
                "title": "Switchable bandwidth-monitored challenge",
                "description": "User-centric bottom-line extranet",
                "category": "Balanced homogeneous leverage",
                "done": false,
                "date": "28/02/2022"
            },
            {
                "id": 7,
                "title": "Function-based discrete benchmark",
                "description": "Object-based grid-enabled policy",
                "category": "Monitored hybrid application",
                "done": false,
                "date": "30/05/2022"
            },
            {
                "id": 8,
                "title": "Intuitive dynamic emulation",
                "description": "Open-architected asymmetric installation",
                "category": "Inverse mission-critical frame",
                "done": false,
                "date": "09/10/2021"
            },
            {
                "id": 9,
                "title": "Switchable explicit parallelism",
                "description": "Centralized solution-oriented initiative",
                "category": "Team-oriented attitude-oriented archive",
                "done": true,
                "date": "06/07/2022"
            },
            {
                "id": 10,
                "title": "Cross-group full-range hardware",
                "description": "User-friendly maximized complexity",
                "category": "User-centric needs-based framework",
                "done": false,
                "date": "25/01/2022"
            }
        ])*/

    },[])




    const [todoTheme,setTodoTheme] = useState("max-w-9xl flex justify-between bg-orange-200 shadow-2xl mt-12 mb-20 mx-auto px-28 py-6 rounded-2xl border-solid border-4 border-orange-300")
    const [isOpen, setIsOpen] = useState(false)
    const [btnText,setBtnText] =useState(night)
    const [btnIcon,setBtnIcon] = useState("text-stone-700 transition ease-in-out mx-auto")
    const [dayNight,setDayNight] = useState("flex items-center  rounded-tl-2xl rounded-bl-2xl fixed top-32 right-0 bg-slate-500  h-14 w-28")
    const [Theme,setTheme] =useState("absolute top-0 left-0 right-0")


    const toggle = (change=0)=>{
        if((Theme==="absolute top-0 left-0 right-0 bg-gray-600 h-max"||Theme==="absolute top-0 left-0 right-0 bg-gray-600 h-screen")&&change===1)
        {
            setTheme("absolute top-0 left-0 right-0")

            setBtnText(night)
            setBtnIcon("text-stone-700 transition ease-in-out mx-auto")
            setDayNight("flex items-center  rounded-tl-2xl rounded-bl-2xl fixed top-32 right-0 bg-slate-500  h-14 w-28")

            setTodoTheme("max-w-9xl flex justify-between bg-orange-200 shadow-2xl mt-12 mb-20 mx-auto px-28 py-6 rounded-2xl border-solid border-4 border-orange-300")
        }
        else {
            if (todos.length<=2)
            {setTheme("absolute top-0 left-0 right-0 bg-gray-600 h-screen")}
            else
            {setTheme("absolute top-0 left-0 right-0 bg-gray-600 h-max")}
            setDayNight("flex items-center  rounded-tl-2xl rounded-bl-2xl fixed top-32 right-0 bg-white  h-14 w-28")
            setBtnIcon("text-yellow-400 transition ease-in-out mx-auto")
            setBtnText(day)
            setTodoTheme("text-white max-w-9xl flex justify-between bg-gray-900 shadow-2xl shadow-blue-200 mt-12 mb-20 mx-auto px-28 py-6 rounded-2xl border-solid border-4 border-white")
            if(change===1){
                toast("Dark Mode Activated", {
                    style: {
                        border: "2px solid white",
                        fontWeight: "bold",
                        fontSize: "larger",
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    }
                })
            }
        }
    }

    return (
        <div className="relative ">
            {

                loading? <Loading/> : <MyIndex isOpen={isOpen} addNewTodo={addNewTodo} Theme={Theme}  setIsOpen={setIsOpen}  dayNight={dayNight}  toggle={toggle}  btnIcon={btnIcon}  btnText={btnText}  todos={todos}  todoTheme={todoTheme}  deleteTodo={deleteTodo}  setTodos={setTodos}/>
            }
        </div>
    )
}