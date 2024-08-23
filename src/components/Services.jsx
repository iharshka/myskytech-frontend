import { servicesOffered } from "../constants/index.jsx";
export default function Services() {
    return (
        <>
        <div id="services" className="relative mt-20 border-b border-neutral-700/80 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-900 text-indigo-500 rounded-full h-6 text-md tracking-tight font-medium py-1 px-2 uppercase">
                    Services
                </span>
                <h2 className="text-3xl sm:5xl lg:6xl mt-5 lg:mt-10 tracking-wide">
                    What do we have to
                    <span className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-transparent bg-clip-text">
                        {" "}
                    offer?
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {servicesOffered.map((feature, index) => (
                    <div key={index} className="w-full sm:1/2 lg:w-1/3 ">
                        <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-indigo-700 justify-center items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                            <p className="text-md p-2 mb-20 text-neutral-700">{feature.description}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}