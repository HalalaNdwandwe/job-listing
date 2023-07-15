import React from "react";


const TopBar =()=>{
    return(
        <div className='font-sarif '>
            <div className='flex flex-col justify-center h-24 bg-slate-200 m-10'>

               <div className='flex justify-between items-center'>
                    <div>
                        <a href='#' className='font-bold text-4xl pl-20 hover:text-sky-700 '>JOB AGENCY WEBSITE</a>
                    </div>

                    <div className="SearchBar bg-transparent grid shadow-lg shadow-greyIsh-700 gap-2 rounded-2xl">
                        <form className="bg-slate-200 w-fit py-1.5 px-5 rounded-3xl">
                            <input type="text" name="Search" placeholder="Search Job Here"className="outline-0 bg-transparent"/>      
                            <button>
                                <span className="material-symbols-outlined align-middle">search</span>
                            </button>
                        </form>
                    </div>


                    <div>
                        <ul className="flex gap-24 text-xl pr-5">
                            <li>
                                <a href="#" className="font-bold hover:text-sky-700">Home</a>
                            </li>
                            <li>
                                <a href="#" className="font-bold hover:text-sky-700">Jobs</a>
                            </li>
                            <li>
                                <a href="#" className="font-bold hover:text-sky-700">Post Job</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopBar