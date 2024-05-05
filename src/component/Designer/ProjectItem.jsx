// ProjectItem.js

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const ProjectItem = ({ title, description, image}) => {
  return (
    <div className="w-[352px]">
      <image className="h-256px w-352px rounded-lg" src={image} ></image> 
      <div className="py-4 grid justify-items-center lg:justify-items-start">
        <h3 className="text-lg font-semibold text-slate-800 mb-2 text-center lg:text-start">{title}</h3>
        <p className="text-sm font-normal text-slate-500 mb-4 text-center lg:text-start">{description}</p>
        <a>
          <button className="bg-primary-500 text-white py-2 px-6 rounded-full text-xs font-normal flex items-center justify-center focus:bg-primary-400 hover:bg-primary-300 transition ease-in-out duration-500">
            View Detail
            <FiChevronRight className="ml-1" />
          </button>
        </a>
      </div>
    </div> 
  );
}

export default ProjectItem;
