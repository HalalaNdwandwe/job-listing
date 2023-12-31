import React from "react";

const Search = () => {
    return (
        <div className="searchBar bg-transparent grid gp-2  rounded-[2px] p-[2rem] ">
            <form action="">

                <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">

                    <div className="flex gap-2 items-center">
                        <span className="material-symbols-outlined text-[25px] icon">search</span>
                        <input type="text" className="bg-transparent text-blue-500 focus:outline-none w-[100%]" placeholder="Search Job Here..."/>
                    

                    </div>

                </div>
            </form>
        </div>
    )
}
export default Search