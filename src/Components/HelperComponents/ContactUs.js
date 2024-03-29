import NavBar from "../Navigation Bar/Nav Bar";
import * as emailjs from "emailjs-com";
import {useRef} from "react";
import {toast, Toaster} from "react-hot-toast";

export default function ContactUs()
{

    const form = useRef();

    function sendEmail(e)
    {
        e.preventDefault();

        emailjs.sendForm('service_fjsdqj5', 'template_jrsa5ug', form.current, '6RsLMfIYQmLStH8vb').then(

            () =>
            { toast.success("Mail Send, Our Team will Contact you soon" , { style: { maxWidth: 500 } }) },

            () =>
            { toast.error("Mail Was Not send due to Internal Problem" , { style: { maxWidth: 500 } }) });

        e.target.reset()
    }


  return(
      <div >
          <Toaster/>
          <NavBar/>

          <div className={"flex justify-center min-h-screen"}>

              <div className={"w-9/12 rounded-3xl bg-zinc-200 mb-10 mt-32"}>

                  <div className={"text-center"}>
                      <h1 className={"text-blue-900 font-bold text-5xl my-4"}>Contact Us</h1>
                      <p className={"text-gray-500"}>Any Questions or remarks? Just write us a message!</p>
                  </div>

                  <div className={"mt-5 ml-20 h-4/5 max-w-7xl flex flex-row justify-between bg-white rounded-2xl p-2"}>

                      <div className={"text-white rounded-xl w-2/5 bg-contactIMG bg-cover bg-right-bottom bg-no-repeat p-8 flex flex-col justify-evenly"}>

                          <div className={"h-fit"}>
                              <h1 className={"font-bold text-2xl mb-5"}>Contact Information</h1>
                              <p>Fill the form and our Team will get back to you within 24 hours.</p>


                              <div className={"mt-24"}>

                                  <div className={"flex mb-10"}>
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" viewBox="0 0 20 20"
                                           fill="currentColor">
                                          <path
                                              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                      </svg>

                                      <p>+91-9119976676</p>

                                  </div>


                                  <div className={"flex mb-10"}>
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" viewBox="0 0 20 20"
                                           fill="currentColor">
                                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                      </svg>
                                      <p>kavishmathur11402@gmail.com</p>
                                  </div>


                                  <div className={"flex"}>
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4" viewBox="0 0 20 20"
                                           fill="currentColor">
                                          <path fill-rule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clip-rule="evenodd"/>
                                      </svg>
                                      <p>Indira Nagar Sector-8</p>
                                  </div>

                              </div>

                          </div>


                      </div>

                      <div className={"ml-5 w-full"}>

                          <form ref={form} onSubmit={(event)=>{sendEmail(event)}}>
                              <div>
                                  <div className="px-4 p-6 bg-white">
                                      <div className="grid grid-cols-6 gap-6">


                                          <div className="col-span-3">
                                              <label className="block text-sm font-medium text-gray-700">First name</label>
                                              <input name={"first_name"} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"/>
                                          </div>


                                          <div className="col-span-3">
                                              <label className="block text-sm font-medium text-gray-700">Last name</label>
                                              <input name={"last_name"} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md" />
                                          </div>



                                          <div className="col-span-6">
                                              <label className="block text-sm font-medium text-gray-700">Email address</label>
                                              <input name={"email"} type="text"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"/>
                                          </div>



                                          <div className="col-span-6">
                                              <label className="block text-sm font-medium text-gray-700">Street address</label>
                                              <input name={"address"} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"/>
                                          </div>



                                          <div className="col-span-6">
                                              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                              <input name={"phone"} type="number" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"/>
                                          </div>

                                          <div className="col-span-6">
                                              <label className="block text-sm font-medium text-gray-700">Message</label>
                                              <input name={"message"} type="text" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md h-28"/>
                                          </div>


                                      </div>
                                  </div>

                                  <div className="flex justify-between mx-3">

                                      <button type="reset" className="ml-16 py-2 px-4 w-32 text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                          Clear
                                      </button>

                                      <button type="submit" className="mr-16 py-2 px-4 w-32 text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                          Send
                                      </button>
                                  </div>
                              </div>
                          </form>




                      </div>

                  </div>


              </div>
          </div>





      </div>
  );
}