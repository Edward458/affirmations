import { useEffect, useState } from 'react';
import moon from './assets/moon.svg';

const Moon = () => {


    // state that will control the theme
    const [ darkMode, setDarkMode ] = useState(window.localStorage.getItem("theme"));

    // change the theme depending on the state
    useEffect(() => {
        if(darkMode)
        {
            document.documentElement.classList.add('dark');
        }
        else{
            document.documentElement.classList.remove('dark');
        }
    });
    return(
            <button onClick={() => {setDarkMode(!darkMode);
                                        window.localStorage.setItem("theme",darkMode);
            }} className='self-end focus:outline-0'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:stroke-white stroke-black" fill="none" viewBox="0 0 24 24"  strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </button>
    );
};

export default Moon;