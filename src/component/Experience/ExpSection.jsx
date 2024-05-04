import React from "react";
import ExpTable from "./ExpTable"

const ExpSection = () => {
    return (
        <section className="max-w-screen-lg mx-auto px-6 lg:px-8 pb-28 flex flex-col justify-center items-center gap-16">
            <div className="text-center max-w-[736px]">
                <p className="text-base font-normal leading-none text-primary-600 tracking-wide mb-4">
                    EXPERIENCE
                </p>
                <h2 className="text-3xl text-primary-600 font-semibold leading-9 mb-8">
                    My valuable experience as a Designer from various Place
                </h2>
            </div>
            <div className="grid w-full gap-y-7">
                <ExpTable
                year='Apr 2024 - Present'
                place='Apple Academy UC'
                role='Apple Foundation Apprenticeship'
                />

                <ExpTable
                year='Mar 2024 - Present'
                place='Infinite Learning'
                role='Mentee Web Dev & UI/UX Designer '
                />

                <ExpTable
                year='Aug 2023 - Dec 2023'
                place='Binar Academy'
                role='Mentee UI/UX Research & Research'
                />

                <ExpTable
                year='Jul 2023 - Sep 2023'
                place='Digistar Class by Telkom'
                role='Mentee Personal Branding & UI/UX '
                />

                <ExpTable
                year='Jun 2023 - Sep 2023'
                place='Kantor Perbekel Cemagi'
                role='Intership UI/UX Designer'
                />

                <ExpTable
                year='Jan 2023 - Dec 2023'
                place='Student Innovation Centre Universitas Udayana'
                role='Member of Design Division'
                />

                <ExpTable
                year='Jan 2022 - Dec 2022'
                place='Badan Eksekutif Mahasiswa Fakultas MIPA Universitas Udayana'
                role='Member of Design Division'
                />
            </div>

        </section>
    );
}
export default ExpSection;