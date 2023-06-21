import React,{useState} from 'react'
import { Home,About,Contact,Resume,Portfolio } from './components'
import {HomeIcon,UserIcon,PresentationChartLineIcon, PaperAirplaneIcon, BriefcaseIcon} from '@heroicons/react/24/solid'

const App = () => {
  const [view,setView] = useState('home')
  return (
    <div className='h-screen bg-red-900 flex flex-col items-center justify-center relative'>
      <div>
        {view == 'home' && <Home/>}
        {view == 'about' && <About/>}
        {view == 'contact' && <Contact/>}
        {view == 'resume' && <Resume/>}
        {view == 'portfolio' && <Portfolio/>}
      </div>
      <div className='bg-yellow-600 text-black p-4 absolute top-[50%] bottom-[50%] right-4 h-fit grid gap-2 rounded-sm shadow-sm shadow-yellow-800'>
        <HomeIcon 
        onClick={() => setView('home')}
        className='w-5 cursor-pointer active:text-white' />
        <UserIcon 
        onClick={() => setView('about')}
        className='w-5 cursor-pointer active:text-white' />
        <BriefcaseIcon 
        onClick={() => setView('resume')}
        className='w-5 cursor-pointer active:text-white' />
        <PresentationChartLineIcon 
        onClick={() => setView('portfolio')}
        className='w-5 cursor-pointer active:text-white' />
        <PaperAirplaneIcon 
        onClick={() => setView('contact')}
        className='w-5 cursor-pointer active:text-white' />
      </div>
    </div>
  )
}

export default App