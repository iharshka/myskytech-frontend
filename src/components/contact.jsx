import { Send } from 'lucide-react';
export default function ContactForm() {
    return (
        <>
        <div className="text-center items-center mt-20" id='contact'>
        <div className="mt-10">
            <span className="rounded-full py-1 px-2 bg-neutral-900 text-indigo-500 font-medium tracking-tight text-md h-6 uppercase">
                Contact Us
            </span>
            <div className="flex flex-col space-y-5 mt-10 justify-center items-center text-neutral-500">
                <input type="email" required name="email" id="email" placeholder="Email" className="w lg:w-1/3 rounded-full border border-neutral-800 p-2 focus:outline-none placeholder:text-neutral-700 bg-neutral-900" />
                <input type="tel" required name="tel" id="tel" placeholder="Phone Number" className="w lg:w-1/3 rounded-full border border-neutral-800 p-2 focus:outline-none placeholder:text-neutral-700 bg-neutral-900" />
                <input type="text" required name="msg" id="msg" placeholder="Enter your message here" className="w lg:w-1/3 rounded-full border border-neutral-800 p-3 focus:outline-none placeholder:text-neutral-700 bg-neutral-900" />
                <button type="button" className="text-slate-50 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full p-2">
                    <Send />
                </button>
            </div>
        </div>
        </div>
        </>
    )
}