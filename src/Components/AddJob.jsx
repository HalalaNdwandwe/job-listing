import React from "react";
import Jobs from "./Jobs";
import TopBar from "./TopBar";

const AddJobs =()=> {
    return(
        <section className="py-20">
            <div className="container mx-auto ">
                <form className="border-2 border-zinc-600 rounded py-10 px-7 ml-40 mr-40">
                    <h2 className="font-bold text-xl flex justify-center">Post Job</h2>
                    <div className="mt-3">
                        <input type="text" name="tittle" placeholder="Job tittle*" className="block w-full border-2 bg-gray-100 p-2 rounded-2xl"/>
                        <input type="text" name="location" placeholder="Location*" className="block w-full border-2 bg-gray-100 p-2 rounded-2xl"/>
                        <input type="text" name="description" placeholder="Description*" className="block w-full border-2 bg-gray-100 p-2 rounded-2xl"/>
                        <input type="text" name="name" placeholder="Company Name*" className="block w-full border-2 bg-gray-100 p-2 rounded-2xl"/>
                        <input type="text" name="requirements" placeholder="Requirements*" className="block w-full border-2 bg-gray-100 p-2 rounded-2xl"/>
                        <input type="text" name="skills" placeholder="Skills*" className="block w-full border-2 bg-gray-100 p-2 rounded-2xl"/>
                    </div>
                    <button type="submit" className="btn bg-gray-700 text-white text-xl mt-8 px-4 py-2 rounded-2xl flex justify-end" onClick={<Jobs/>}>Post</button>

                </form>

            </div>

        </section>
    )
}

export default AddJobs