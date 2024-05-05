import React from 'react';
import { RiDownload2Line, RiMailFill } from 'react-icons/ri';


const HomeSection = () => {
    return (
        <section className="max-w mx-auto h-screen px-6 lg:px-8 py-28 bg-primary-900 flex flex-col justify-center items-center gap-16">
            <div className='max-w-sm gap-4 flex flex-col'>
                <h1 className='flex flex-col text-center font-semibold text-white text-5xl'>
                    <a href="/">
                        Dana,
                    </a>
                    <a href="">
                        Designer,
                    </a>
                    <a href="">
                        Experience,
                    </a>
                    <a href="">
                        Dansaurus
                    </a>
                </h1>
                <p className='text-base font-normal text-white text-center'>
                    Arisamanjaya is a designer based in Bali, Also Known as Danasaurus.
                </p>
                <div className='flex justify-center gap-5'>
                    <a href="">
                        <button className='bg-white rounded-full py-2 px-6 text-cyan-800 text-xs font-normal tracking-wide flex justify-center items-center focus:outline-none'>
                            Contact Me
                            < RiMailFill className='ml-1'/>
                        </button>
                    </a>
                    <a href="">
                        <button className='border border-white rounded-full py-2 px-6 text-white text-xs font-normal tracking-wide flex justify-center items-center focus:outline-none'>
                            My Resume
                            < RiDownload2Line className='ml-1'/>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;
