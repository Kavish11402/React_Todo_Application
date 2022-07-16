import DayNight from "./Day Night Mode/DayNight";

export default function NavBar()
{
  return(
    <div>
      <nav className={"fixed top-0 left-0 right-0 h-20 flex justify-between px-32 text-white mx-auto bg-gray-800 items-center"}>
        <div className={"flex"}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
            </svg>
            <h1 className={"font-bold text-4xl text-orange-400 px-4 pr-20"} >ToDo-Tasks</h1>
            <button className={"text-md bg-gray-600 rounded-lg px-3 mr-2 transition ease-in-out hover:bg-gray-500"}>Home</button>
            <button className={"text-md bg-gray-600 rounded-lg px-3 mx-2 transition ease-in-out hover:bg-gray-500"}>Contact Us</button>
        </div>
        <div className="flex">
            <button className={"text-md bg-indigo-700 px-5 py-2 rounded-lg transition ease-in-out hover:bg-indigo-500"} >+&nbsp;&nbsp;Add New Task</button>
            <DayNight/>
        </div>
      </nav>
    </div>
  );
}