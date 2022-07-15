export default function DoneDelete()
{
  return(
    <div>
        <button className="text-green-500
                                    w-16
                                    mr-6
                                    rounded-lg
                                    border-solid border-4 border-green-500
                                    transition ease-in-out
                                    hover:bg-green-500
                                    hover:text-white">

            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-8 w-8 mx-auto"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>

            </svg>
        </button>

        <button className="text-red-600
                                    w-16
                                    rounded-lg
                                    border-solid border-4 border-red-600
                                    transition ease-in-out
                                    hover:bg-red-600
                                    hover:text-white">

            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-8 w-8 mx-auto"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
                 stroke-width="2">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
            </svg>
        </button>
    </div>
  );
}