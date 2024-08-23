import heroVideo from '../assets/hero.mp4'
import codeVideo from '../assets/code.mp4'
import { useState } from 'react'

export default function Hero() {
    const [comingsoonBlogs, setComingSoonBlogs] = useState("Blogs");
    const toggleComingSoonBlog = () => {
        setComingSoonBlogs(comingsoonBlogs == "Blogs" ? "Coming Soon" : "Blogs");
    }
    return (
        <>
            <div id="home" className="flex flex-col items-center mt-6 lg:mt-20">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    The only team you need to bring 
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-transparent bg-clip-text">
                        {" "}
                    your ideas to life
                    </span>
                </h1>
                <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                    Providing innovative, reliable, and customized technological solutions that empower businesses to achieve their goals and stay ahead in the competitive market.
                </p>
                <div className="flex justify-center my-10">
                    <a href="#" className="bg-gradient-to-r from-indigo-500 to-indigo-800 py-3 px-4 mx-3 rounded-md">
                        Contact Us
                    </a>
                    <a href="#" onClick={toggleComingSoonBlog} className="py-3 px-4 mx-3 rounded-md border">{comingsoonBlogs}</a>
                </div>
                <div className="flex mt-10 justify-center">
                    <video autoPlay loop muted className="rounded-lg w-1/2 border border-indigo-500 shadow-indigo-400 my-4 mx-2">
                    <source src={codeVideo} type="video/mp4" />
                    Video can't be Played!
                    </video>
                    <video autoPlay loop muted className="rounded-lg w-1/2 border border-indigo-500 shadow-indigo-400 my-4 mx-2">
                    <source src={heroVideo} type="video/mp4" />
                    Video can't be Played!
                    </video>
                </div>
            </div>
        </>
    )
}