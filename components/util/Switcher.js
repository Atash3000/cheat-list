import React from 'react';
import {BsFillMoonFill} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'

function Switcher({value,onChange}) {
        // show icon dynamycly
    const dynamicIcon = value ?  <FiSun color='#fff' size='20' /> : <BsFillMoonFill color='#000' size='20' />
  return (
    <button
      onClick={onChange}
      id='darkMode'
      className='inline-flex items-center justify-center flex-shrink-0 h-8 w-8 rounded-full text-gray-900 ml-1 lg:ml-4 dark:text-gray-300 bg-gray-200 dark:bg-gray-900'
    >
        {dynamicIcon}
      <i className='icon text-gray-600 dark:text-gray-300 dark:hover:text-white icon-dark'></i>
    </button>
  );
}

export default Switcher;
