import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";

const ContactSection = () => {
    return (
        <section className="max-w mx-auto px-6 lg:px-8 pb-28 bg-primary-900 relative">
            <div className="text-center">
                <p className="text-base font-normal text-white leading-none tracking-widest mb-4">
                    CONTACT ME
                </p>
                <h2 className="text-3xl font-semibold text-white leading-9">
                    Contact Me for Future Work
                </h2>
            </div>
            <form className="mt-8 space-y-6 max-w-lg mx-auto">
                <div>
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input id="email" type="email" className="w-full bg-slate-900 border border-slate-500 rounded-lg px-4 py-2.5 text-slate-400 placeholder-slate-400 focus:outline-none focus:border-cyan-800" placeholder="Your Email" />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea id="message" className="w-full bg-slate-900 border border-slate-500 rounded-lg px-4 py-2.5 text-slate-400 placeholder-slate-400 focus:outline-none focus:border-cyan-800" rows="4" placeholder="Your Message"></textarea>
                </div>
                <div>
                    <button type="submit" className=" bg-white rounded-full py-2 px-6 text-cyan-800 text-xs font-normal tracking-wide flex justify-center items-center focus:outline-none">
                        Send
                        <RiSendPlaneFill className='ml-1'/>
                    </button>
                </div>
            </form>
            <div className="absolute bottom-6 left-0 right-0 text-white text-xs text-center font-light">© 2024 Danasaurus. All rights reserved</div>
        </section>
    );
}

export default ContactSection;