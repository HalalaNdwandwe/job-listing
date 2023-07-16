import React from 'react';
import hmImg from "../assets/App-image.jpg";


const Home = () => {
    return (
        <section className={`bg-[url(${hmImg})]`}>
            <div className='text-center'>
                <h1 className='font-extrabold text-3xl text-yellow-400 mb-4'>Explore Thousands of Jobs</h1>
                <p className='text-2xl mb-4'>Find Jobs, Employment & Career Opportunities. At your fingertips!</p>
                <button className='border-black border-2 hover:bg-sky-700 hover:text-white text-black py-2 px-20 rounded'>Get Started</button>
            </div>
            

        </section>

    )
}
export default Home