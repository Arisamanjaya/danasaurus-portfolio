import React from 'react';
import ProjectItem from './ProjectItem';
import kisahloka from '/Users/arisamanjaya/Documents/CODE/portfolio-2024-project/src/assets/KisahLoka.png';


const DesignerSection = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-6 lg:px-8 py-28 flex flex-col justify-center items-center gap-16">
            <div className="text-center max-w-[736px]">
                <p className="text-base font-normal leading-none text-primary-600 tracking-wide mb-4">
                    DESIGNER
                </p>
                <h2 className="text-3xl text-primary-600 font-semibold leading-9 mb-8">
                    My Journey as an UI/UX Designer through some various projects
                </h2>
            </div>
            <div className="transition-width ease-in-out grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-6 lg:gap-6">
                <div className='flex justify-center lg:justify-end'>
                    <ProjectItem
                        title="Selfqure : Mental Health App"
                        description="Lorem ipsum dolor sit amet consectetur. Sit sed scelerisque malesuada convallis."
                    />
                </div>
                <div className='flex justify-center lg:justify-start'>
                    <ProjectItem
                    title="Bi-Talk : Language Learning App"
                    description="Ini contoh Deskripsi, berkolaborasi dengan Machine Learning, menghasilkan apps yang dapat menerawang masa depan."
                    />
                </div>
                <div className='flex justify-center lg:justify-end'>
                    <ProjectItem
                    title="Huniku : Aplikasi Pencari Hunian dan Properti"
                    description="Ini contoh Deskripsi, berkolaborasi dengan Machine Learning, menghasilkan apps yang dapat menerawang masa depan."
                    />
                </div>
                <div className='flex justify-center lg:justify-start'>
                    <ProjectItem
                    title="Kisah Loka : Website Kisah Cerita Rakyat Nusantara"
                    description="Ini contoh Deskripsi, berkolaborasi dengan Machine Learning, menghasilkan apps yang dapat menerawang masa depan."
                    />
                </div>
            </div>
        </section>
    );
}

export default DesignerSection;
