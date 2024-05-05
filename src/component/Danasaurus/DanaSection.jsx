// DanaSection.js

import React from 'react';
import SocialMediaItem from './SocialMediaItem';
import { RiInstagramFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiBehanceFill } from "react-icons/ri";
import profileImg from '/src/assets/Compresed copy 2.png';

const DanaSection = () => {
    return (
        <section className="max-w mx-auto px-6 lg:px-8 py-28 bg-primary-900 flex flex-col justify-center items-center gap-16">
        <div className="text-center">
            <p className="text-base font-normal text-white leading-none tracking-widest mb-4">
                DANASAURUS
            </p>
            <h2 className="text-3xl font-semibold text-white leading-9">
                Sometimes I create random<br />UIX content on Social Media as Danasaurus
            </h2>
        </div>
        <img className="w-60 h-60 rounded-full" src={profileImg} alt="Profile" />
        
        <div className="max-w-lg flex flex-col gap-8">
            <SocialMediaItem
            icon={<RiInstagramFill size={40} color='#102237'/>}
            platform="Instagram"
            description="Main platform used to share my random UIX Content. I'm occasionally posting UI Design and Memes"
            username="@dana.sauruss"
            />
            <SocialMediaItem
            icon={<RiLinkedinFill size={40} color='#102237'/>}
            platform="LinkedIn"
            description="Place to share professional experiences and achievements"
            username="LinkedIn"
            />
            <SocialMediaItem
            icon={<RiBehanceFill size={40} color='#102237'/>}
            platform="Bèhance"
            description="Place to post design portfolio projects"
            username="Bèhance"
            />
        </div>
        </section>
    );
}

export default DanaSection;
