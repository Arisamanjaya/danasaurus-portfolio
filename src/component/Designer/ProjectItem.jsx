// ProjectItem.js

import React from 'react';
import { FiChevronRight } from 'react-icons/fi'; // Import ikon panah ke kiri dari library React Icons

const ProjectItem = ({ title, description }) => {
  return (
    <div className="w-[352px]">
      <div className="h-[256px] bg-gray-300 rounded-lg"></div> {/* Ini akan berisi gambar */}
      <div className="py-4 grid justify-items-center lg:justify-items-start">
        <h3 className="text-lg font-semibold text-slate-800 mb-2 text-center lg:text-start">{title}</h3>
        <p className="text-sm font-normal text-slate-500 mb-4 text-center lg:text-start">{description}</p>
        <a>
          <button className="bg-primary-500 text-white py-2 px-6 rounded-full text-xs font-normal flex items-center justify-center focus:bg-primary-400 hover:bg-primary-300 transition ease-in-out duration-500">
            View Detail
            <FiChevronRight className="ml-1" /> {/* Tambahkan ikon panah ke kiri */}
          </button>
        </a>
      </div>
    </div> 
  );
}

export default ProjectItem;
