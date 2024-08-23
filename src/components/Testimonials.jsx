import { testimonials } from "../constants";

export default function Testimonials() {
    return (
        <>
        <div id="testimonials" className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center my-10 lg:my-20">What People have to say about us</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                            <p className="text-neutral-300">{testimonial.text}</p>
                            <div className="flex mt-8 items-start">
                                <img src={testimonial.image} alt={testimonial.user} className="w-12 h-12 mr-6 rounded-full" />
                                <div>
                                    <h6 className="text-neutral-200">{testimonial.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}