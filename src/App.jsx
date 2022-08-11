import { useState } from 'react'
import './App.css'
import { quotes } from './assets/Quotes';
import Moon from './Moon';

function App() {
  const [quote, setQuote] = useState(Math.floor(Math.random() * quotes.length));
  const affirmation = quotes[quote];

  

  return (
      <div className='flex flex-col items-center gap-y-20'>
          <Moon/>
          
          {/* Word Box */}
          <div className='border-solid border-4 dark:border-[#969faf] border-[#b7b3b1] rounded dark:bg-[#1e2341] bg-[#f3e0d7] h-[300px] w-[500px] flex items-center'>
              <p className='text-4xl m-2 self-center w-full dark:text-[#fffff6] text-[#1a1814]'>{affirmation}</p>
          </div>
          {/* Button that says 'Press for Affirmation' */}
          <button className='dark:bg-[#ecc380] bg-black rounded text-3xl p-2 dark:text-black text-slate-200 focus:outline-0' onClick={() => {setQuote(Math.floor(Math.random() * quotes.length))}}>Press For Affirmation</button>
      </div>
 )
}

export default App
