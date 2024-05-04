// SocialMediaItem.js
import React from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';

const handleButtonClick = (platform) => {
    switch (platform) {
        case 'Instagram':
            window.open('https://www.instagram.com/dana.sauruss', '_blank');
            break;
            case 'Bèhance':
                window.open('https://www.behance.net/arisudana1', '_blank');
            break;
            case 'LinkedIn':
                window.open('https://www.linkedin.com/in/arisamanjaya', '_blank');
            break;
    }
};

const SocialMediaItem = ({ icon, platform, description, username }) => {
    return (
    <div className="grid grid-cols-6 items-start gap-4 bg-slate">
        <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
            {icon}
        </div>
        <div className="flex flex-col col-span-5 justify-start items-start gap-2">
            <h3 className="text-3xl font-semibold text-white">{platform}</h3>
            <p className="text-base font-medium text-white">{description}</p>
            <button className="flex items-center py-2 px-6 bg-white rounded-full marker:text-xs font-normal text-primary-900 border-none cursor-pointer focus:outline-none"
            onClick={() => handleButtonClick(platform)}>
            {username}
            <RiArrowRightUpLine className="ml-1" />
            </button>
        </div>
    </div>
    );
};

export default SocialMediaItem;
