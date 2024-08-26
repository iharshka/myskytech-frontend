import { Send, Loader, CircleCheckBig, CircleX } from 'lucide-react';
import { useEffect, useState } from 'react';
import CallAPI from '../hooks/CallAPI';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [msg, setMsg] = useState('');
    const [opt, setOpt] = useState(false);

    const { loading, data, error, fetchData } = CallAPI({
        url: 'https://myskytech-backend.vercel.app/send-contact-details', 
        method: 'POST', 
        body: JSON.stringify({
            name,
            email,
            tel,
            msg,
            optForFollowups: opt
        }), 
    })

    const handleSubmit = () => {
        event.preventDefault()
        fetchData();
    }

    return (
        <>
        <div className="text-center items-center mt-20" id='contact'>
        <div className="mt-10">
            <span className="rounded-full py-1 px-2 bg-neutral-900 text-indigo-500 font-medium tracking-tight text-md h-6 uppercase">
                Contact Us
            </span>
            <form>
            <div className="flex flex-col space-y-5 mt-10 justify-center items-center text-neutral-500">
                <input type="text" required name="name" id="name" placeholder='Name' value={name} onChange={(e) => {setName(e.target.value)}} className="w lg:w-1/3 rounded-full border border-neutral-800 p-2 focus:outline-none placeholder:text-neutral-700 bg-[#121212] lg:bg-neutral-900" />
                <input type="email" required name="email" id="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="w lg:w-1/3 rounded-full border border-neutral-800 p-2 focus:outline-none placeholder:text-neutral-700 bg-[#121212] lg:bg-neutral-900" />
                <input type="tel" required name="tel" id="tel" placeholder="Phone Number" value={tel} onChange={(e) => {setTel(e.target.value)}} className="w lg:w-1/3 rounded-full border border-neutral-800 p-2 focus:outline-none placeholder:text-neutral-700 bg-[#121212] lg:bg-neutral-900" />
                <input type="text" required name="msg" id="msg" placeholder="Enter your message here" value={msg} onChange={(e) => {setMsg(e.target.value)}} className="w lg:w-1/3 rounded-full border border-neutral-800 p-3 focus:outline-none placeholder:text-neutral-700 bg-[#121212] lg:bg-neutral-900" />
                <div className="flex flex-row space-x-2">
                    <input type="checkbox" name="optForFollowups" id="optForFollowups" checked={opt} onChange={(e) => {setOpt(e.target.checked)}} />
                    <label htmlFor="optForFollowups" className='text-sm'>Subscribe for MST's Offerings & NewsLetter</label>
                </div>
                <button type="submit" onClick={handleSubmit} className="text-slate-50 text-sm bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full p-2">
                    <div className='flex flex-row space-x-1'>
                        {loading ? <Loader /> : <Send />} 
                        <span>{loading ? "Submitting" : "Submit"}</span>
                    </div>
                </button>
                {<SubmitMessage data={data} error={error} />}
            </div>
            </form>
        </div>
        </div>
        </>
    )
} 

function SubmitMessage({ data, error }) {
    const [visibility, setVisibility] = useState(true);
    useEffect(() => {
        setVisibility(true);
        const timer = setTimeout(() => {
            setVisibility(false)
        }, 7000);
        return () => clearTimeout(timer);
        }, [data, error]);
    if(!visibility)
        return null;
    if(!error && data && data.status == 200) return (
        <div className='flex flex-row space-x-1'>
            <CircleCheckBig className='text-indigo-500' />
            <span className='text-neutral-500 text-sm'>Thank you for contacting us! We will get in touch with you shortly!</span>
        </div>
    )
    else if(data && data.status == 411) return (
        <div className='flex flex-row space-x-1'>
            <CircleX className='text-red-500' />
            <span className='text-neutral-500 text-sm'>Wrong Email or/& Phone, check the inputs & try again!</span>
        </div>
    )
    else if(error || (data && data.status == 500)) return (
        <div className='flex flex-row space-x-1'>
            <CircleX className='text-red-500' />
            <span className='text-neutral-500 text-sm'>There was an error submitting the response, please retry!</span>
        </div>
    )
    return null;
}